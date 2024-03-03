'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  BridgeLogo,
  Category,
  Mypage,
  ShoppingBasket,
} from '../../../public/svgs';

const EXCLUSION_PATHS = [
  '/login',
  '/register',
  '/login/findId',
  '/login/findPassword',
  '/login/findPassword/changePassword',
];

const Header: React.FC = () => {
  const path = usePathname();

  if (EXCLUSION_PATHS.includes(path)) return null;

  return (
    <header className="flex flex-row w-[100%] h-[10rem] text-[1.6rem]">
      <div className="flex w-[25%] justify-center items-center">
        <Image
          src={BridgeLogo}
          alt="브릿지로고"
          className="w-[10rem] h-[7rem]"
        />
      </div>
      <div className="flex w-[30%]">
        <div className="flex justify-center items-center cursor-pointer flex-grow">
          <Image src={Category} alt="카테고리" />
          <p>카테코리</p>
        </div>
        <Link href="/" className="flex justify-center items-center flex-grow">
          컬리추천
        </Link>
        <Link href="/" className="flex justify-center items-center flex-grow">
          신상품
        </Link>
        <Link href="/" className="flex justify-center items-center flex-grow">
          베스트
        </Link>
        <Link href="/" className="flex justify-center items-center flex-grow">
          알뜰쇼핑
        </Link>
        <Link href="/" className="flex justify-center items-center flex-grow">
          특가/혜택
        </Link>
      </div>
      <div className="flex w-[20%] justify-center items-center">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="flex w-[90%] h-[40%] border border-[#03BAF2] rounded-full"
        />
      </div>
      <div className="flex w-[20%] justify-around items-center">
        <Link href="/register">회원가입</Link>
        <Link href="/login">로그인</Link>
        <Link href="/">고객센터</Link>
        <Image
          src={Mypage}
          alt="마이페이지"
          className="flex w-[3rem] h-[5rem]"
        />
        <Link href="/cart">
          <Image
            src={ShoppingBasket}
            alt="장바구니"
            className="flex w-[3rem] h-[5rem]"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
