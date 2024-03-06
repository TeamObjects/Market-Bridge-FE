import Button from '@/components/shared/Button';
import { PiListMagnifyingGlass } from 'react-icons/pi';

export const STYLE_BUTTON =
  'w-[150px] h-[44px] p-6 mt-10 text-[14px] text-white rounded-[5px] bg-[#011B5B]';

const NoOrderList = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-6 text-gray-300">
        <PiListMagnifyingGlass className="w-[60px] h-[60px] mx-auto" />
        <p className="text-[15px]">3개월간의 주문내역이 없습니다.</p>
      </div>
      <Button text="베스트 상품 보기" style={STYLE_BUTTON} />
    </div>
  );
};

export default NoOrderList;
