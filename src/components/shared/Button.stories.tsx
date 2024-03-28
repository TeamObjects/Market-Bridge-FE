import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
export const Default = () => {
  
  const clickMe = () => {
    console.log("clickMe");
  }

  return (
    <div>
      <Button text="ClickMe" onClick={clickMe} />
    </div>
  );
};
