import { atom, DefaultValue } from 'recoil';

export interface MyInfo {
  email?: string;
  name: string;
  phoneNo: string;
  password?: string | null;
}
interface AuthState {
  isLoggedIn: boolean;
  isDuplicateEmail: boolean;
  foundId: string;
  memberId: number;
  hasAddress?: boolean;
  addAddress: {
    isRegistered?: boolean;
    isUpdate?: boolean;
    isDefault?: boolean;
    addressId?: number;
    address: string;
    name: string;
    phoneNo: string;
    zipcode: string;
  };
  myInfo: MyInfo;
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
    hasAddress: false,
    addAddress: {
      isRegistered: true,
      isUpdate: false,
      isDefault: false,
      addressId: 0,
      address: '',
      name: '',
      phoneNo: '',
      zipcode: '',
    },
    myInfo: {
      email: '',
      name: '',
      phoneNo: '',
    },
  },
  effects_UNSTABLE: [persistAuthState('authState')],
});

export default authState;
