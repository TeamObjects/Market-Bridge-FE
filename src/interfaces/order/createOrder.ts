export interface CreateOrderRequest {
  totalAmount: number;
  totalDiscountAmount: number;
  realAmount: number;
  addressId: number;
  orderName: string;
  productValues: ProduceValue[];
}

export interface ProduceValue {
  productId: number;
  sellerId: number;
  couponId: number;
  quantity: number;
  deliveredDate: string;
}

export interface CreateOrder {
  code: number;
  status: string;
  message: string;
  data: CreateOrderData[];
}

export interface CreateOrderData {
  tid: string;
  nextRedirectPcUrl: string;
  nextRedirectAppUrl: string;
  nextRedirectMobileUrl: string;
  androidAppScheme: string;
  iosAppScheme: string;
  createdAt: string;
}
