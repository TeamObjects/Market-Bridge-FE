'use client';

import ContentView, { Option } from '@/components/product/ContentView';
import ProductNavigator, { NavigatorData } from '@/components/product/ProductNavigator';
import ProductPager, { PagerData } from '@/components/product/ProductPager';
import { useState } from 'react';


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

  return (
    <>
      <div className='mb-10'>
        <ProductNavigator data={navigatorData} selected={selected} setSelected={setSelected} />
        <ContentView
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
