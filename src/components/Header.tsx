import React from 'react';

import getCategoryList from '@/api/categoryApi';
import Navbar from '@/components/(header)/Navbar';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

const Header = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['category'],
    queryFn: getCategoryList,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Navbar />
    </HydrationBoundary>
  );
};

export default Header;
