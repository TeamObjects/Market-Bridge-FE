import { ArrowRight } from '@/../public/svgs';
import Image from 'next/image';

type Props = {
  categories: string[];
};

const Header = ({ categories }: Props) => {
  return (
    <>
      <div className="header w-3/4 flex gap-2 pb-4 border-b">
        {categories.map((item, idx) => {
          return (
            <div key={idx} className="flex">
              {idx !== 0 && (
                <div className="right-arrow">
                  <Image
                    className="w-6 h-6"
                    src={ArrowRight}
                    alt="right-arrow"
                  />
                </div>
              )}
              <div className="category cursor-pointer hover:underline">
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Header;
