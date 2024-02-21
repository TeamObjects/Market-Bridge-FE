export interface CreatePayment {
  code: number;
  status: string;
  message: string;
  data: CreatePaymentData[];
}

interface CreatePaymentData {
  paymentMethodType: string;
  orderName: string;
  approvedAt: string;
  totalAmount: number;
  discountAmount: number;
  taxFreeAmount: number;
  cardIssuerName: string;
  cardInstallMonth: number;
  addressValue: AddressValue;
  productInfos: ProductInfo[];
}

interface AddressValue {
  phoneNo: string;
  name: string;
  city: string;
  street: string;
  zipcode: string;
  detail: string;
  alias: string;
}

interface ProductInfo {
  isOwn: boolean;
  name: string;
  price: number;
  isSubs: boolean;
  thumbImgUrl: string;
  discountRate: number;
  sellerName: string;
  deliveredDate: string;
}
