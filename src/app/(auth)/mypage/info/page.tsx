import InfoButton from '@/components/(auth)/(mypage)/(info)/InfoButton';
import InfoForm from '@/components/(auth)/(mypage)/(info)/InfoForm';
import InfoHeader from '@/components/(auth)/(mypage)/(info)/InfoHeader';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const MyInfo = () => {
  return (
    <MyBridgePage header={<InfoHeader />} divider={<MyBridgeDivider />}>
      <InfoForm />
    </MyBridgePage>
  );
};

export default MyInfo;
