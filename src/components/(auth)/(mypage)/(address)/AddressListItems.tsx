'use client';

import { getAddressList } from '@/api/mypageApi';

import AddressListItem from '@/components/(auth)/(mypage)/(address)/AddressListItem';
import authState from '@/recoil/authAtom';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export interface AddressItem {
  addressId: number;
  addressValue: {
    phoneNo: string;
    name: string;
    city: string;
    street: string;
    zipcode: string;
    detail: string;
    alias: string;
  };
  isDefault: boolean;
}

export interface AddressItemResponse {
  data: AddressItem[];
}

const AddressListItems = () => {
  const { data } = useQuery<AddressItemResponse, Error>({
    queryKey: ['address'],
    queryFn: getAddressList,
  });
  const addressList = data?.data;

  const setAuthStateValue = useSetRecoilState(authState);

  useEffect(() => {
    if (addressList) {
      if (addressList.length > 0) {
        setAuthStateValue((prev) => ({ ...prev, hasAddress: true }));
      } else {
        setAuthStateValue((prev) => ({ ...prev, hasAddress: false }));
      }
    }
  }, [addressList, setAuthStateValue]);

  return (
    <>
      <nav className="flex text-[16px] text-center border-b-[1px] border-black pb-6">
        <span className="w-[8%]">선택</span>
        <span className="w-[50%]">주소</span>
        <span className="w-[15%]">받으실 분</span>
        <span className="w-[20%]">연락처</span>
        <span className="w-[7%]">수정</span>
      </nav>
      <ul>
        {addressList &&
          addressList.map((item) => (
            <AddressListItem key={item.addressId} item={item} />
          ))}
      </ul>
    </>
  );
};

export default AddressListItems;
