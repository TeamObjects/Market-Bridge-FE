export interface CancelOrder {
  code: number;
  status: string;
  message: string;
  data: CancelOrderData;
}

interface CancelOrderData {
  productInfo: ProductInfo;
  cancelRefundInfo: RefundInfo;
}

interface ProductInfo {
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface RefundInfo {
  deliveryFee: number;
  refundFee: number;
  discountPrice: number;
  totalPrice: number;
}

interface DetailCancelOrder {
  code: number;
  status: string;
  message: string;
  data: DetailCancelOrderData;
}

interface DetailCancelOrderData {
  orderDate: string;
  cancelDate: string;
  orderNo: string;
  reason: string;
  productInfo: DetailProductInfo;
  refundInfo: RefundInfo;
}

interface DetailProductInfo {
  productId: number;
  productNo: string;
  name: string;
  price: number;
  quantity: number;
}
