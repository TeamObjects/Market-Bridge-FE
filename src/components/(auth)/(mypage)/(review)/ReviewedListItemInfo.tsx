import { ReviewedListItemProps } from '@/components/(auth)/(mypage)/(review)/ReviewedListItems';

const ReviewedListItemInfo = ({ item }: ReviewedListItemProps) => {
  return (
    <div className="w-full ml-8">
      <p className="text-[18px] fond-bold">{item.productName}</p>
    </div>
  );
};

export default ReviewedListItemInfo;
