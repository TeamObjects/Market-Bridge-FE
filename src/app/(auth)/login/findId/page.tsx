import FindAuthForm from '@/components/(auth)/(findAuth)/FindAuthForm';
import FindAuthNav from '@/components/(auth)/(findAuth)/FindAuthNav';
import FindAuthPage from '@/components/(auth)/(findAuth)/FindAuthPage';
import FoundAuthPage from '@/components/(auth)/(findAuth)/FoundAuthPage';
import FoundIdHeader from '@/components/(auth)/(findAuth)/FoundIdHeader';
import FormContext from '@/contexts/FormContext';

const FindId = () => {
  return (
    <>
      <FindAuthPage header={<h1 className="text-3xl my-14">아이디 찾기</h1>}>
        <FindAuthNav />
        <FormContext id="findId-form" formType="findId">
          <FindAuthForm />
        </FormContext>
      </FindAuthPage>
      <FoundAuthPage header={<FoundIdHeader />} />
    </>
  );
};

export default FindId;
