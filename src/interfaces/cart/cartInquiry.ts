export interface CartInquiry {
  code: number;
  status: string;
  message: string;
  data: CartInquiryData;
}

export interface CartInquiryData {
  content: Content[];
}

export interface Content {
  cartId: number;
  productId: number;
  productNo: string;
  productName: string;
  productPrice: number;
  quantity: number;
  discountRate: number;
  thumbImageUrl: string;
  isOwn: boolean;
  isSubs: boolean;
  stock: number;
  deliveryFee: number;
  deliveredDate: string;
  optionNames: string[];
  availableCoupons: AvailableCoupons[];
  sort: Sort;
  currentPage: number;
  size: number;
  first: boolean;
  last: boolean;
}

export interface AvailableCoupons {
  couponId: number;
  name: string;
  price: number;
  endDate: string;
  minimumPrice: number;
}

export interface Sort {
  sorted: boolean;
  direction: string;
  orderProperty: string;
}

export interface CartQuantityInquiry {
  code: number;
  status: string;
  message: string;
  data: number;
}
