import { SyntheticEvent, forwardRef } from 'react';

const STYLE_WRAP = 'mt-4 relative inline-block';
const STYLE_LABEL = 'flex items-center';
const STYLE_INPUT = 'mr-2';
const STYLE_TEXT = 'text-[14px] xs:text-xl';
const STYLE_CHOOSE = 'ml-[2px] text-xl xs:text-lg text-gray-400';

type Props = {
  handleCheckedChanged: (e: SyntheticEvent) => void;
  content: string;
  id: string;
};

const RequiredAcceptItem = forwardRef<HTMLInputElement, Props>(
  function RequiredAcceptItem({ handleCheckedChanged, content, id }, ref) {
    return (
      <li className={STYLE_WRAP}>
        <label htmlFor={`collect-info-required ${id}`} className={STYLE_LABEL}>
          <input
            type="checkbox"
            id={`collect-info-required ${id}`}
            name="select-item-required"
            className={STYLE_INPUT}
            onChange={handleCheckedChanged}
            ref={ref}
          />
          <span className={STYLE_TEXT}>{content}</span>
          <span className={STYLE_CHOOSE}>(필수)</span>
        </label>
      </li>
    );
  },
);

export default RequiredAcceptItem;
