import { ICategory } from '@/interfaces/product';
import Link from 'next/link';

type Props = {
  depth3List: ICategory[] | undefined;
};

const depth3List = ['의류', '속옷/잠옷', '신발', '가방/잡화'];

export default function Depth3({ depth3List }: Props) {
  return (
    <ul className="flex flex-col gap-y-3 h-[100%] px-4 flex-1">
      {depth3List?.map((menu, idx) => (
        <li
          key={menu.categoryId}
          className="hover:text-sky-500 hover:flex hover:justify-between hover:font-bold transition-all duration-150  cursor-pointer"
        >
          <Link href={`/np/categories/${menu.categoryId}`}>
            <span>{menu.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
