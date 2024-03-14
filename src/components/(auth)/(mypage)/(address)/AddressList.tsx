'use client';

import AddressListItems from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import AddressPopUp from '@/components/(auth)/(mypage)/(address)/AddressPopUp';
import authState from '@/recoil/authAtom';

import { useRecoilValue } from 'recoil';

const AddressList = () => {
  const authStateValue = useRecoilValue(authState);
  const isRegistered = authStateValue.addAddress.isRegistered;

  return (
    <div>
      <AddressListItems />
      {!isRegistered && <AddressPopUp />}
    </div>
  );
};

export default AddressList;
