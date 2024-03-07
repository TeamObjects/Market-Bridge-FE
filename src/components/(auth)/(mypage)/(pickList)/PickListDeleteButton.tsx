'use client';

import Button from '@/components/shared/Button';

import useAlertContext from '@/hooks/useAlertContext';

const STYLE_BUTTON_DELETE =
  'w-[120px] h-[42px] my-2 py-2 text-[15px] rounded-[3px] border-[1px] border-gray-300 hover:text-white hover:bg-gray-300';

const STYLE_BUTTON_LEFT =
  'w-full pt-4 px-6 text-[18px] text-[#011B5B] border-r-[1px]';
const STYLE_BUTTON_RIGHT = 'w-full pt-4 px-6 text-[18px] text-[#011B5B]';

const PickListDeleteButton = () => {
  const { open } = useAlertContext();

  const handleDelete = () => {
    open({
      title: '삭제하시겠습니까?',
      leftButtonLabel: '취소',
      rightButtonLabel: '삭제',
      leftButtonStyle: STYLE_BUTTON_LEFT,
      rightButtonStyle: STYLE_BUTTON_RIGHT,
      onRightButtonClick: () => {
        console.log('찜한 상품이 삭제되었습니다.');
      },
    });
  };

  return (
    <Button text="삭제" style={STYLE_BUTTON_DELETE} onClick={handleDelete} />
  );
};

export default PickListDeleteButton;
