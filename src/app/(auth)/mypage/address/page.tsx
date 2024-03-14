import AddressList from '@/components/(auth)/(mypage)/(address)/AddressList';
import AddressListHeader from '@/components/(auth)/(mypage)/(address)/AddressListHeader';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const ManageAddress = () => {
  return (
    <MyBridgePage header={<AddressListHeader />} divider={<MyBridgeDivider />}>
      <AddressList />
    </MyBridgePage>
  );
};

export default ManageAddress;
