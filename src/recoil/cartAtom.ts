import { atom } from 'recoil';

export const deliveryFeeState = atom<number>({
  key: 'deliveryFeeState',
  default: 0,
});

export const goodsAmountState = atom<number>({
  key: 'goodsAmount',
  default: 0,
});

export const discountFeeState = atom<number>({
  key: 'discountFee',
  default: 0,
});
