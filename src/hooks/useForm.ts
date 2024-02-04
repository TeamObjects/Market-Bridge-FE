import {
  UserInfo,
  ValidationFunctions,
} from '@/components/(auth)/RegisterForm';

import { ChangeEvent, FormEvent, MouseEventHandler, useState } from 'react';

interface useFromProps {
  formType: string;
  onSubmit: () => void;
  validate: ValidationFunctions;
}

const initialValue = {
  email: '',
  password: '',
  name: '',
  phone: '',
};

const initialValidValue = {
  email: false,
  password: false,
  name: false,
  phone: false,
};

const initialEmptyValue = {
  email: true,
  password: true,
  name: true,
  phone: true,
};

const useForm = ({ formType, onSubmit, validate }: useFromProps) => {
  const [values, setValues] = useState<UserInfo>(initialValue);
  const [isValid, setIsValid] = useState(initialValidValue);
  const [isEmpty, setIsEmpty] = useState(initialEmptyValue);
  const [isEnterUserInfo, setIsEnterUserInfo] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (value !== '') {
      setIsEmpty((prev) => ({ ...prev, [name]: false }));
    }

    setValues((prev) => ({ ...prev, [name]: value }));

    const isValidFunction = validate[name];
    if (isValidFunction) {
      const isValid = isValidFunction(value);
      setIsValid((prev) => ({ ...prev, [name]: isValid }));
    }

    handleAllUserInfoCheck();
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
    handleAllUserInfoCheck();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit();
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
