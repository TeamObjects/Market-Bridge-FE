import AddressListItem from './AddressListItem';

export interface AddressItem {
  addressId: number;
  addressValue: {
    phoneNo: string;
    name: string;
    city: string;
    street: string;
    zipcode: string;
    detail: string;
    alias: string;
  };
  isDefault: boolean;
}

const ADDRESS_LIST = [
  {
    addressId: 1004,
    addressValue: {
      phoneNo: '12312341234',
      name: '집',
      city: '인천',
      street: '소래역남로 40',
      zipcode: '12345',
      detail: 'C동 307호',
      alias: '우리집',
    },
    isDefault: true,
  },
  {
    addressId: 1005,
    addressValue: {
      phoneNo: '56756785678',
      name: '회사',
      city: '서울',
      street: '강남대로 123',
      zipcode: '54321',
      detail: 'A동 101호',
      alias: '회사',
    },
    isDefault: false,
  },
  {
    addressId: 1006,
    addressValue: {
      phoneNo: '111111111',
      name: '줄서는식당',
      city: '서울',
      street: '메인로 123',
      zipcode: '12345',
      detail: '101호',
      alias: '회식장소',
    },
    isDefault: false,
  },
];

const AddressListItems = () => {
  return (
    <>
      <nav className="flex text-[16px] text-center border-b-[1px] border-black pb-6">
        <span className="w-[8%]">선택</span>
        <span className="w-[50%]">주소</span>
        <span className="w-[15%]">받으실 분</span>
        <span className="w-[20%]">연락처</span>
        <span className="w-[7%]">수정</span>
      </nav>
      <ul>
        {ADDRESS_LIST.map((item) => (
          <AddressListItem key={item.addressId} item={item} />
        ))}
      </ul>
    </>
  );
};

export default AddressListItems;
