import Link from 'next/link';

type Props = {
  number: number;
};

const depth3List = ['의류', '속옷/잠옷', '신발', '가방/잡화'];

export default function Depth3({ number }: Props) {
  return (
    <ul className="flex flex-col gap-y-3 h-[100%] px-4 flex-1">
      {depth3List.map((menu, idx) => (
        <li
          key={menu}
          className="hover:text-sky-500 hover:flex hover:justify-between hover:font-bold transition-all duration-150  cursor-pointer"
        >
          <Link href={`/np/categories/${encodeURI(menu)}`}>
            <span>{menu}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
