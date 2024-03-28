import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import Alert from './Alert';
import { useState } from 'react';

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;
export const Default = () => {
  const [state, setState] = useState({
    open: false,
    close: false,
  });

  const open = () => {
    setState({
      open: true,
      close: false,
    });
  };
  const close = () => {
    setState({
      open: false,
      close: true,
    });
  };

  return (
    <div>
      <Button text="open" onClick={open} />
      <Alert
        {...state}
        title="title"
        description="description"
        onLeftButtonClick={close}
        onRightButtonClick={close}
      />
    </div>
  );
};
