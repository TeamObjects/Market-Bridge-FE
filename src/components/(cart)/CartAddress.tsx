'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Location } from '../../../public/svgs';
import { useQuery } from '@tanstack/react-query';
import { getAddressList } from '@/api/mypageApi';
import { AddressItemResponse } from '../(auth)/(mypage)/(address)/AddressListItems';

const CartAddress = () => {
  const { data } = useQuery<AddressItemResponse, Error>({
    queryKey: ['address'],
    queryFn: getAddressList,
  });
  const [address, setAddress] = useState<string>();

  if (data && !address) {
    const { city, street, detail, zipcode } = data?.data[0]?.addressValue;
    setAddress(`${city} ${street} ${detail} ${zipcode}`);
  }

  return (
    <div className="flex flex-col w-[80%] h-[40%] border justify-around items-center">
      <div className="flex w-[90%] h-[20%] items-center text-2xl">
        <Image src={Location} alt="위치" />
        <p>배송지</p>
      </div>
      <div className="flex w-[90%] h-[20%] items-center text-2xl">
        {data?.data.length === 0 ? (
          <p>등록된 주소가 없습니다.</p>
        ) : (
          <p>{address}</p>
        )}
      </div>
      {data?.data.length === 0 ? (
        <Link
          href={'/mypage/address'}
          className="flex w-[90%] h-[20%] justify-center items-center text-xl border cursor-pointer"
        >
          배송지 등록
        </Link>
      ) : (
        <Link
          href={'/mypage/address'}
          className="flex w-[90%] h-[20%] justify-center items-center text-xl border cursor-pointer"
        >
          배송지 변경
        </Link>
      )}
    </div>
  );
};

export default CartAddress;
