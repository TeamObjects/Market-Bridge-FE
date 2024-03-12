import BackDrop from '@/components/shared/BackDrop';
import Button from '@/components/shared/Button';

import authState from '@/recoil/authAtom';
import { useRecoilState } from 'recoil';

import { ChangeEvent, useEffect, useState } from 'react';

import splitAddress from '@/utils/splitAddress';

const STYLE_ALERT_CONTAINER =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px] overflow-hidden z-alert w-[500px] max-w-[600px] min-h-[180px] px-12 py-[10px] box-border';
const STYLE_BUTTON =
  'w-[400px] h-[50px] mt-[20px] mb-[10px] text-[16px] text-white bg-[#011B5B]';

const AddressUpdatePopUp = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const { isDefault, address, name, phoneNo } = authStateValue.addAddress;
  const { city, street, detail } = splitAddress(address);
  const mainAddress = `${city} ${street}`;

  const [detailAddress, setDetailAddress] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updatePhoneNo, setUpdatePhoneNo] = useState('');

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

  const handleSaveButtonClick = async () => {};

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

export default AddressUpdatePopUp;