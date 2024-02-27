export interface OrderInquiry {
  code: number;
  status: string;
  message: string;
  data: OrderInquiryData;
}

interface OrderInquiryData {
  content: InquiryDataContent[];
  sort: Sort;
  currentPage: number;
  size: number;
  first: boolean;
  last: boolean;
  totalElement: number;
  totalPage: number;
}

interface InquiryDataContent {
  orderNo: string;
  createdAt: string;
  orderDetailInfos: OrderDetailInfo[];
}

interface OrderDetailInfo {
  orderNo: string;
  orderDetailId: number;
  productId: number;
  quantity: number;
  price: number;
  statusCode: string;
  deliveredDate: string;
  productThumbImageUrl: string;
  productName: string;
  optionNames: string[];
  isOwn: boolean;
}

interface Sort {
  sorted: boolean;
  direction: string;
  orderProperty: string;
}

interface DetailOrderInquiry {
  code: number;
  status: string;
  message: string;
  data: DetailOrderInquiryData;
}

interface DetailOrderInquiryData extends InquiryDataContent {
  addressValue: AddressValue;
  paymentInfo: PaymentInfo;
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

interface PaymentInfo {
  paymentMethod: string;
  cardIssuerName: string;
  totalAmount: number;
  discountAmount: number;
  deliveryFee: number;
}
