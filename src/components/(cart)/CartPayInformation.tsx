'use client';

const CartPayInformation = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] h-[50%] border bg-[#FAFAFA] items-center text-2xl">
        <div className="flex flex-col w-[90%] h-[60%] justify-center">
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>상품 금액</p>
            <p>61,880원</p>
          </div>
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>상품 할인금액</p>
            <p>61,880원</p>
          </div>
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>배송비</p>
            <p>61,880원</p>
          </div>
        </div>
        <div className="flex w-[90%] h-[20%] justify-between items-center">
          <p>결제예정금액</p>
          <p>61,880원</p>
        </div>
      </div>
      <div className="flex w-[80%] h-[15%] ">
        <div className="flex w-[100%] h-[80%] justify-center items-center cursor-pointer bg-[#77DAF8] text-3xl text-white">
          주문하기
        </div>
      </div>
    </>
  );
};

export default CartPayInformation;
