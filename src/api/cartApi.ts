import { getLocalToken } from '@/utils/localToken';

const ACCESS_TOKEN = getLocalToken();

export const fetchCart = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.json();
};

export const changeQuantity = async (itemId: number, newQuantity: number) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ quantity: newQuantity }),
  });
};

export const deleteCart = async (cartId: number) => {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ selectedCartIds: [cartId] }),
  });
};
