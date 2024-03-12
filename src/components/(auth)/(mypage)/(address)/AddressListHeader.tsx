'use client';

import Button from '@/components/shared/Button';

import authState from '@/recoil/authAtom';
import { useSetRecoilState } from 'recoil';

import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface AddressListHeaderProps {
  scriptUrl?: string;
}

export interface AddressData {
  addressValue: {
    phoneNo: string;
    name: string;
    city: string;
    street: string;
    zipcode?: string;
    detail: string;
    alias: string;
  };
  isDefault: boolean;
}

const STYLE_BUTTON = 'mr-6 text-[18px] font-bold';

const AddressListHeader = ({ scriptUrl }: AddressListHeaderProps) => {
  const setAuthStateValue = useSetRecoilState(authState);
  const [zipcode, setZipcode] = useState('');

  const openModal = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    setZipcode(data.sigunguCode);
    setAuthStateValue((prev) => ({
      ...prev,
      addAddress: {
        ...prev.addAddress,
        address: data.address,
        isRegistered: false,
      },
    }));
  };

  const handleClick = () => {
    openModal({ onComplete: handleComplete });
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <h1 className="text-[26px]">배송지 관리</h1>
          <p className="ml-6 text-[15px] text-gray-400">
            배송지에 따라 상품정보 및 배송요형이 달라질 수 있습니다.
          </p>
        </div>
        <Button
          text="+ 새 배송지 추가"
          style={STYLE_BUTTON}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default AddressListHeader;
