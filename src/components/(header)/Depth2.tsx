'use client';
import Depth3 from '@/components/(header)/Depth3';
import { ICategory } from '@/interfaces/product';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  depth2List: ICategory[] | undefined;
};

// const depth2List = ['여성패션', '남성패션', '남녀 공용 의류', '유아동패션'];

export default function Depth2({ depth2List }: Props) {
  const [hoverNum, setHoverNum] = useState(0);

  const isHover = !!hoverNum;
  console.log(depth2List);

  const depth3List = depth2List
    ? depth2List[hoverNum - 1]?.childCategories
    : [];

  return (
    <div className="w-[28rem]">
      <div className=" p-4 h-[100%] ">
        <div className="flex items-start" onMouseLeave={() => setHoverNum(0)}>
          <ul className="flex flex-col gap-y-3 px-4 min-w-[13rem]">
            {depth2List?.map((menu, idx) => (
              <li
                key={menu.categoryId}
                onMouseEnter={() => setHoverNum(idx + 1)}
                className={`${hoverNum === idx + 1 ? 'text-sky-500 flex justify-between font-bold' : ''} transition-all duration-150 cursor-pointer `}
              >
                <Link href={`/np/categories/${menu.categoryId}`}>
                  <span>{menu.name}</span>
                  <span>{hoverNum === idx + 1 ? '▶' : ''}</span>
                </Link>
              </li>
            ))}
          </ul>
          {isHover && <Depth3 depth3List={depth3List} />}
        </div>
      </div>
    </div>
  );
}
