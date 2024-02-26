import RegisterFormButtons from '@/components/(auth)/RegisterFormButtons';
import RegisterFormMainView from '@/components/(auth)/RegisterFormMain';
import TermsOfUse from '@/components/(auth)/TermsOfUse';

import { FormValue } from '@/contexts/FormContext';

const RegisterFormView = ({}: FormValue) => {
  return (
    <>
      <RegisterFormMainView />
      <TermsOfUse />
      <RegisterFormButtons />
    </>
  );
};

export default RegisterFormView;
