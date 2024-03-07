import ReviewedListItem from '@/components/(auth)/(mypage)/(review)/ReviewedListItem';

interface ReviewImageDtos {
  seqNo: number;
  imgUrl: string;
  description: string;
}

interface GetReviewSurveyDtos {
  surveyCategoryName: string;
  content: string;
}

interface ReviewedListItem {
  memberName: string;
  rating: number;
  productName: string;
  productThumbnailUrl: string;
  summary: string;
  reviewImageDtos: ReviewImageDtos[];
  content: string;
  getReviewSurveyDtos: GetReviewSurveyDtos[];
}

export interface ReviewedListItemProps {
  item: ReviewedListItem;
}

export const REVIEWED_LIST_ITEMS = [
  {
    memberName: '멤버명',
    rating: 5,
    productName: '상품명',
    productThumbnailUrl: '/images/thumbnail.jpeg',
    summary: '한줄요약',
    reviewImageDtos: [
      {
        seqNo: 1,
        imgUrl: '/images/thumbnail.jpeg',
        description: '캡션1',
      },
      {
        seqNo: 2,
        imgUrl: '/images/thumbnail.jpeg',
        description: '캡션2',
      },
    ],
    content: '리뷰내용',
    getReviewSurveyDtos: [
      {
        surveyCategoryName: '서베이카테고리1(질문1)',
        content: '작성한 내용1',
      },
      {
        surveyCategoryName: '서베이카테고리2(질문2)',
        content: '작성한 내용2',
      },
      {
        surveyCategoryName: '서베이카테고리2(질문3)',
        content: '선택한 내용3',
      },
      {
        surveyCategoryName: '서베이카테고리4(질문4)',
        content: '선택한 내용4',
      },
    ],
  },
  {
    memberName: '멤버명',
    rating: 5,
    productName: '상품명',
    productThumbnailUrl: '/images/thumbnail2.jpeg',
    summary: '한줄요약',
    reviewImageDtos: [
      {
        seqNo: 1,
        imgUrl: '/images/thumbnail2.jpeg',
        description: '캡션1',
      },
    ],
    content: '리뷰내용',
    getReviewSurveyDtos: [
      {
        surveyCategoryName: '서베이카테고리1(질문1)',
        content: '작성한 내용1',
      },
      {
        surveyCategoryName: '서베이카테고리2(질문2)',
        content: '작성한 내용2',
      },
      {
        surveyCategoryName: '서베이카테고리2(질문3)',
        content: '선택한 내용3',
      },
      {
        surveyCategoryName: '서베이카테고리4(질문4)',
        content: '선택한 내용4',
      },
    ],
  },
] as ReviewedListItem[];

const ReviewListItems = () => {
  return (
    <>
      <div className="h-[40px] mt-6 pb-6 border-b-[1px] border-black text-[16px] text-bold">
        총 {REVIEWED_LIST_ITEMS.length}개
      </div>
      <ul>
        {REVIEWED_LIST_ITEMS.map((item) => (
          <ReviewedListItem key={item?.productName} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ReviewListItems;
