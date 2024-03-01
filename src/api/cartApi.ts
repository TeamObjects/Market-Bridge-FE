export const fetchCart = async () => {
  const accessToken =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImF1dGgiOiJVU0VSIiwiZXhwIjoxNzA5MzEyOTEyfQ.ZTgG5y_B9jKCeaiyPH73NNeH33ggaWEf-1UnaJ8icTz3k_yNlMiRu9jTwRz7O9Hq26FLeyRGKVNBOT5vct2BjQ';
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
    console.log(error);
  }
};
