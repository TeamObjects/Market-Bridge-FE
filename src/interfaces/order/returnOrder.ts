export interface ReturnOrder {
  code: number;
  status: string;
  message: string;
  data: ReturnOrderData;
}

interface ReturnOrderData {
  productInfo: ProductInfo;
  returnRefundInfo: ReturnRefundInfo;
}

interface ProductInfo {
  quantity: number;
  name: string;
  price: number;
  image: string;
}

interface ReturnRefundInfo {
  deliveryFee: number;
  returnFee: number;
  productTotalPrice: number;
}

export interface DetailReturnOrder {
  code: number;
  status: string;
  message: string;
  data: DetailReturnOrderData;
}

interface DetailReturnOrderData {
  orderDate: string;
  cancelDate: string;
  orderNo: string;
  reason: string;
  productInfo: DetailProductInfo;
  refundInfo: DetailRefundInfo;
}

interface DetailProductInfo {
  productId: number;
  productNo: string;
  name: string;
  price: number;
  quantity: number;
}

interface DetailRefundInfo {
  deliveryFee: number;
  refundFee: number;
  discountPrice: number;
  totalPrice: number;
}
