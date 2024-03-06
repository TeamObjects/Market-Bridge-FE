import GenericListItem from '@/components/(auth)/(mypage)/GenericListItem';
import Button from '@/components/shared/Button';
import OrderListItemInfo from './OrderListItemInfo';

interface OrderListItem {
  orderId: number;
  orderNo: string;
  createdAt: string;
  orderDetailInfos: [
    {
      orderNo: string;
      orderDetailId: number;
      productId: number;
      quantity: number;
      price: number;
      statusCode?: string;
      deliveredDate?: string;
      productThumbImageUrl: string;
      productName: string;
      optionNames?: string[];
      isOwn?: boolean;
    },
  ];
}

export interface OrderListItemProps {
  item?: OrderListItem;
}

const ORDER_EXAMPLE = {
  orderId: 1,
  orderNo: '2334602560001',
  createdAt: '2024.02.29 02:56:00',
  orderDetailInfos: [
    {
      orderNo: '2334602560001',
      orderDetailId: 1,
      productId: 1,
      quantity: 2,
      price: 11601,
      statusCode: undefined,
      deliveredDate: undefined,
      productThumbImageUrl: '/images/thumbnail.jpeg',
      productName: '[이연복의 목란] 짜장면 2인분 외 1건',
      optionNames: undefined,
      isOwn: true,
    },
  ],
} as OrderListItem;

const STYLE_BUTTON =
  'w-[10%] h-[34px] text-[13px] text-[#011B5B] rounded-[3px] border-[1px] border-[#011B5B] hover:text-white hover:bg-[#011B5B]';

const OrderListItem = ({ item = ORDER_EXAMPLE }: OrderListItemProps) => {
  return (
    <li className="list-none p-[20px]">
      <GenericListItem
        thumbnail={ORDER_EXAMPLE.orderDetailInfos[0].productThumbImageUrl}
        buttons={<Button text="1:1 문의" style={STYLE_BUTTON} />}
      >
        <OrderListItemInfo item={item} />
      </GenericListItem>
    </li>
  );
};

export default OrderListItem;
