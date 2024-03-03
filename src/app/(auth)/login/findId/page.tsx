import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthFormMain from '@/components/(auth)/(findAuth)/FindAuthFormMain';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import FoundAuthPage from '@/components/(auth)/(findAuth)/FoundAuthPage';
import FoundIdHeader from '@/components/(auth)/(findAuth)/FoundIdHeader';
import AuthHeader from '@/components/(auth)/AuthHeader';

const FindId = () => {
  return (
    <>
      <FindAuthPage
        header={
          <>
            <AuthHeader />
            <h1 className="text-center text-3xl my-14">아이디 찾기</h1>
          </>
        }
      >
        <FindAuthForm>
          <FindAuthFormMain />
        </FindAuthForm>
      </FindAuthPage>
      <FoundAuthPage header={<FoundIdHeader />} />
    </>
  );
};

export default FindId;
