import OrderListHeader from '@/components/(auth)/(mypage)/(orderList)/OrderListHeader';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const OrderList = () => {
  return (
    <MyBridgePage header={<OrderListHeader />} divider={<MyBridgeDivider />}>
      OrderList
    </MyBridgePage>
  );
};

export default OrderList;
