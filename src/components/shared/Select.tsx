import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const Select = ({ value, options, onChange }: Props) => {
  return (
    <div>
      <select
        value={value}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        onChange={(event) => onChange(event.target.value)}
      >
        {
            options.map((item) => {
                return (
                    <option key={item.value} value={item.value}>{item.label}</option>
                );
            })
        }
      </select>
    </div>
  );
};

export default Select;
