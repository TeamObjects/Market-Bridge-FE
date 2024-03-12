'use client';

import AddressListItems from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import AddressPopUp from '@/components/(auth)/(mypage)/(address)/AddressPopUp';
import authState from '@/recoil/authAtom';

import { useRecoilValue } from 'recoil';
import AddressUpdatePopUp from './AddressUpdatePopUp';

const AddressList = () => {
  const authStateValue = useRecoilValue(authState);
  const isRegistered = authStateValue.addAddress?.isRegistered;
  const isUpdate = authStateValue.addAddress?.isUpdate;

  return (
    <div>
      <AddressListItems />
      {!isRegistered && <AddressPopUp />}
      {isUpdate && <AddressUpdatePopUp />}
    </div>
  );
};

export default AddressList;
