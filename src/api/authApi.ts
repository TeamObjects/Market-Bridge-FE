import { UserInfo } from '../components/(auth)/RegisterForm';

const registerUser = async (userInfo: UserInfo) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}auth/sign-up`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '회원가입 실패');
  }

  return response.json();
};

export default registerUser;
