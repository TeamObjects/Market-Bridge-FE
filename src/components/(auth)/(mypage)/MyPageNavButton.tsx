'use client';

import { FaChevronRight } from 'react-icons/fa';

import Button from '@/components/shared/Button';

import { usePathname } from 'next/navigation';

interface Menu {
  id: number;
  title: string;
  path: string;
}

interface MyPageNavButtonProps {
  menu: Menu;
}

const STYLE_BUTTON_WHITE =
  'flex items-center w-[80%] h-[19px] text-[16px] text-left hover:text-[#03BAF2]';

const MyPageNavButton = ({ menu }: MyPageNavButtonProps) => {
  const path = usePathname();
  const isActive = path === `/mypage/${menu.path}`;

  return (
    <li className="flex justify-between items-center py-[15px] pl-[20px] pr-[13px] border-[1px] border-gray-100 cursor-pointer hover:bg-gray-50">
      <Button
        text={menu.title}
        style={`${STYLE_BUTTON_WHITE} ${isActive ? 'text-[#03BAF2]' : ''}`}
      />
      <FaChevronRight />
    </li>
  );
};

export default MyPageNavButton;
