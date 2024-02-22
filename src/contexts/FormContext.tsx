'use client';

import { UserInfo } from '@/components/(auth)/RegisterForm';
import useForm, { useFormProps } from '@/hooks/useForm';
import {
  ChangeEvent,
  FormEvent,
  MouseEventHandler,
  ReactNode,
  createContext,
} from 'react';

interface FormContextProps extends useFormProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export interface FormValue {
  values?: UserInfo;
  isValid?: Record<string, boolean>;
  isEmpty?: Record<string, boolean>;
  isEnterUserInfo?: boolean;
  handleAllUserInfoCheck?: () => void;
  handleClickContinue?: MouseEventHandler<HTMLButtonElement>;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  getFieldProps?: (name: string) => {
    name: string;
    value: string | boolean | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
}

export const formContext = createContext<FormValue | null>(null);

const FormContext = ({
  id,
  className,
  children,
  ...useFormProps
}: FormContextProps) => {
  const formValue = useForm(useFormProps);

  return (
    <formContext.Provider value={formValue}>
      <form id={id} className={className} onSubmit={formValue.handleSubmit}>
        {children}
      </form>
    </formContext.Provider>
  );
};

export default FormContext;
