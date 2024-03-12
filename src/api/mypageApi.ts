import { NewAddressData } from '@/components/(auth)/(mypage)/(address)/AddressListHeader';
import { AddressItemResponse } from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import { getLocalToken } from '@/utils/localToken';

const token = getLocalToken();

export const getAddressList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/address`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    },
  );

  return response.json();
};

export const addNewAddress = async (data: NewAddressData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/address`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(data),
    },
  );

  return response.json();
};
