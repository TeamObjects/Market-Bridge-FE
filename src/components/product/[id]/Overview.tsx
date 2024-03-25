import { InfoTableItem } from "@/app/product/[id]/page";
import { Item } from "@/app/product/page";
import Button from "@/components/shared/Button";
import Select from "@/components/shared/Select";
import { Dispatch, SetStateAction, } from "react";
import Image from 'next/image';
import { Heart, Noti } from '@/../public/svgs';

const Overview = ({
    data,
    info,
    setInfo,
  }: {
    data: Item;
    info: InfoTableItem[];
    setInfo: Dispatch<SetStateAction<InfoTableItem[]>>;
  }) => {
    const Description = () => {
      return (
        <>
          <div className="description">
            <div className="name self-start text-4xl">{data.name}</div>
            <div className="price-wrap self-start mt-2">
              {data.discountRate !== 0 ? (
                <>
                  <div className="row flex">
                    <div className="discount-rate text-4xl font-bold text-[#FD6030]">
                      {data.discountRate}%
                    </div>
                    <div className="discounted-price text-4xl font-bold ml-2">
                      {/* 
                            할인된 가격 = 원가격 * (100 - 할인율 * 0.01) 
                            + 1원단위는 버림
                          */}
                      {Math.floor(
                        (data.price * (100 - data.discountRate) * 0.01) / 10,
                      ) * 10}
                      원
                    </div>
                  </div>
                  <div className="price text-2xl text-gray-400 line-through">
                    {data.price.toLocaleString()}원
                  </div>
                </>
              ) : (
                <div className="text-2xl font-bold">
                  {data.price.toLocaleString()}원
                </div>
              )}
            </div>
          </div>
        </>
      );
    };
  
    const TableWrap = () => {
      const handleSelect = (value: string, index: number) => {
        const result = [...info];
        if (result[index].type === 'select') {
          result[index].value = value;
          setInfo(result);
        }
      };
  
      return (
        <div className="table-wrap flex flex-col mt-6 divide-y border-y">
          {info.map((item, idx) => {
            if (item.type === 'text') {
              return (
                <div key={idx} className="row w-full flex py-6">
                  <div className="w-1/3 text-gray-500">{item.key}</div>
                  <div className="w-2/3 text-black">
                    <div>{item.value.main}</div>
                    {item.value.sub && (
                      <div className="text-gray-500">{item.value.sub}</div>
                    )}
                  </div>
                </div>
              );
            }
  
            if (item.type === 'select') {
              return (
                <div key={idx} className="row w-full flex py-6">
                  <div className="w-1/3 text-gray-500">{item.key}</div>
                  <div className="w-2/3 text-black">
                    <Select
                      value={item.value}
                      options={item.options}
                      onChange={(value) => handleSelect(value, idx)}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    };
  
    const ActionView = () => {
      return (
        <>
          <div className="action-view flex flex-col mt-6">
            <div className="result-wrap self-end">
              <div className="result text-right">
                <span className="text-2xl">총 상품금액:</span>
                <span className="ml-2 text-4xl font-bold">0원</span>
              </div>
              <div className="description mt-2 text-right text-2xl text-gray-400">
                구매시 0원 적립
              </div>
            </div>
            <div className="buttons mt-4 flex gap-4 justify-center items-center">
              <div className="like w-10 h-10">
                <Button style="w-10 h-10 bg-white">
                  <div className="flex justify-center items-center border rounded-lg p-1 hover:opacity-70">
                    <Image
                      src={Heart}
                      alt="like"
                      className="flex justify-center items-center w-8 h-8"
                    />
                  </div>
                </Button>
              </div>
              <div className="noti w-10 h-10">
                <Button style="w-10 h-10 bg-white">
                  <div className="flex justify-center items-center border rounded-lg p-1 hover:opacity-70">
                    <Image
                      src={Noti}
                      alt="noti"
                      className="flex justify-center items-center w-8 h-8"
                    />
                  </div>
                </Button>
              </div>
              <div className="add w-full">
                  <Button style='w-[100%] h-[44px] xs:h-[40px] p-6 text-[13px] text-white rounded-full bg-[#011B5B]' text="장바구니 담기" />
              </div>
            </div>
          </div>
        </>
      );
    };
  
    return (
      <>
        <div className="overview flex flex-row w-full justify-center gap-4">
          <div className="w-1/2 self-start">
            <Image
              src={data.thumbnail}
              alt={data.name}
              width={400}
              height={500}
            />
          </div>
          <div className="w-1/2">
            <Description />
            <TableWrap />
            <ActionView />
          </div>
        </div>
      </>
    );
  };

export default Overview;