import AuthPage from '../AuthPage';
import { LuMail } from 'react-icons/lu';

const ResetPasswordModal = () => {
  return (
    <AuthPage
      header={
        <div className="flex justify-center items-center w-[50px] h-[50px] mt-10 bg-[#011B5B] rounded-full">
          <LuMail className="text-white w-[80%] h-[60%]" />
        </div>
      }
    >
      <ResetPasswordModalMain />
    </AuthPage>
  );
};

const ResetPasswordModalMain = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-6 text-[18px] text-[#011B5B]">
        <p>
          <span className="font-bold">dataliteracy@icloud.com</span>으로
        </p>
        <p className="tracking-wide">비밀번호 재설정 메일이 발송되었습니다.</p>
      </div>
      <div className="flex flex-col justify-center items-center text-[12px] text-gray-400">
        <p>5분 후에도 메일이 오지 않는다면</p>
        <p>스펨함을 확인해 주세요</p>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
