import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: {
    isLoggedIn: false,
    foundId: '',
    memberId: 0,
  },
});

export default authState;
