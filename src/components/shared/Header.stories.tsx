// TODO public/svg download 실패 대응 필요
import type { Meta } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
export const Default = () => {
  return (
    <div>
      <Header />
    </div>
  );
};
