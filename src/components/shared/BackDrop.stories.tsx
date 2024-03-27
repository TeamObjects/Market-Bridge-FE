import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import BackDrop from './BackDrop';
import { useState } from 'react';

const meta: Meta<typeof BackDrop> = {
  component: BackDrop,
};

export default meta;
export const Default = () => {
  /** references: AddressUpdatePopUp.tsx */
  const STYLE_ALERT_CONTAINER =
  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[12px] overflow-hidden z-alert w-[500px] max-w-[600px] min-h-[180px] px-12 py-[10px] box-border';

  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button text="open" onClick={open} />
      {visible && (
        <BackDrop onClose={close}>
          <div className={STYLE_ALERT_CONTAINER}>
            <div className='flex justify-center text-4xl'>BackDrop</div>
          </div>
        </BackDrop>
      )}
    </div>
  );
};
