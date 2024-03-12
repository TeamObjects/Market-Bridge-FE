'use client';

import { addNewAddress } from '@/api/mypageApi';

import { AddressData } from '@/components/(auth)/(mypage)/(address)/AddressListHeader';
import BackDrop from '@/components/shared/BackDrop';
import Button from '@/components/shared/Button';

import useAlertContext from '@/hooks/useAlertContext';

import authState from '@/recoil/authAtom';
import { useRecoilState } from 'recoil';

import { useQueryClient } from '@tanstack/react-query';

import { ChangeEvent, useEffect, useState } from 'react';

import splitAddress from '@/utils/splitAddress';

const STYLE_ALERT_CONTAINER =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px] overflow-hidden z-alert w-[500px] max-w-[600px] min-h-[180px] px-12 py-[10px] box-border';
const STYLE_BUTTON =
  'w-[400px] h-[50px] mb-[10px] text-[16px] text-white bg-[#011B5B]';

const AddressPopUp = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const [mainAddress, setMainAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const queryClient = useQueryClient();

  const { open, close } = useAlertContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const handleNameAndPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'phoneNo') {
      setPhoneNo(value);
    }
  };

  const handleSaveButtonClick = async () => {
    const totalAddress = `${mainAddress} ${detailAddress}`;
    const zipcode = authStateValue.addAddress.zipcode;
    const { city, street, detail } = splitAddress(totalAddress);

    const dataToSubmit = {
      addressValue: {
        phoneNo,
        name,
        city,
        street,
        zipcode,
        detail,
        alias: '별칭',
      },
      isDefault: false,
    } as AddressData;

    if (detailAddress !== '' && name !== '' && phoneNo !== '') {
      const response = await addNewAddress(dataToSubmit);

      if (response.code === 200) {
        queryClient.invalidateQueries({ queryKey: ['address'] });
        setAuthStateValue((prev) => ({
          ...prev,
          addAddress: {
            isRegistered: true,
            address: '',
            name: '',
            phoneNo: '',
            zipcode: '',
          },
        }));
      }
    } else {
      open({
        title: '모든 정보를 입력해주세요.',
        rightButtonLabel: '확인',
        onRightButtonClick: () => {
          close();
        },
      });
    }
  };

  const closeAddressPopUp = () => {
    setAuthStateValue((prev) => ({
      ...prev,
      addAddress: { ...prev.addAddress, isRegistered: true },
    }));
  };

  useEffect(() => {
    setMainAddress(authStateValue.addAddress?.address);
  }, []);

  return (
    <BackDrop onClose={closeAddressPopUp}>
      <div className={STYLE_ALERT_CONTAINER}>
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div>
            <h1 className="text-[24px] my-10">새 배송지 추가</h1>
          </div>
          <div>
            <input
              type="address"
              className="w-[400px] h-[50px] mb-4 px-6 text-[16px] text-gray-500 border-gray-300 border-[1px] outline-none"
              value={mainAddress}
              readOnly
            />
            <input
              type="address"
              className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
              placeholder="나머지 주소를 입력해주세요"
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
              onChange={handleNameAndPhoneChange}
            />
            <input
              type="phone"
              name="phoneNo"
              placeholder="전화번호를 입력해주세요."
              className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
              onChange={handleNameAndPhoneChange}
            />
          </div>
          <Button
            text="저장"
            style={STYLE_BUTTON}
            onClick={handleSaveButtonClick}
          />
        </div>
      </div>
    </BackDrop>
  );
};

export default AddressPopUp;
