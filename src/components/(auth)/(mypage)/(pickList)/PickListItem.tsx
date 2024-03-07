import { BsCart2 } from 'react-icons/bs';

import PickListDeleteButton from '@/components/(auth)/(mypage)/(pickList)/PickListDeleteButton';
import PickListItemInfo from '@/components/(auth)/(mypage)/(pickList)/PickListItemInfo';
import { PickListItemProps } from '@/components/(auth)/(mypage)/(pickList)/PickListItems';
import GenericListItem from '@/components/(auth)/(mypage)/GenericListItem';
import Button from '@/components/shared/Button';

const STYLE_BUTTON_CART =
  'w-[120px] h-[42px] my-2 py-2 text-[15px] rounded-[3px] border-[1px] border-[#011B5B] hover:text-white hover:bg-[#011B5B]';

const PickListItem = ({ item }: PickListItemProps) => {
  return (
    <li className="list-none p-[20px]">
      <GenericListItem
        thumbnail={item?.thumbImgUrl}
        buttons={
          <div className="flex flex-col justify-center items-center ">
            <PickListDeleteButton />
            <Button
              text={
                <div className="flex justify-center items-center ">
                  <BsCart2 />
                  <span className="ml-2">담기</span>
                </div>
              }
              style={STYLE_BUTTON_CART}
            />
          </div>
        }
      >
        <PickListItemInfo item={item} />
      </GenericListItem>
    </li>
  );
};

export default PickListItem;
