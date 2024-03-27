import type { Meta } from '@storybook/react';
import Select from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
export const Default = () => {
  const [value, setValue] = useState('60');
  const options: {label: string; value: string;}[] = [
    {
      value: '30',
      label: '30개씩 보기',
    },
    {
      value: '60',
      label: '60개씩 보기',
    },
    {
      value: '100',
      label: '100개씩 보기',
    },
  ];

  return (
    <div>
      <Select value={value} options={options} onChange={(value) => setValue(value)}/>
    </div>
  );
};
