import Image from 'next/image';
import { ShoppingCart, Close } from '../../../public/svgs';
import { Content } from '@/interfaces/cart';
import { HUNDRED } from '@/constants/constants';
import {
  deliveryFeeState,
  goodsAmountState,
  discountFeeState,
} from '@/recoil/cartAtom';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect } from 'react';

interface CartItemProps {
  items: Content[];
  checkedItems: { [key: number]: boolean };
  handleCheckboxChange: (cartId: number) => void;
  handleQuantityChange: (cartId: number, newQuantity: number) => void;
  handleDeleteItem: (cartId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  items,
  checkedItems,
  handleCheckboxChange,
  handleQuantityChange,
  handleDeleteItem,
}) => {
  const [_, setDeliveryFee] = useRecoilState(deliveryFeeState);
  const [__, setGoodsAmount] = useRecoilState(goodsAmountState);
  const [___, setDiscountFee] = useRecoilState(discountFeeState);

  const calculateGoods = useCallback(() => {
    let totalGoodsAmount = 0;
    let deliveryFee = 0;
    let total = 0;
    let discount = 0;

    items?.forEach((item) => {
      let discountedPrice = item?.productPrice * item?.quantity;
      const originalPrice = discountedPrice;

      let temp = item?.productPrice * item?.quantity;
      total += temp;

      if (item.discountRate !== 0) {
        const discountRate = (HUNDRED - item.discountRate) / HUNDRED;
        discountedPrice = item?.productPrice * discountRate * item?.quantity;
        totalGoodsAmount += discountedPrice;
      } else {
        totalGoodsAmount += originalPrice;
      }
      discount = total - totalGoodsAmount;

      deliveryFee += item.deliveryFee;
    });
    setDiscountFee(Math.floor(discount));
    setGoodsAmount(total);
    setDeliveryFee(deliveryFee);
  }, [items, setGoodsAmount, setDeliveryFee, setDiscountFee]);

  useEffect(() => {
    calculateGoods();
  }, [calculateGoods]);

  return (
    <div className="flex flex-col w-[100%] h-[94%] border-y-2">
      <div className="flex w-[15%] h-[10%] items-center justify-around text-[20px]">
        <Image src={ShoppingCart} alt="쇼핑카트" width={30} height={30} />
        <p>상품</p>
      </div>
      {items?.map((item: Content) => {
        let discountedPrice = item?.productPrice * item?.quantity;

        if (item.discountRate !== 0) {
          const discountRate = (HUNDRED - item.discountRate) / HUNDRED;
          discountedPrice = item?.productPrice * discountRate * item?.quantity;
        }

        return (
          <div
            key={item?.cartId}
            className="flex w-[100%] h-[15%] items-center border-t-2"
          >
            <input
              type="checkbox"
              id="checkbox"
              className={`w-[5%] h-6 rounded-full bg-white transition duration-300 cursor-pointer `}
              onChange={() => handleCheckboxChange(item.cartId)}
              checked={checkedItems[item.cartId] || false}
            />
            <div className="w-[8%] h-[80%] relative">
              <Image
                src={item?.thumbImageUrl}
                alt="상품 사진"
                layout="fill"
                className="rounded-xl"
              />
            </div>
            <div className="flex flex-col w-[52%] h-[100%] m-auto cursor-pointer">
              <p className="flex w-[100%] h-[60%] text-[16px] items-center font-normal ">
                {item?.productName}
              </p>
              <p className="flex w-[100%] h-[40%] text-[14px] text-slate-500">
                {item?.optionNames}
              </p>
            </div>
            <div className="flex w-[10%] justify-around text-[14px] border">
              <div
                className="flex w-[30%] justify-center border-r cursor-pointer"
                onClick={() => {
                  handleQuantityChange(item.cartId, item?.quantity - 1);
                }}
              >
                -
              </div>
              <p className="flex w-[40%] justify-center">{item?.quantity}</p>
              <div
                className="flex w-[30%] justify-center border-l cursor-pointer"
                onClick={() => {
                  handleQuantityChange(item?.cartId, item?.quantity + 1);
                }}
              >
                +
              </div>
            </div>
            <p className="flex flex-col w-[20%] text-[14px]">
              {item?.discountRate === 0 ? (
                <strong className="flex w-[full] justify-center">
                  {discountedPrice.toLocaleString()}원
                </strong>
              ) : (
                <>
                  <div className="flex w-[full] ">
                    <del className="flex w-[50%] text-slate-400 justify-center">
                      {(item?.productPrice * item?.quantity).toLocaleString()}원
                    </del>
                    <p className="flex w-[50%] text-red-600 ">
                      {item?.discountRate}% 할인
                    </p>
                  </div>
                  <strong className="flex justify-center">
                    {Math.floor(discountedPrice).toLocaleString()}원
                  </strong>
                </>
              )}
            </p>
            <Image
              src={Close}
              alt="닫기 버튼"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={() => handleDeleteItem(item?.cartId)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
