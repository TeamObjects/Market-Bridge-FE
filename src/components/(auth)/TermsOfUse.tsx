'use client';

import { FormValue, formContext } from '@/contexts/FormContext';
import { useContext } from 'react';

const STYLE_WRAP = 'mt-4 relative inline-block';
const STYLE_LABEL = 'flex items-center';
const STYLE_INPUT = 'mr-2';
const STYLE_TEXT = 'text-[14px] xs:text-xl';
const STYLE_CHOOSE = 'ml-[2px] text-xl xs:text-lg text-gray-400';

const TermsOfUse = () => {
  const { isEnterUserInfo } = useContext(formContext) as FormValue;

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
                <input type="checkbox" id="all-agree" className={STYLE_INPUT} />
                <span className="text-[16px] xs:text-2xl">
                  전체 동의합니다.
                </span>
              </label>
              <div className="ml-4 mt-2">
                선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                이용할 수 있습니다.
              </div>
            </div>
            <div className={STYLE_WRAP}>
              <label htmlFor="agree-terms-of-use" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="agree-terms-of-use"
                  className={STYLE_INPUT}
                />
                <span className={STYLE_TEXT}>이용약관 동의</span>
                <span className={STYLE_CHOOSE}>(필수)</span>
              </label>
            </div>
            <div className={STYLE_WRAP}>
              <label htmlFor="collect-info-required" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="collect-info-required"
                  className={STYLE_INPUT}
                />
                <span className={STYLE_TEXT}>개인정보 수집 및 이용 동의</span>
                <span className={STYLE_CHOOSE}>(필수)</span>
              </label>
            </div>
            <div className={STYLE_WRAP}>
              <label htmlFor="collect-info-choose" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="collect-info-choose"
                  className={STYLE_INPUT}
                />
                <span className={STYLE_TEXT}>개인정보 수집 및 이용 동의</span>
                <span className={STYLE_CHOOSE}>(선택)</span>
              </label>
            </div>
            <div className={STYLE_WRAP}>
              <label htmlFor="agree-benefits" className={STYLE_LABEL}>
                <input
                  type="checkbox"
                  id="agree-benefits"
                  className={STYLE_INPUT}
                />
                <span className={STYLE_TEXT}>
                  무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                </span>
                <span className={STYLE_CHOOSE}>(선택)</span>
              </label>
              <div className="flex ml-6 mt-2">
                <label htmlFor="sms" className={`${STYLE_LABEL} mr-6`}>
                  <input type="checkbox" id="sms" className={STYLE_INPUT} />
                  <span className={STYLE_TEXT}>SMS</span>
                </label>
                <label htmlFor="email" className={STYLE_LABEL}>
                  <input type="checkbox" id="email" className={STYLE_INPUT} />
                  <span className={STYLE_TEXT}>이메일</span>
                </label>
              </div>
            </div>
            <div className={`${STYLE_WRAP} mb-10`}>
              <label htmlFor="age-check" className={STYLE_LABEL}>
                <input type="checkbox" id="age-check" className={STYLE_INPUT} />
                <span className={STYLE_TEXT}>본인은 만 14세 이상입니다.</span>
                <span className={STYLE_CHOOSE}>(필수)</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TermsOfUse;
