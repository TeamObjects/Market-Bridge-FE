import { ReviewedListItemProps } from '@/components/(auth)/(mypage)/(review)/ReviewedListItems';
import GenericListItem from '@/components/(auth)/(mypage)/GenericListItem';
import Button from '@/components/shared/Button';
import ReviewedListItemInfo from './ReviewedListItemInfo';

const STYLE_BUTTON_CART =
  'w-[120px] h-[42px] my-2 py-2 text-[15px] rounded-[3px] border-[1px] border-[#011B5B] hover:text-white hover:bg-[#011B5B]';

const ReviewedListItem = ({ item }: ReviewedListItemProps) => {
  return (
    <li className="list-none p-[20px]">
      <GenericListItem
        thumbnail={item?.productThumbnailUrl}
        buttons={
          <div className="flex flex-col justify-center items-center ">
            <Button text="후기수정" style={STYLE_BUTTON_CART} />
          </div>
        }
      >
        <ReviewedListItemInfo item={item} />
      </GenericListItem>
      <div>
        <p className="mt-6 text-[15px]">
          {item.getReviewSurveyDtos[0].content}
        </p>
      </div>
    </li>
  );
};

export default ReviewedListItem;
