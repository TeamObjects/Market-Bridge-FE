'use client';

import ContentView from '@/components/product/ContentView';
import ProductNavigator, { NavigatorData } from '@/components/product/ProductNavigator';
import ProductPager, { PagerData } from '@/components/product/ProductPager';
import { useState } from 'react';

export type Option = {
  value: string;
  label: string;
};
export type Item = {
  thumbnail: string; // 썸네일
  name: string; // 타이틀
  discountRate: number; // 할인율
  price: number; // 원래가격
};

export default function Product() {
  const navigatorData: NavigatorData = {
    categoryTitle: '채소',
    items: [
      '전체보기',
      '친환경',
      '고구마,감자,당근',
      '시금치,쌈채소,나물',
      '냉동,이색,간편채소',
    ],
  };

  const [selected, setSelected] = useState("친환경");

  const totalSize = 171;
  const [currentSort, setCurrentSort] = useState('1');
  const sortOptions: Option[] = [
    {
      value: '0',
      label: '추천순',
    },
    {
      value: '1',
      label: '신상품순',
    },
    {
      value: '2',
      label: '판매량순',
    },
    {
      value: '3',
      label: '낮은 가격순',
    },
    {
      value: '4',
      label: '높은 가격순',
    },
  ];
  const [currentPerSize, setCurrentPerSize] = useState('60');
  const perSizeOptions: Option[] = [
    {
      value: '30',
      label: '30개씩 보기',
    },
    {
      value: '60',
      label: '60개씩 보기',
    },
    {
      value: '100',
      label: '100개씩 보기',
    },
  ];

  const pagerData: PagerData = {
    totalPage: 10, // 총 페이지 수
    perPage: 5, // 페이지당 요소 수
    currentPage: 1, // 현재 페이지(1부터 시작)
    currentIndex: 0, // 현재 페이지 중 현재 선택된 요소(0부터 시작)
  };

  const list: Item[] = [
    {
      thumbnail:
        'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg',
      name: '꿀고구마',
      discountRate: 10,
      price: 15900,
    },
    {
      // thumbnail: "https://images.unsplash.com/photo-1710756115964-f949e92b97fb?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail:
        'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg',
      name: '당근',
      discountRate: 0,
      price: 4290,
    },
    {
      // thumbnail: "https://images.unsplash.com/photo-1710756115964-f949e92b97fb?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail:
        'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg',
      name: '친황경 시금치 200g',
      discountRate: 0,
      price: 3090,
    },
    {
      // thumbnail: "https://images.unsplash.com/photo-1710756115964-f949e92b97fb?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      thumbnail:
        'https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1200608459446837-41364cda-fd49-459a-8923-24339515de9b.jpg',
      name: '친환경 쑥갓 150g',
      discountRate: 0,
      price: 3990,
    },
  ];

  return (
    <>
      <div className='mb-10'>
        <ProductNavigator data={navigatorData} selected={selected} setSelected={setSelected} />
        <ContentView
          list={list}
          totalSize={totalSize}
          currentSort={currentSort}
          setCurrentSort={setCurrentSort}
          sortOptions={sortOptions}
          currentPerSize={currentPerSize}
          setCurrentPerSize={setCurrentPerSize}
          perSizeOptions={perSizeOptions}
        />
        <ProductPager data={pagerData} />
      </div>
    </>
  );
}
