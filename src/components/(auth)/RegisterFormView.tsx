import { FormValue } from '@/contexts/FormContext';
import RegisterFormButtons from './RegisterFormButtons';
import RegisterFormMainView from './RegisterFormMain';
import TermsOfUse from './TermsOfUse';

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
