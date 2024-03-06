import PickListItem from '@/components/(auth)/(mypage)/(pickList)/PickListItem';

interface PickListItem {
  productId: number;
  optionNameList?: string[];
  price: number;
  productName: string;
  thumbImgUrl: string;
  isSoldOut?: boolean;
}

export interface PickListItemProps {
  item?: PickListItem;
}

export const PICK_LIST_ITEMS = [
  {
    productId: 1,
    optionNameList: [],
    price: 9900,
    productName: '[이연복의 목란] 짜장면 2인분',
    thumbImgUrl: '/images/thumbnail.jpeg',
    isSoldOut: false,
  },
  {
    productId: 2,
    optionNameList: ['마일드', '오리지날'],
    price: 12420,
    productName: '[이연복의 목란] 짬뽕 2인분',
    thumbImgUrl: '/images/thumbnail2.jpeg',
    isSoldOut: false,
  },
] as PickListItem[];

const PickListItems = () => {
  return (
    <ul>
      {PICK_LIST_ITEMS.map((item) => (
        <PickListItem key={item?.productId} item={item} />
      ))}
    </ul>
  );
};

export default PickListItems;
