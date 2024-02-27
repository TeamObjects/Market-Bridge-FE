import { Category } from '@/interfaces/product';
import { QueryFunction } from '@tanstack/react-query';

const getCategoryList: QueryFunction<Category, [string]> = async ({
  queryKey,
}) => {
  const [key] = queryKey;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}category/total`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { tags: [key] },
      cache: 'force-cache',
    },
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      errorData.message || '카테고리 데이터를 가져오는데 실패했습니다...',
    );
  }

  return response.json();
};

export default getCategoryList;
