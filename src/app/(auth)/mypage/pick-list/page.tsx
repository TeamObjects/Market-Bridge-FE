import PickListHeader from '@/components/(auth)/(mypage)/(pickList)/PickListHeader';
import PickListItems from '@/components/(auth)/(mypage)/(pickList)/PickListItems';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const PickList = () => {
  return (
    <MyBridgePage header={<PickListHeader />} divider={<MyBridgeDivider />}>
      <PickListItems />
    </MyBridgePage>
  );
};

export default PickList;
