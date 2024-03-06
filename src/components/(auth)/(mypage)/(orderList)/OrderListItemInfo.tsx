import { OrderListItemProps } from '@/components/(auth)/(mypage)/(orderList)/OrderListItem';

const OrderListItemInfo = ({ item }: OrderListItemProps) => {
  return (
    <div className="flex w-full mx-10">
      <div className="flex flex-col justify-center  w-full">
        <div className="flex items-center h-[26px] pt-[6px]">
          <h4 className="w-[50px] mr-[10px] text-[12px] text-gray-700">
            상품명
          </h4>
          <p className="text-[13px]">{item?.orderDetailInfos[0].productName}</p>
        </div>
        <div className="flex items-center h-[26px] pt-[6px]">
          <h4 className="w-[50px] mr-[10px] text-[12px] text-gray-700">
            주문번호
          </h4>
          <p className="text-[13px]">{item?.orderNo}</p>
        </div>
        <div className="flex items-center h-[26px] pt-[6px]">
          <h4 className="w-[50px] mr-[10px] text-[12px] text-gray-700">
            결제금액
          </h4>
          <p className="text-[13px]">{item?.orderDetailInfos[0].price}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100px] text-[15px]">
        {item?.orderDetailInfos[0].isOwn ? '배송완료' : '배송중'}
      </div>
    </div>
  );
};

export default OrderListItemInfo;
