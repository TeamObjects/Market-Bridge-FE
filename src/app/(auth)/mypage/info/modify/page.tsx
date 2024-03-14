import InfoHeader from '@/components/(auth)/(mypage)/(info)/InfoHeader';
import InfoModifyForm from '@/components/(auth)/(mypage)/(info)/InfoModifyForm';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const InfoModify = () => {
  return (
    <MyBridgePage header={<InfoHeader />} divider={<MyBridgeDivider />}>
      <InfoModifyForm />
    </MyBridgePage>
  );
};

export default InfoModify;
