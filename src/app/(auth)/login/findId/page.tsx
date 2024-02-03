'use client';

import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthNav from '@/components/(auth)/(findAuth)/FindAuthNav';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import FoundAuthPage from '@/components/(auth)/(findAuth)/FoundAuthPage';
import Button from '@/components/Button';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { CiUser } from 'react-icons/ci';

const STYLE_WHITE_BUTTON =
  'w-[100%] h-[44px] p-6 mb-4 text-[13px] text-[#011B5B] border-[1px] border-solid border-[#011B5B] rounded-full bg-white';

const FindId = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const complete = searchParams.get('complete');

  if (complete === 'id') {
    return (
      <FoundAuthPage header={<FoundIdHeader />}>
        <FoundIdMain />
        <Button
          text="비밀번호 찾기"
          style={STYLE_WHITE_BUTTON}
          onClick={() => router.push('/login/findPassword')}
        />
        <Button text="로그인" onClick={() => router.push('/login')} />
      </FoundAuthPage>
    );
  }

  return (
    <>
      <FindAuthPage header={<h1 className="text-3xl my-14">아이디 찾기</h1>}>
        <FindAuthNav />
        <FindAuthForm />
      </FindAuthPage>
    </>
  );
};

const FoundIdHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="mb-4 text-3xl text-[#011B5B]">
        고객님의 계정을 찾았습니다.
      </h1>
      <p className="text-gray-500">아이디 확인 후 로그인해 주세요.</p>
    </div>
  );
};

const FoundIdMain = () => {
  return (
    <div className="flex justify-center items-center w-full p-20 ml-10">
      <div className="flex-none flex justify-center items-center w-[40px] h-[40px] mr-4 bg-gray-300 rounded-full">
        <CiUser className="w-[25px] h-[25px]" />
      </div>
      <div className="flex-auto">
        <h3 className="text-2xl text-[#011B5B] mb-2">DataLiteracy</h3>
        <p className="text-gray-500">가입일 2021.11.03</p>
      </div>
    </div>
  );
};

export default FindId;
