export interface CancelAndReturnList {
  code: number;
  status: string;
  message: string;
  data: CancelAndReturnListData;
}

export interface CancelAndReturnListData {
  content: Content[];
  pageable: Pageable;
  totalElements: number;
  last: boolean;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Content {
  cancelReceiptDate: string;
  orderDate: string;
  orderDetailInfo: OrderDetailInfo;
}

export interface OrderDetailInfo {
  orderNo: string;
  productId: number;
  productNo: string;
  name: string;
  price: number;
  quantity: number;
  orderStatus: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
