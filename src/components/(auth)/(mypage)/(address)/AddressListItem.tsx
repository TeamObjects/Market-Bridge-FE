'use client';

import { RiCheckboxCircleLine } from 'react-icons/ri';
import { TfiPencil } from 'react-icons/tfi';

import { AddressItem } from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import { useSetRecoilState } from 'recoil';
import authState from '@/recoil/authAtom';
import { updateAddress } from '@/api/mypageApi';
import useAlertContext from '@/hooks/useAlertContext';

interface AddressListItemProps {
  item: AddressItem;
  defaultAddressId: number | undefined;
  defaultAddressItem: AddressItem | undefined;
}

const AddressListItem = ({
  item,
  defaultAddressId,
  defaultAddressItem,
}: AddressListItemProps) => {
  const { isDefault, addressId } = item;
  const {
    name = '',
    phoneNo = '',
    city = '',
    street = '',
    detail = '',
  } = item.addressValue || {};
  const {
    name: defaultAddressItemName = '',
    phoneNo: defaultAddressItemPhoneNo = '',
    city: defaultAddressItemCity = '',
    street: defaultAddressItemStreet = '',
    detail: defaultAddressItemDetail = '',
  } = defaultAddressItem?.addressValue || {};

  const address = `${city} ${street} ${detail}`;

  const { open, close } = useAlertContext();

  const setAuthStateValue = useSetRecoilState(authState);

  const handlePencilClick = () => {
    setAuthStateValue((prev) => ({
      ...prev,
      addAddress: {
        ...prev.addAddress,
        address,
        name,
        phoneNo,
        addressId,
        isDefault,
        isUpdate: true,
      },
    }));
  };

  const handleUpdateDefault = async () => {
    const defaultSubmit = {
      addressValue: {
        phoneNo,
        name,
        city,
        street,
        detail,
      },
      isDefault: true,
    };

    const notDefaultSubmit = {
      addressValue: {
        phoneNo: defaultAddressItemPhoneNo,
        name: defaultAddressItemName,
        city: defaultAddressItemCity,
        street: defaultAddressItemStreet,
        detail: defaultAddressItemDetail,
      },
      isDefault: false,
    };

    await updateAddress(notDefaultSubmit, defaultAddressId);
    const response = await updateAddress(defaultSubmit, addressId);

    if (response.code === 200) {
      open({
        title: '배송지 선택이 완료 되었습니다.',
        rightButtonLabel: '확인',
        onRightButtonClick: () => {
          close();
        },
      });
    }
  };

  return (
    <li className="flex items-center h-[89px] text-[18px] text-center border-b-[1px] border-gray-300">
      <div className="flex justify-center w-[8%]">
        <RiCheckboxCircleLine
          className={`${
            isDefault ? 'text-[#011B5B]' : 'text-gray-300'
          } w-[30px] h-[30px] cursor-pointer`}
          onClick={handleUpdateDefault}
        />
      </div>
      <span className="w-[50%]">{address}</span>
      <span className="w-[15%]">{name}</span>
      <span className="w-[20%]">{phoneNo}</span>
      <div className="flex justify-center w-[7%]">
        <TfiPencil
          className="w-[25px] h-[25px] text-gray-300 cursor-pointer hover:text-[#011B5B]"
          onClick={handlePencilClick}
        />
      </div>
    </li>
  );
};

export default AddressListItem;
