'use client';

import ContentView from '@/components/product/[id]/ContentView';
import Header from '@/components/product/[id]/Header';
import { Item } from '@/app/product/page';
import { useState } from 'react';
import { TabData } from '@/components/shared/Tabs';

type Props = {
  params: { id: string };
};

type Option = {
  value: string;
  label: string;
};

export type InfoTableItem =
  | {
      type: 'text';
      key: string;
      value: {
        main: string;
        sub?: string;
      };
    }
  | {
      type: 'select';
      key: string;
      value: string;
      options: Option[];
    };

export default function ProductDetail({ params }: Readonly<Props>) {
  const categories = ['쿠팡 홈', '식품', '생수/음료', '두유', '귀리/오트두유'];
  const data: Item = {
    thumbnail:
      'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg',
    name: '꿀고구마',
    discountRate: 10,
    price: 15900,
  };

  const [info, setInfo] = useState<InfoTableItem[]>([
    {
      type: 'text',
      key: '배송',
      value: {
        main: '하루배송',
        sub: '23시 전 주문 시 내일 밤 12시 전 도착',
      },
    },
    {
      type: 'text',
      key: '판매자',
      value: {
        main: '컬리',
      },
    },
    {
      type: 'text',
      key: '포장타입',
      value: {
        main: '냉장(종이포장)',
        sub: '택배배송은 에코 포장이 스티로폼으로 대체됩니다.',
      },
    },
    {
        type: "select",
        key: "상품 선택",
        value: "",
        options: [
            {value: "item1", label: "Item1"},
            {value: "item2", label: "Item2"},
            {value: "item3", label: "Item3"},
        ],
    }
  ]);

  const [tabData, setTabData] = useState<TabData>({
    value: "description",
    options: [
      {label: "상품설명", value: "description"},
      {label: "상세정보", value: "detail"},
      {label: "후기", value: "review"},
      {label: "문의", value: "qna"},
    ]
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center mb-10 gap-4">
        <Header categories={categories} />
        <ContentView data={data} info={info} setInfo={setInfo} tabData={tabData} setTabData={setTabData} />
      </div>
    </>
  );
}
