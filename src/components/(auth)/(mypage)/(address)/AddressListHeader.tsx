import Button from '@/components/shared/Button';

const STYLE_BUTTON = 'mr-6 text-[18px] font-bold';

const AddressListHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <h1 className="text-[26px]">배송지 관리</h1>
        <p className="ml-6 text-[15px] text-gray-400">
          배송지에 따라 상품정보 및 배송요형이 달라질 수 있습니다.
        </p>
      </div>
      <Button text="+ 새 배송지 추가" style={STYLE_BUTTON} />
    </div>
  );
};

export default AddressListHeader;
