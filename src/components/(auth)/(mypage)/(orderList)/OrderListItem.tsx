import { FaChevronRight } from 'react-icons/fa';

import OrderListItemInfo from '@/components/(auth)/(mypage)/(orderList)/OrderListItemInfo';
import GenericListItem from '@/components/(auth)/(mypage)/GenericListItem';
import Button from '@/components/shared/Button';

import Link from 'next/link';

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
      <div className="flex justify-between mb-4">
        <div className="text-[17px] font-semibold">
          <span className="mr-2">{item?.createdAt.substring(0, 10)}</span>
          <span>{`(${item?.createdAt.substring(
            11,
            13,
          )}시 ${item?.createdAt.substring(14, 16)}분)`}</span>
        </div>
        <Link
          href={`/mypage/order/${item.orderNo}`}
          className="flex items-center text-[14px] text-gray-600"
        >
          <span className="mr-1">주문내역 상세보기</span>
          <FaChevronRight />
        </Link>
      </div>
      <div className="w-full h-[1px] mb-10 bg-gray-300" />
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
