'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import LoginFormView from './LoginFormView';

const LogInForm = ({ router }: { router: AppRouterInstance }) => {
  return <LoginFormView router={router} />;
};

export default LogInForm;
