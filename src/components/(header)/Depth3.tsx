type Props = {
  number: number;
};

export default function Depth3({ number }: Props) {
  return (
    <ul className="flex flex-col gap-y-3 h-[100%] px-4 flex-1">
      <li>의류</li>
      <li>속옷/잠옷</li>
      <li>신발</li>
      <li>가방/잡화</li>
    </ul>
  );
}
