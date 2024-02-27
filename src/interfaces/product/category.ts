import { Response } from '@/interfaces/response';

export interface ICategory {
  categoryId: number;
  parentId: number;
  level: number;
  name: string;
  childCategories?: ICategory[];
}

export interface Category extends Response<ICategory[]> {}
