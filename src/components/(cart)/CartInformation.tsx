import Image from 'next/image';
import { Location } from '../../../public/svgs';

const CartInformation = () => {
  return (
    <aside className="flex flex-col w-[30%] h-[80%] items-center ">
      <div className="flex flex-col w-[80%] h-[40%] border justify-around items-center">
        <div className="flex w-[90%] h-[20%] items-center text-2xl">
          <Image src={Location} alt="위치" />
          <p>배송지</p>
        </div>
        <div className="flex w-[90%] h-[20%] items-center text-2xl">
          <p>경기도 성남시 분당구 정자동 불정로 6 NAVER 그린팩토리 1층</p>
        </div>
        <div className="flex w-[90%] h-[20%] justify-center items-center text-xl border cursor-pointer">
          배송지 변경
        </div>
      </div>
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
    </aside>
  );
};

export default CartInformation;
