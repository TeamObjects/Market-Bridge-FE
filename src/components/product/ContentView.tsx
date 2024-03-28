import Select from '@/components/shared/Select';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import Button from '@/components/shared/Button';
import { ShoppingBasket } from '@/../public/svgs';
import { Item, Option } from '@/app/product/page';

type Props = {
  list: Item[];
  totalSize: number;
  currentSort: string;
  setCurrentSort: Dispatch<SetStateAction<string>>;
  sortOptions: Option[];
  currentPerSize: string;
  setCurrentPerSize: Dispatch<SetStateAction<string>>;
  perSizeOptions: Option[];
};

export type CardProps = {
  item: Item;
};

const ContentView = ({
  list,
  totalSize,
  currentSort,
  setCurrentSort,
  sortOptions,
  currentPerSize,
  setCurrentPerSize,
  perSizeOptions,
}: Props) => {
  const Controller = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="w-3/4">
          <div className="flex justify-between">
            <div className="left text-black">총 {totalSize}건</div>
            <div className="right flex justify-center items-center gap-4">
              <div className="flex gap-4">
                {sortOptions.map((item) => {
                  return (
                    <div
                      className={
                        'cursor-pointer ' +
                        (item.value !== currentSort
                          ? 'text-gray-500'
                          : 'text-black-500')
                      }
                      key={item.value}
                      onClick={() => setCurrentSort(item.value)}
                    >
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <div className="select">
                <Select
                  value={currentPerSize}
                  options={perSizeOptions}
                  onChange={(value) => setCurrentPerSize(value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ListView = () => {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {list.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    );
  };

  const Card = ({ item }: CardProps) => {
    // const addBtnStyle = 'w-full h-[35px] xs:h-[35px] my-4 text-[13px] text-white rounded-full bg-[#011B5B]';
    const addBtnStyle =
      'w-full h-[35px] xs:h-[35px] my-4 text-[13px]  bg-white';

    return (
      <div className="w-full flex flex-col justify-start items-center">
        {/* TODO: Image 사이즈 고정 안하고 싶음 */}
        <Image src={item.thumbnail} alt={item.name} width={240} height={320} />
        <div className="add-btn w-full">
          <Button style={addBtnStyle}>
            <div className="flex justify-center items-center border rounded-lg py-2 hover:opacity-70">
              <Image
                src={ShoppingBasket}
                alt="담기"
                className="flex justify-center items-center w-[3rem] h-[2rem]"
              />
              <div className="flex justify-center items-center mx-1 h-[2rem]">
                담기
              </div>
            </div>
          </Button>
        </div>
        <div className="name self-start text-2xl">{item.name}</div>
        <div className="price-wrap self-start mt-2">
          {item.discountRate !== 0 ? (
            <>
              <div className="price text-xl text-gray-400 line-through">
                {item.price.toLocaleString()}원
              </div>
              <div className='row flex'>
                <div className="discount-rate text-2xl font-bold text-[#FD6030]">{item.discountRate}%</div>
                <div className="discounted-price text-2xl font-bold ml-2">
                    {/* 
                      할인된 가격 = 원가격 * (100 - 할인율 * 0.01) 
                      + 1원단위는 버림
                    */}
                  { Math.floor((item.price * (100 - item.discountRate) * 0.01) / 10) * 10}
                  원
                </div>
              </div>
            </>
          ) : (
            <div className="text-2xl font-bold">{item.price.toLocaleString()}원</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Controller />
      <ListView />
    </>
  );
};

export default ContentView;
