import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BridgeLogo,
  Category,
  Mypage,
  ShoppingBasket,
} from '../../public/svgs';

const Header: React.FC = () => {
  return (
    <header className="flex w-[100%]">
      <div className="flex w-[15%] h-[10rem] justify-center items-center">
        <Image
          src={BridgeLogo}
          alt="브릿지로고"
          className="w-[10rem] h-[7rem]"
        />
      </div>
      <div className="flex w-[40%]">
        <div className="flex justify-center items-center cursor-pointer">
          <Image src={Category} alt="카테고리" />
          <Link href="/">카테코리</Link>
        </div>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          컬리추천
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          신상품
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          베스트
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          알뜰쇼핑
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center cursor-pointer"
        >
          특가/혜택
        </Link>
      </div>
      <div className="flex w-[20%]">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="flex border bg-[url('/public/svgs/magnifier.svg')]"
        />
      </div>
      <div className="flex w-[20%]">
        <Link href="/">회원가입</Link>
        <Link href="/">로그인</Link>
        <Link href="/">고객센터</Link>
        <Image src={Mypage} alt="마이페이지" className="w-[10rem] h-[7rem]" />
        <Image
          src={ShoppingBasket}
          alt="장바구니"
          className="w-[10rem] h-[7rem]"
        />
      </div>
    </header>
  );
};

export default Header;
