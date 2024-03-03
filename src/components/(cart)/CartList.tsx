'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import CartItem from './CartItem';
import { fetchCart } from '@/api/cartApi';
import { Content } from '@/interfaces/cart';

const CartList = () => {
  const { data } = useQuery({
    queryKey: ['getCartList'],
    queryFn: () => fetchCart(),
  });

  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {},
  );

  const handleAllCheckboxChange = () => {
    if (data) {
      const allChecked = Object.values(checkedItems).every(Boolean);
      const newCheckedItems: { [key: number]: boolean } = {};
      data.data.content.forEach((item: Content) => {
        newCheckedItems[item.cartId] = !allChecked;
      });
      setCheckedItems(newCheckedItems);
    }
  };

  const handleCheckboxChange = (itemId: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  const checkedItemCount = Object.values(checkedItems).filter(Boolean).length;

  useEffect(() => {
    if (data) {
      const initialCheckedItems: { [key: number]: boolean } = {};
      data.data.content.forEach((item: Content) => {
        initialCheckedItems[item.cartId] = true;
      });
      setCheckedItems(initialCheckedItems);
    }
  }, [data]);

  return (
    <div className="flex flex-col w-[70%] h-[100%]">
      <div className="flex flex-row w-[30%] h-[6%] justify-around items-center text-xl font-[18px]">
        <input
          type="checkbox"
          id="selectAllCheckbox"
          className={`w-6 h-6 rounded-full bg-white transition duration-300 cursor-pointer focus:ring-2 focus:ring-blue-500 `}
          checked={Object.values(checkedItems).every(Boolean)}
          onChange={handleAllCheckboxChange}
        />
        <label htmlFor="selectAllCheckbox">
          전체선택 ({checkedItemCount}/{data?.data.content.length || 0})
        </label>
        <p className="cursor-pointer" onClick={() => alert('준비중입니다')}>
          선택삭제
        </p>
      </div>
      <CartItem
        items={data?.data.content}
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default CartList;
