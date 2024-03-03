import RegisterFormButtons from '@/components/(auth)/RegisterFormButtons';
import RegisterFormMain from '@/components/(auth)/RegisterFormMain';
import TermsOfUse from '@/components/(auth)/TermsOfUse';

import { FormValue } from '@/contexts/FormContext';

const RegisterFormView = ({}: FormValue) => {
  return (
    <>
      <RegisterFormMain />
      <TermsOfUse />
      <RegisterFormButtons />
    </>
  );
};

export default RegisterFormView;
