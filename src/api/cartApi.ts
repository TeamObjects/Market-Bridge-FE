import { getLocalToken } from '@/utils/localToken';

// const ACCESS_TOKEN = getLocalToken();

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzA5NTQ5MTY5fQ.O5ycoVWJOorokro2FrWG8nRrN5OkeHVuBqnwVtt-6g5XF5QHaYcLqhPt5mCNGnm_Q3UUxAvau1O-sgVujE70ZQ';

export const fetchCart = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.json();
  } catch (error: unknown) {
    console.error(error);
  }
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
