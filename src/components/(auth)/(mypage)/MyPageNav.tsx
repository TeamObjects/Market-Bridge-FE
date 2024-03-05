import { FaChevronRight } from 'react-icons/fa';

import Button from '@/components/shared/Button';

import Link from 'next/link';

const STYLE_BUTTON_WHITE =
  'flex items-center w-[80%] h-[19px] text-[16px] text-left hover:text-[#03BAF2]';

const MY_PAGE_MENU = [
  { id: 1, title: '주문 내역', path: 'order' },
  { id: 2, title: '찜한 상품', path: 'pick-list' },
  { id: 3, title: '배송지 관리', path: 'address' },
  { id: 4, title: '상품 후기', path: 'review' },
  { id: 5, title: '개인 정보 수정', path: 'info' },
];

const MyPageNav = () => {
  return (
    <nav className="w-[200px]">
      <h1 className="text-[28px] pt-[5px] pb-[35px]">마이브릿지</h1>
      <ul className="flex flex-col">
        {MY_PAGE_MENU.map((menu) => (
          <Link href={`/mypage/${menu.path}`} key={menu.id}>
            <li className="flex justify-between items-center py-[15px] pl-[20px] pr-[13px] border-[1px] border-gray-100 cursor-pointer hover:bg-gray-50">
              <Button text={menu.title} style={STYLE_BUTTON_WHITE} />
              <FaChevronRight />
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyPageNav;
