const OrderListHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <h1 className="text-[26px]">주문 내역</h1>
        <p className="ml-6 text-[13px] text-gray-400">
          최대 지난 3년간의 주문 내역까지 확인할 수 있어요
        </p>
      </div>
      <div className="pr-[16px] border-[1px] border-gray-300 bg-white">
        <select
          name="duration"
          id="duration"
          className="w-[150px] h-[48px] pl-[14px] py-[12px] text-[14px] outline-none"
        >
          <option value="90">3개월</option>
          <option value="180">6개월</option>
          <option value="365">1년</option>
          <option value="1095">3년</option>
        </select>
      </div>
    </div>
  );
};

export default OrderListHeader;
