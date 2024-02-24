'use client';
import Depth2 from '@/components/(header)/Depth2';
import { useState } from 'react';

const depth1List = [
  '패션의류/잡화',
  '뷰티',
  '출산/유아동',
  '식품',
  '주방용품',
  '생활용품',
  '홈인테리어',
  '가전디지털',
  '스포츠/레저',
  '자동차용품',
  '도서/음반/DVD',
  '완구/취미',
  '문구/오피스',
  '반려동물용품',
  '헬스/건강식품',
];

export default function Depth1() {
  const [hoverNum, setHoverNum] = useState(0);

  const isHover = !!hoverNum;

  console.log(hoverNum);

  return (
    <div
      className="absolute top-[34px] left-0 flex text-[1.35rem] z-10 bg-white"
      onMouseLeave={() => setHoverNum(0)}
    >
      <div className="w-48 p-4">
        <ul className={`flex flex-col gap-y-2`}>
          {depth1List.map((menu, idx) => (
            <li
              key={menu}
              onMouseEnter={() => setHoverNum(idx + 1)}
              className={`${hoverNum === idx + 1 ? 'text-sky-500 flex justify-between font-bold' : ''} transition-all duration-150 cursor-pointer `}
            >
              <span>{menu}</span>
              <span>{hoverNum === idx + 1 ? '▶' : ''}</span>
            </li>
          ))}
        </ul>
      </div>
      {isHover && <Depth2 number={hoverNum} />}
      {/* <Depth2 number={hoverNum} /> */}
    </div>
  );
}
