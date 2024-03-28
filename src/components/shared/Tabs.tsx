type Option = {
  value: string;
  label: string;
};

export type TabData = {
  value: string;
  options: Option[];
};

type Props = {
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

const Tabs = ({ value, options, onChange }: Props) => {
  const activeStyle =
    'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white';
  const unActiveStyle =
    'inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer';

  return (
    <>
      <div className="sm:hidden">
        <label className="sr-only">Select</label>
        <select
          value={value}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(event) => onChange(event.target.value)}
        >
          {options.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <ul className="hidden text-xl font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        {options.map((item, index) => {
          return (
            <li key={index} className="w-full focus-within:z-10">
              <a className={item.value === value ? activeStyle : unActiveStyle} onClick={() => onChange(item.value)}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tabs;
