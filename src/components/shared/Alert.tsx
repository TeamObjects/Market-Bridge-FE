import BackDrop from '@/components/shared/BackDrop';
import Button from '@/components/shared/Button';

interface AlertProps {
  open?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonLabel?: string | undefined;
  onButtonClick: () => void;
}

const STYLE_ALERT_CONTAINER =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg overflow-hidden z-alert w-[80%] max-w-[400px] p-6 box-border ';

const STYLE_BUTTON_DEFAULT =
  'w-[100%] min-w-[300px] xs:min-w-[200px] h-[44px] xs:h-[40px] p-6 mb-4 text-[13px] text-white rounded-full bg-[#011B5B]';

const Alert = ({
  open,
  title,
  description,
  buttonLabel = '확인',
  onButtonClick,
}: AlertProps) => {
  if (open === false) {
    return null;
  }

  return (
    <BackDrop>
      <section className={STYLE_ALERT_CONTAINER}>
        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl my-10">{title}</h3>
          {description ? (
            <p className="text-[13px] mb-10">{description}</p>
          ) : null}
          <div className="flex">
            <Button
              text={buttonLabel}
              style={STYLE_BUTTON_DEFAULT}
              onClick={onButtonClick}
            />
          </div>
        </div>
      </section>
    </BackDrop>
  );
};

export default Alert;
