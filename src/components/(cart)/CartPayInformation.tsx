'use client';
import {
  deliveryFeeState,
  goodsAmountState,
  discountFeeState,
} from '@/recoil/cartAtom';
import { useRecoilState } from 'recoil';

const CartPayInformation = () => {
  const [deliveryFee] = useRecoilState(deliveryFeeState);
  const [goodsAmount] = useRecoilState(goodsAmountState);
  const [discountFee] = useRecoilState(discountFeeState);

  const handleSubmit = () => {
    alert('주문');
  };

  return (
    <>
      <div className="flex flex-col w-[80%] h-[50%] border bg-[#FAFAFA] items-center text-2xl">
        <div className="flex flex-col w-[90%] h-[60%] justify-center">
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>상품 금액</p>
            <p>{goodsAmount.toLocaleString()}원</p>
          </div>
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>할인 금액</p>
            <p>{discountFee.toLocaleString()}원</p>
          </div>
          <div className="flex w-[100%] h-[25%] justify-between items-center">
            <p>배송비</p>
            <p>{deliveryFee.toLocaleString()}원</p>
          </div>
        </div>
        <div className="flex w-[90%] h-[20%] justify-between items-center">
          <p>결제예정금액</p>
          <p>{(deliveryFee + goodsAmount - discountFee).toLocaleString()}원</p>
        </div>
      </div>
      <div className="flex w-[80%] h-[15%] ">
        <div
          className="flex w-[100%] h-[80%] justify-center items-center cursor-pointer bg-[#77DAF8] text-3xl text-white"
          onClick={handleSubmit}
        >
          주문하기
        </div>
      </div>
    </>
  );
};

export default CartPayInformation;
