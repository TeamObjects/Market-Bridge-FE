import { deleteAddress, updateAddress } from '@/api/mypageApi';

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
  'w-[400px] h-[50px] mt-[20px] mb-[10px] text-[16px] text-white bg-[#011B5B]';
const STYLE_BUTTON_DELETE =
  'w-[400px] h-[50px] mt-[4px] mb-[10px] text-[16px] text-#011B5B border-[1px] border-gray-400';

const AddressUpdatePopUp = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const { isDefault, address, name, phoneNo, addressId } =
    authStateValue.addAddress;
  const { city, street, detail } = splitAddress(address);
  const mainAddress = `${city} ${street}`;

  const [detailAddress, setDetailAddress] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updatePhoneNo, setUpdatePhoneNo] = useState('');
  const [updateDefault, setUpdateDefault] = useState(false);

  const queryClient = useQueryClient();

  const { open, close } = useAlertContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDetailAddress(e.target.value);
  };

  const handleNameAndPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setUpdateName(value);
    }

    if (name === 'phoneNo') {
      setUpdatePhoneNo(value);
    }
  };

  const handleCheckboxChange = () => {
    setUpdateDefault((prev) => !prev);
  };

  const handleSaveButtonClick = async () => {
    const dataToSubmit = {
      addressValue: {
        phoneNo: updatePhoneNo,
        name: updateName,
        city,
        street,
        detail: detailAddress,
        alias: '별칭',
      },
      isDefault: updateDefault,
    } as AddressData;

    if (addressId) {
      const response = await updateAddress(dataToSubmit, addressId);

      if (response.code === 200) {
        queryClient.invalidateQueries({ queryKey: ['address'] });
        setAuthStateValue((prev) => ({
          ...prev,
          addAddress: {
            isRegistered: true,
            isUpdate: false,
            address: '',
            addressId: 0,
            name: '',
            phoneNo: '',
            zipcode: '',
          },
        }));
      }
    }
  };

  const handleDeleteAddress = () => {
    open({
      title: '삭제하시겠습니까?',
      leftButtonLabel: '취소',
      rightButtonLabel: '확인',
      onLeftButtonClick: () => {
        close();
      },
      onRightButtonClick: async () => {
        if (addressId) {
          const response = await deleteAddress(addressId);

          if (response.code === 200) {
            queryClient.invalidateQueries({ queryKey: ['address'] });
            close();
            closeAddressPopUp();
          }
        }
      },
    });
  };

  const closeAddressPopUp = () => {
    setAuthStateValue((prev) => ({
      ...prev,
      addAddress: { ...prev.addAddress, isUpdate: false },
    }));
  };

  useEffect(() => {
    setUpdateName(name);
    setUpdatePhoneNo(phoneNo);
    setDetailAddress(detail);
  }, []);

  return (
    <BackDrop onClose={closeAddressPopUp}>
      <div className={STYLE_ALERT_CONTAINER}>
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div>
            <h1 className="text-[24px] my-10">배송지 수정</h1>
          </div>
          {isDefault && (
            <div className="flex flex-start w-full">
              <span className="p-[4px] ml-[20px] mb-6 text-[14px] bg-gray-300 border-[1px] rounded-[10px]">
                기본 배송지
              </span>
            </div>
          )}
          <div>
            <div>
              <p className="flex flex-start  mb-[10px] text-[16px] font-semibold">
                {mainAddress}
              </p>
              <input
                type="address"
                className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
                placeholder="나머지 주소를 입력해주세요"
                value={detailAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="flex flex-start  mb-[10px] text-[16px] font-semibold">
                받으실 분
              </p>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력해주세요."
                className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
                value={updateName}
                onChange={handleNameAndPhoneChange}
              />
            </div>
            <div>
              <p className="flex flex-start  mb-[10px] text-[16px] font-semibold">
                휴대폰
              </p>
              <input
                type="phone"
                name="phoneNo"
                placeholder="전화번호를 입력해주세요."
                className="w-[400px] h-[50px] mb-4 px-6 text-[16px] border-gray-300 border-[1px] outline-none"
                value={updatePhoneNo}
                onChange={handleNameAndPhoneChange}
              />
            </div>
            {!isDefault && (
              <div className="flex items-center w-full mt-4">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] mr-6"
                  onChange={handleCheckboxChange}
                />
                <span className="text-[16px]">기본 배송지로 저장</span>
              </div>
            )}
          </div>
          <Button
            text="저장"
            style={STYLE_BUTTON}
            onClick={handleSaveButtonClick}
          />
          {!isDefault && (
            <Button
              text="삭제"
              style={STYLE_BUTTON_DELETE}
              onClick={handleDeleteAddress}
            />
          )}
        </div>
      </div>
    </BackDrop>
  );
};

export default AddressUpdatePopUp;
