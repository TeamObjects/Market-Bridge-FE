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

export const checkDuplicateEmail = async (email: string | undefined) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/email-check?email=${email}`,
  );

  return response.json();
};

export const findId = async (
  name: string | undefined,
  phoneNo: string | undefined,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/email-find?name=${name}&phoneNo=${phoneNo}`,
  );

  return response.json();
};

export const findPassword = async (
  name: string | undefined,
  email: string | undefined,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/password-find?name=${name}&email=${email}`,
  );

  return response.json();
};

export const resetPassword = async (memberId: number, password: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/member/password-reset`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ memberId, password }),
    },
  );

  return response.json();
};
