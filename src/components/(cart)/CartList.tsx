'use client';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import CartItem from './CartItem';
import { fetchCart } from '@/api/cartApi';

const CartList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { data } = useQuery({
    queryKey: ['getCartList'],
    queryFn: () => fetchCart(),
  });

  //   console.log(data);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col w-[70%] h-[100%]">
      <div className="flex flex-row w-[30%] h-[6%] justify-around items-center text-xl font-[18px]">
        <input
          type="checkbox"
          id="checkbox"
          className={`w-6 h-6 rounded-full bg-white transition duration-300 cursor-pointer focus:ring-2 focus:ring-blue-500 `}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p>전체선택 (1/{data?.data.content.length})</p>
        <p>선택삭제</p>
      </div>
      <CartItem items={data?.data.content} />
    </div>
  );
};

export default CartList;
