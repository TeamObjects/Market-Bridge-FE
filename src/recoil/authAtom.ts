import { atom, DefaultValue } from 'recoil';

interface AuthState {
  isLoggedIn: boolean;
  isDuplicateEmail: boolean;
  foundId: string;
  memberId: number;
  addAddress: {
    isRegistered?: boolean;
    isUpdate?: boolean;
    isDefault?: boolean;
    address: string;
    name: string;
    phoneNo: string;
    zipcode: string;
  };
}

const persistAuthState =
  (
    key: string,
  ): (({
    setSelf,
    onSet,
  }: {
    setSelf: (newValue: AuthState | DefaultValue) => void;
    onSet: (
      callback: (
        newValue: AuthState | DefaultValue,
        oldValue: AuthState | DefaultValue,
      ) => void,
    ) => void;
  }) => void) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      if (!(newValue instanceof DefaultValue)) {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

const authState = atom<AuthState>({
  key: 'authState',
  default: {
    isLoggedIn: false,
    isDuplicateEmail: false,
    foundId: '',
    memberId: 0,
    addAddress: {
      isRegistered: true,
      isUpdate: false,
      isDefault: false,
      address: '',
      name: '',
      phoneNo: '',
      zipcode: '',
    },
  },
  effects_UNSTABLE: [persistAuthState('authState')],
});

export default authState;
