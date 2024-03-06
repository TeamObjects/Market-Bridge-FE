import NoOrderList from '@/components/(auth)/(mypage)/(orderList)/NoOrderList';
import OrderListHeader from '@/components/(auth)/(mypage)/(orderList)/OrderListHeader';
import OrderListItem from '@/components/(auth)/(mypage)/(orderList)/OrderListItem';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const OrderList = () => {
  return (
    <MyBridgePage header={<OrderListHeader />} divider={<MyBridgeDivider />}>
      <OrderListItem />
    </MyBridgePage>
  );
};

export default OrderList;
