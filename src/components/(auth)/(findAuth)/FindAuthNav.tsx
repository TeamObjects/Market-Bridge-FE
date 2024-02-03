'use client';

import { useState } from 'react';

const FindAuthNav = () => {
  const [selected, setSelected] = useState('phone');
  const [hovered, setHovered] = useState('');

  const handleSelect = (selection: string) => {
    setSelected(selection);
    setHovered('');
  };

  const handleHover = (selection: string) => {
    setHovered(selection);
  };

  const handleHoverLeave = () => {
    setHovered('');
  };

  const isActive = (selection: string) => {
    return hovered ? hovered === selection : selected === selection;
  };

  return (
    <nav className="mb-16 p-4">
      <div className="flex justify-between w-full text-[16px] border-b-[1px] border-gray-300">
        <button
          className={`flex-1 pb-6 ${
            isActive('phone')
              ? 'border-b-2 border-[#011B5B]'
              : 'border-transparent'
          } hover:border-b-2 hover:border-[#011B5B]`}
          onClick={() => handleSelect('phone')}
          onMouseEnter={() => handleHover('phone')}
          onMouseLeave={handleHoverLeave}
        >
          휴대폰 인증
        </button>
        <button
          className={`flex-1 pb-6 ${
            isActive('email')
              ? 'border-b-2 border-[#011B5B]'
              : 'border-transparent'
          } hover:border-b-2 hover:border-[#011B5B]`}
          onClick={() => handleSelect('email')}
          onMouseEnter={() => handleHover('email')}
          onMouseLeave={handleHoverLeave}
        >
          이메일 인증
        </button>
      </div>
    </nav>
  );
};

export default FindAuthNav;
