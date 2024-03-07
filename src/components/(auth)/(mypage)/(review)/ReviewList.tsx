'use client';

import ReviewListItems from '@/components/(auth)/(mypage)/(review)/ReviewListItems';
import Button from '@/components/shared/Button';

import { useRouter, useSearchParams } from 'next/navigation';
import ReviewedListItems from './ReviewedListItems';

const STYLE_BUTTON =
  'w-[50%] h-[55px] text-[18px]  border-[1px] border-gray-200';

const ReviewList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabIndex = searchParams.get('tabIndex');

  const handleClick = (tabIndex: string) => {
    router.push(`/mypage/review?tabIndex=${tabIndex}`);
    router.refresh();
  };

  return (
    <>
      <nav className="flex w-full mb-4">
        <Button
          text="작성 가능 후기"
          style={`${
            tabIndex === '0' ? 'bg-white text-[#011B5B]' : 'bg-gray-100'
          } ${STYLE_BUTTON}`}
          onClick={() => handleClick('0')}
        />
        <Button
          text="작성한 후기"
          style={`${STYLE_BUTTON} ${
            tabIndex === '1' ? 'bg-white text-[#011B5B]' : 'bg-gray-100'
          } `}
          onClick={() => handleClick('1')}
        />
      </nav>
      {tabIndex !== '1' && <ReviewListItems />}
      {tabIndex === '1' && <ReviewedListItems />}
    </>
  );
};

export default ReviewList;
