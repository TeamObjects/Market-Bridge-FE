import { PickListItemProps } from '@/components/(auth)/(mypage)/(pickList)/PickListItems';

const PickListItemInfo = ({ item }: PickListItemProps) => {
  return (
    <div className="flex items-start w-full mx-10">
      <div className="flex flex-col w-full">
        <p className="text-[17px]">{item?.productName}</p>
        <span className="text-[17px] font-bold">
          {item?.price.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default PickListItemInfo;
