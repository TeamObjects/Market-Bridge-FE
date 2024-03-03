const accessToken = '';

export const fetchCart = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${accessToken}`,
      },
    });
    return response.json();
  } catch (error: unknown) {
    console.error(error);
  }
};
