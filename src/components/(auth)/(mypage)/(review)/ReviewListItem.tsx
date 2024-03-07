import { ReviewListItemProps } from '@/components/(auth)/(mypage)/(review)/ReviewListItems';
import GenericListItem from '@/components/(auth)/(mypage)/GenericListItem';
import Button from '@/components/shared/Button';
import ReviewListItemInfo from './ReviewListItemInfo';

const STYLE_BUTTON_CART =
  'w-[120px] h-[42px] my-2 py-2 text-[15px] rounded-[3px] border-[1px] border-[#011B5B] hover:text-white hover:bg-[#011B5B]';

const ReviewListItem = ({ item }: ReviewListItemProps) => {
  return (
    <li className="list-none p-[20px]">
      <GenericListItem
        thumbnail={item?.productThumbnailUrl}
        buttons={
          <div className="flex flex-col justify-center items-center ">
            <Button text="후기작성" style={STYLE_BUTTON_CART} />
          </div>
        }
      >
        <ReviewListItemInfo item={item} />
      </GenericListItem>
    </li>
  );
};

export default ReviewListItem;
