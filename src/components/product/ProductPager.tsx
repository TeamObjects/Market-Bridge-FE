import { Dispatch, ReactNode, SetStateAction } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftDouble,
  ArrowRightDouble,
} from '@/../public/svgs';
import Image from 'next/image';

export type PagerData = {
  totalPage: number; // 총 페이지 수
  perPage: number; // 페이지당 요소 수
  currentPage: number; // 현재 페이지
  currentIndex: number; // 현재 페이지 중 현재 선택된 요소
};

type Props = {
  data: PagerData;
};

const PageItem = ({
  children,
  isSelected,
}: {
  children: ReactNode;
  isSelected?: boolean;
}) => {
  return (
    <div
      className={
        'w-16 h-16 border flex justify-center items-center hover:bg-gray-100 cursor-pointer ' +
        (isSelected ? 'bg-gray-100' : '')
      }
    >
      {children}
    </div>
  );
};

const ProductPager = ({ data }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="w-3/4 flex justify-center items-center">
          {/* first-page */}
          <PageItem>
            <Image className="w-6 h-6" src={ArrowLeftDouble} alt="first-page" />
          </PageItem>
          {/* prev-page */}
          <PageItem>
            <Image className="w-6 h-6" src={ArrowLeft} alt="prev-page" />
          </PageItem>
          {[...Array(data.perPage)].map((n, index) => {
            return (
              <PageItem key={index} isSelected={data.currentIndex === index}>
                <div>{((data.currentPage - 1) * data.perPage) + index + 1}</div>
              </PageItem>
            );
          })}
          {/* after-page */}
          <PageItem>
            <Image className="w-6 h-6" src={ArrowRight} alt="after-page" />
          </PageItem>
          {/* last-page */}
          <PageItem>
            <Image className="w-6 h-6" src={ArrowRightDouble} alt="last-page" />
          </PageItem>
        </div>
      </div>
    </>
  );
};

export default ProductPager;
