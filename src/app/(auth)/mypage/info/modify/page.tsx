import InfoHeader from '@/components/(auth)/(mypage)/(info)/InfoHeader';
import InfoModifyButtons from '@/components/(auth)/(mypage)/(info)/InfoModifyButtons';
import InfoModifyForm from '@/components/(auth)/(mypage)/(info)/InfoModifyForm';
import MyBridgeDivider from '@/components/(auth)/(mypage)/MyBridgeDivider';
import MyBridgePage from '@/components/(auth)/(mypage)/MyBridgePage';

const InfoModify = () => {
  return (
    <MyBridgePage header={<InfoHeader />} divider={<MyBridgeDivider />}>
      <InfoModifyForm />
      <div className="h-[1px] bg-gray-200" />
      <InfoModifyButtons />
    </MyBridgePage>
  );
};

export default InfoModify;
