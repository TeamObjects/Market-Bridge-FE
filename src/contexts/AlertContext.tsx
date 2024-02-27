'use client';

import Alert from '@/components/shared/Alert';

import {
  ComponentProps,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

export interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

interface AlertContextProviderProps {
  children: ReactNode;
}

const AlertContext = createContext<AlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
};

export const AlertContextProvider = ({
  children,
}: AlertContextProviderProps) => {
  const [alertState, setAlertState] = useState(defaultValues);

  const $portal_root = document.getElementById('root-portal');

  const close = useCallback(() => {
    setAlertState(defaultValues);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        onButtonClick: () => {
          close();
          onButtonClick();
        },
        open: true,
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <AlertContext.Provider value={values}>
      {children}{' '}
      {$portal_root != null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </AlertContext.Provider>
  );
};

export default AlertContext;
