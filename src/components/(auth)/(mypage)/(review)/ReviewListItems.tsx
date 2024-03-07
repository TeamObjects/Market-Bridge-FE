import ReviewListItem from '@/components/(auth)/(mypage)/(review)/ReviewListItem';

interface ReviewListItem {
  productThumbnailUrl: string;
  productName: string;
  deliveredDate: string;
}

export interface ReviewListItemProps {
  item: ReviewListItem;
}

export const REVIEW_LIST_ITEMS = [
  {
    productThumbnailUrl: '/images/thumbnail.jpeg',
    productName: '[이연복의 목란] 짜장면 2인분',
    deliveredDate: '2024-01-11T13:15:30.1234567',
  },
  {
    productThumbnailUrl: '/images/thumbnail2.jpeg',
    productName: '[이연복의 목란] 짬봉 오리지날 2인분',
    deliveredDate: '2024-01-12T13:15:30.1234567',
  },
  {
    productThumbnailUrl: '/images/thumbnail.jpeg',
    productName: '[이연복의 목란] 짜장면 4인분',
    deliveredDate: '2024-01-13T13:15:30.1234567',
  },
] as ReviewListItem[];

const ReviewListItems = () => {
  return (
    <>
      <div className="h-[40px] mt-6 pb-6 border-b-[1px] border-black text-[16px] text-bold">
        총 {REVIEW_LIST_ITEMS.length}개
      </div>
      <ul>
        {REVIEW_LIST_ITEMS.map((item) => (
          <ReviewListItem key={item?.productName} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ReviewListItems;
