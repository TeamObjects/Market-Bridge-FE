import AddressListHeader from '@/components/(auth)/(mypage)/(address)/AddressListHeader';
import AddressListItems from '@/components/(auth)/(mypage)/(address)/AddressListItems';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const ManageAddress = () => {
  return (
    <MyBridgePage header={<AddressListHeader />} divider={<MyBridgeDivider />}>
      <AddressListItems />
    </MyBridgePage>
  );
};

export default ManageAddress;
