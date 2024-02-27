'use client';

import Image from 'next/image';
import { Category } from '../../../public/svgs';
import { useState } from 'react';
import Depth1 from '@/components/(header)/Depth1';

export default function CategoryIcon() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex justify-center items-center cursor-pointer flex-grow relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`transition-all duration-300 hover:bg-sky-500 hover:text-white group p-2 flex items-center gap-x-2 ${isHover ? 'bg-sky-500 text-white' : ''}`}
      >
        <Image
          src={Category}
          alt="카테고리"
          className={`group-hover:invert transition-all duration-300 ${isHover ? 'invert' : ''}`}
        />
        <p>카테고리</p>
      </div>
      {isHover && <Depth1 />}
      {/* <Depth1 /> */}
    </div>
  );
}
