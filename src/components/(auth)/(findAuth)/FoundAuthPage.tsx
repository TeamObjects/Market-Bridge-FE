import AuthPage, { PageComponentProps } from '../AuthPage';

const FoundAuthPage = ({ header, children }: PageComponentProps) => {
  return <AuthPage header={header}>{children}</AuthPage>;
};

export default FoundAuthPage;
