import { Dispatch, SetStateAction } from "react";

export type NavigatorData = {
  categoryTitle: string;
  items: string[];
};

type Props = {
  data: NavigatorData;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

const ProductNavigator = ({ data, selected, setSelected }: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-10">
        <div className="mb-10 text-[2rem]">{data.categoryTitle}</div>
        <div className="items w-3/4 grid gap-10 grid-cols-4 border p-10 text-[1.2rem]">
          {data.items.map((item, index) => {
            return (
              <div
                className={
                  'cursor-pointer ' +
                  (selected !== item ? 'text-gray-500' : 'text-sky-600')
                }
                key={index}
                onClick={() => setSelected(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductNavigator;
