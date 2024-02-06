import { UserInfo } from '@/components/(auth)/RegisterFormView';
import { ValidationFunctions } from '@/utils/isValidationCheck';

import { ChangeEvent, FormEvent, MouseEventHandler, useState } from 'react';

export interface useFormProps {
  formType: string;
  onSubmit?: () => void;
  validate?: ValidationFunctions;
}

const fields = ['email', 'password', 'name', 'phone'];

const initialValue = Object.fromEntries(
  fields.map((field) => [field, '']),
) as UserInfo;
const initialValidValue = Object.fromEntries(
  fields.map((field) => [field, false]),
);
const initialEmptyValue = Object.fromEntries(
  fields.map((field) => [field, true]),
);

const useForm = ({ formType, onSubmit, validate }: useFormProps) => {
  const [values, setValues] = useState<UserInfo>(initialValue);
  const [isValid, setIsValid] = useState(initialValidValue);
  const [isEmpty, setIsEmpty] = useState(initialEmptyValue);
  const [isEnterUserInfo, setIsEnterUserInfo] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value !== '') {
      setIsEmpty((prev) => ({ ...prev, [name]: false }));
    } else {
      setIsEmpty((prev) => ({ ...prev, [name]: true }));
    }

    setValues((prev) => ({ ...prev, [name]: value }));

    const isValidFunction = validate && validate[name];
    if (isValidFunction) {
      const isValid = isValidFunction(value);
      setIsValid((prev) => ({ ...prev, [name]: isValid }));
    }
  };

  const handleAllUserInfoCheck = () => {
    if (formType === 'login') {
      const isEmailAndPasswordEntered =
        values.email !== '' && values.password !== '';
      setIsEnterUserInfo(isEmailAndPasswordEntered);
    } else {
      const isEnteredAllUserInfo = Object.values(values).every(
        (value) => value !== '',
      );
      setIsEnterUserInfo(isEnteredAllUserInfo);
    }
  };

  const handleClickContinue: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(1);
    handleAllUserInfoCheck();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit && onSubmit();
  };

  const getFieldProps = (name: string) => {
    const value = values[name];
    const onChange = handleChange;

    return {
      name,
      value,
      onChange,
    };
  };

  return {
    values,
    isValid,
    isEmpty,
    isEnterUserInfo,
    handleAllUserInfoCheck,
    handleClickContinue,
    handleChange,
    handleSubmit,
    getFieldProps,
  };
};

export default useForm;
