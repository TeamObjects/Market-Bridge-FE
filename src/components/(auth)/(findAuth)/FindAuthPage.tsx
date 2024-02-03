import AuthPage, { PageComponentProps } from '../AuthPage';

const FindAuthPage = ({ header, children }: PageComponentProps) => {
  return <AuthPage header={header}>{children}</AuthPage>;
};

export default FindAuthPage;
