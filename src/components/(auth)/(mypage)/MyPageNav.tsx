import MyPageNavButton from '@/components/(auth)/(mypage)/MyPageNavButton';

import Link from 'next/link';

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
            <MyPageNavButton menu={menu} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyPageNav;
