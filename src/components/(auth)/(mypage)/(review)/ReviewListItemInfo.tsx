import { ReviewListItemProps } from '@/components/(auth)/(mypage)/(review)/ReviewListItems';

const ReviewListItemInfo = ({ item }: ReviewListItemProps) => {
  return (
    <div className="w-full ml-8">
      <p className="text-[18px] fond-bold">{item.productName}</p>
      <p className="text-[16px] text-gray-500">
        {item.deliveredDate.substring(0, 10)} 배송완료
      </p>
    </div>
  );
};

export default ReviewListItemInfo;
