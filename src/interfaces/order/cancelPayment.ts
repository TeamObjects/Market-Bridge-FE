export interface CancelPayment {
  code: number;
  status: string;
  message: string;
  data: CancelPaymentData;
}

export interface CancelPaymentData {
  paymentMethodType: string;
  orderName: string;
  canceledAt: null;
  kakaoStatus: string;
  totalAmount: number;
  discountAmount: number;
  taxFreeAmount: number;
  cardIssuerName: string;
  cardInstallMonth: number;
  productInfos: ProductInfo[];
}

export interface ProductInfo {
  isOwn: boolean;
  name: string;
  price: number;
  isSubs: boolean;
  thumbImgUrl: string;
  discountRate: number;
  sellerName: string;
  deliveredDate: string;
}
