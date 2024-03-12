import { AddressData } from '@/components/(auth)/(mypage)/(address)/AddressListHeader';
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

export const addNewAddress = async (data: AddressData) => {
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

export const updateAddress = async (data: AddressData, id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/address/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(data),
    },
  );

  return response.json();
};
