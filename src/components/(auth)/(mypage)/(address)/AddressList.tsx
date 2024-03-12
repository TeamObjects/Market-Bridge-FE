'use client';

import AddressListItems from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import AddressPopUp from '@/components/(auth)/(mypage)/(address)/AddressPopUp';
import AddressUpdatePopUp from '@/components/(auth)/(mypage)/(address)/AddressUpdatePopUp';

import authState from '@/recoil/authAtom';
import { useRecoilValue } from 'recoil';

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
