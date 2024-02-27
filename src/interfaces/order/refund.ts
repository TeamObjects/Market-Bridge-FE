export interface Refund {
  code: number;
  status: string;
  message: string;
  data: RefundData;
}

interface RefundData {
  orderId: number;
  orderNo: string;
  totalPrice: number;
  cancellationDate: string;
  cancelledItem: CancelledItem;
  refundInfo: RefundInfo;
}

interface CancelledItem {
  productId: number;
  productNo: string;
  name: string;
  price: number;
  quantity: number;
}

interface RefundInfo {
  totalRefundAmount: number;
  refundMethod: string;
  refundProcessedAt: string;
}
