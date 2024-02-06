import Button, { STYLE_BUTTON_DEFAULT } from '../../Button';
import FindAuthInput from './FindAuthInput';

const FindAuthForm = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <FindAuthInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요."
      />
      <FindAuthInput
        label="휴대폰 번호"
        type="text"
        name="phone"
        placeholder="휴대폰 번호를 입력해주세요."
      />
      <FindAuthInput
        label="인증번호 입력"
        type="text"
        name="authNumber"
        placeholder="인증번호 입력"
      />
      <Button
        text="인증번호 받기"
        style={`${STYLE_BUTTON_DEFAULT} mt-4 mb-20`}
        onClick={onClick}
      />
    </>
  );
};

export default FindAuthForm;
