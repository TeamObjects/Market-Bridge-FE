import BackDrop from '@/components/shared/BackDrop';
import Button from '@/components/shared/Button';

import { ReactNode } from 'react';

interface AlertProps {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  leftButtonLabel?: string | undefined;
  rightButtonLabel?: string | undefined;
  leftButtonStyle?: string | undefined;
  rightButtonStyle?: string | undefined;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
  node?: ReactNode;
}

const STYLE_ALERT_CONTAINER =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px] overflow-hidden z-alert w-[35%] max-w-[600px] min-h-[180px] px-12 py-[10px] box-border ';

const STYLE_BUTTON_DEFAULT =
  'w-[100%] min-w-[300px] xs:min-w-[200px] h-[44px] xs:h-[40px] p-6 mb-4 text-[18px] text-[#011B5B]';

const Alert = ({
  open,
  title,
  description,
  leftButtonLabel = '',
  rightButtonLabel = '확인',
  leftButtonStyle,
  rightButtonStyle,
  onLeftButtonClick,
  onRightButtonClick,
  node,
}: AlertProps) => {
  if (open === false) {
    return null;
  }

  return (
    <BackDrop>
      <section className={STYLE_ALERT_CONTAINER}>
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="flex flex-col justify-center items-center min-h-[115px]">
            {title ? <h3 className="text-[18px] my-10">{title}</h3> : null}
            {description ? (
              <p className="text-[13px] mb-10">{description}</p>
            ) : null}
            {node}
          </div>
          <div className="flex justify-center items-center w-full h-[55px] border-t-[1px] border-gray-100">
            {leftButtonLabel !== '' && (
              <Button
                text={leftButtonLabel}
                style={leftButtonStyle || STYLE_BUTTON_DEFAULT}
                onClick={onLeftButtonClick}
              />
            )}
            <Button
              text={rightButtonLabel}
              style={rightButtonStyle || STYLE_BUTTON_DEFAULT}
              onClick={onRightButtonClick}
            />
          </div>
        </div>
      </section>
    </BackDrop>
  );
};

export default Alert;
