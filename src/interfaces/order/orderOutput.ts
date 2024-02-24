export interface OrderOutput {
  code: number;
  status: string;
  message: string;
  data: OrderOutputData[];
}

export interface OrderOutputData {
  phoneNo: string;
  name: string;
  city: string;
  street: string;
  zipcode: string;
  detail: string;
  alias: string;
}
