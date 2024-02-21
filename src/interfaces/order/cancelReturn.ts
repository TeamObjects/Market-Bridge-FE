export interface CancelReturn {
  code: number;
  status: string;
  message: string;
  data: CancelReturnData;
}

export interface CancelReturnData {
  orderId: number;
  orderNo: string;
  totalPrice: number;
  returnedDate: string;
  returnedItem: ReturnedItem;
  refundInfo: RefundInfo;
}

export interface ReturnedItem {
  productId: number;
  productNo: string;
  name: string;
  price: number;
  quantity: number;
}

export interface RefundInfo {
  totalRefundAmount: number;
  refundMethod: string;
  refundProcessedAt: string;
}
