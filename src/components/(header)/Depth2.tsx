'use client';
import Depth3 from '@/components/(header)/Depth3';
import { useState } from 'react';

type Props = {
  number: number;
};

const depth2List = ['여성패션', '남성패션', '남녀 공용 의류', '유아동패션'];

export default function Depth2({ number }: Props) {
  const [hoverNum, setHoverNum] = useState(0);

  const isHover = !!hoverNum;

  return (
    <div className="w-[28rem]">
      <div className=" p-4 h-[100%] ">
        <div className="flex items-start" onMouseLeave={() => setHoverNum(0)}>
          <ul className="flex flex-col gap-y-3 px-4">
            {depth2List.map((menu, idx) => (
              <li key={menu} onMouseEnter={() => setHoverNum(idx + 1)}>
                {menu}
              </li>
            ))}
          </ul>
          {isHover && <Depth3 number={hoverNum} />}
        </div>
      </div>
    </div>
  );
}
