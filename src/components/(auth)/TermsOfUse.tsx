'use client';

import { FormValue, formContext } from '@/contexts/FormContext';
import {
  SyntheticEvent,
  createRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import RequiredAcceptItem from './RequiredAcceptItem';

const STYLE_WRAP = 'mt-4 relative inline-block';
const STYLE_LABEL = 'flex items-center';
const STYLE_INPUT = 'mr-2';
const STYLE_TEXT = 'text-[14px] xs:text-xl';
const STYLE_CHOOSE = 'ml-[2px] text-xl xs:text-lg text-gray-400';

const REQUIRED_ACCEPT_CONTENTS = [
  { id: '1', content: '이용약관 동의' },
  { id: '2', content: '개인정보 수집 및 이용 동의' },
  { id: '3', content: '본인은 만 14에 이상입니다.' },
];

const TermsOfUse = () => {
  const { isEnterUserInfo, formRef, setIsAllChecked } = useContext(
    formContext,
  ) as FormValue;

  const checkboxRefs = REQUIRED_ACCEPT_CONTENTS.map(() =>
    createRef<HTMLInputElement>(),
  );

  const handleCheckedChanged = (e: SyntheticEvent) => {
    if (!formRef.current) return;

    const data = new FormData(formRef.current);
    const targetInput = e.target as HTMLInputElement;
    const selectedCount = data.getAll('select-item-required').length;

    setIsAllChecked(selectedCount === 3 ? true : false);

    if (targetInput.classList.contains('select-all')) {
      const allChecked = targetInput.checked;
      setIsAllChecked(allChecked);
      checkboxRefs.forEach((inputElem) => {
        inputElem.current!.checked = allChecked;
      });
    } else {
      const allChecked = selectedCount === REQUIRED_ACCEPT_CONTENTS.length;
      formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked =
        allChecked;
    }
  };

  if (!isEnterUserInfo) return null;

  return (
    <>
      {isEnterUserInfo && (
        <div>
          <div className="flex items-center mb-4">
            <span className="text-xl xs:text-[10px]">이용약관 동의</span>
            <span className="ml-1 text-[14px] xs:text-[12px] text-red-500">
              *
            </span>
          </div>
          <div>
            <div className={STYLE_WRAP}>
              <label htmlFor="all-agree" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="all-agree"
                  name="select-all"
                  className={`${STYLE_INPUT} select-all`}
                  onChange={handleCheckedChanged}
                />
                <span className="text-[16px] xs:text-2xl">
                  전체 동의합니다.
                </span>
              </label>
              <div className="ml-4 mt-2">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </div>
            </div>
            {REQUIRED_ACCEPT_CONTENTS.map((item, index) => (
              <RequiredAcceptItem
                key={item.id}
                handleCheckedChanged={handleCheckedChanged}
                id={item.id}
                content={item.content}
                ref={checkboxRefs[index]}
              />
            ))}
            <div className={`${STYLE_WRAP} mb-4`}>
              <label htmlFor="agree-benefits" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="agree-benefits"
                  name="select-item-choose"
                  className={STYLE_INPUT}
                />
                <span className={STYLE_TEXT}>
                  무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                </span>
                <span className={STYLE_CHOOSE}>(선택)</span>
              </label>
              <div className="flex ml-6 mt-2">
                <label htmlFor="sms" className={`${STYLE_LABEL} mr-6`}>
                  <input
                    type="checkbox"
                    id="sms"
                    name="select-item-choose"
                    className={STYLE_INPUT}
                  />
                  <span className={STYLE_TEXT}>SMS</span>
                </label>
                <label htmlFor="email" className={STYLE_LABEL}>
                  <input
                    type="checkbox"
                    id="email"
                    name="select-item-choose"
                    className={STYLE_INPUT}
                  />
                  <span className={STYLE_TEXT}>이메일</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsOfUse;
