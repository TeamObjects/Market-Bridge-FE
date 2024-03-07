import ReviewList from '@/components/(auth)/(mypage)/(review)/ReviewList';
import ReviewListHeader from '@/components/(auth)/(mypage)/(review)/ReviewListHeader';
import ReviewListItems from '@/components/(auth)/(mypage)/(review)/ReviewListItems';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const ProductReview = () => {
  return (
    <MyBridgePage header={<ReviewListHeader />}>
      <ReviewList />
    </MyBridgePage>
  );
};

export default ProductReview;
