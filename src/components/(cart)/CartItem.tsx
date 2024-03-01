'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Close } from '../../../public/svgs';
import { Content } from '@/interfaces/cart';

interface CartItemProps {
  items: Content[];
}

const CartItem: React.FC<CartItemProps> = ({ items }) => {
  console.log(items);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col w-[100%] h-[94%] border-y-2">
      <div className="flex w-[100%] h-[10%] items-center text-[20px]">
        <Image src={ShoppingCart} alt="쇼핑카트" width={30} height={30} />
        <p>상품</p>
      </div>
      {items?.map((item: Content) => {
        return (
          <div
            key={item?.cartId}
            className="flex w-[100%] h-[15%] items-center border-t-2"
          >
            <input
              type="checkbox"
              id="checkbox"
              className={`w-[5%] h-6 rounded-full bg-white transition duration-300 cursor-pointer focus:ring-2 focus:ring-blue-500 `}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="w-[8%] h-[80%] relative">
              <Image
                src={item?.thumbImageUrl}
                alt="상품 사진"
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col w-[52%] h-[100%] m-auto">
              <p className="flex w-[100%] h-[60%] text-[16px] items-center font-normal">
                {item?.productName}
              </p>
              <p className="flex w-[100%] h-[40%] text-[14px] text-slate-500">
                {item?.optionNames}
              </p>
            </div>
            <p className="w-[15%] text-[14px]">{item?.quantity}</p>
            <p className="w-[15%] text-[14px]">{item?.productPrice}</p>
            <Image src={Close} alt="닫기 버튼" width={25} height={25} />
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
