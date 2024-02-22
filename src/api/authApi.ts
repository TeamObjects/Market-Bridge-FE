import { LoginUserInfo } from '@/components/(auth)/LogInForm';
import { UserInfo } from '../components/(auth)/RegisterForm';

export const registerUser = async (userInfo: UserInfo) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-up`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    },
  );

  return response.json();
};

export const loginUser = async (loginUserInfo: LoginUserInfo) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/sign-in`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginUserInfo),
    },
  );

  return response.json();
};
