type Status = 'OK' | 'NOT_FOUND' | 'ERROR';

export interface Response<T> {
  code: number;
  status: Status;
  message: string;
  data: T;
}
