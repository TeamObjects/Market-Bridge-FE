import { FormValue } from '@/contexts/FormContext';
import RegisterFormButtons from './RegisterFormButtons';
import RegisterFormMainView from './RegisterFormMain';
import TermsOfUse from './TermsOfUse';

export interface UserInfo {
  email: string;
  password: string;
  name?: string;
  phone?: string;
  [key: string]: string | undefined;
}

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
