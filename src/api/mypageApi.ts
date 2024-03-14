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

export const updateAddress = async (
  data: AddressData,
  id: number | undefined,
) => {
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

export const deleteAddress = async (id: number | undefined) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/address/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    },
  );

  return response.json();
};

export const findEmailInfo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/account-email`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    },
  );

  return response.json();
};

export const getAccountInfo = async (password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/account-info?password=${password}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    },
  );

  return response.json();
};
