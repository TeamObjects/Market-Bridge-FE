import Image from 'next/image';

import { ReactNode } from 'react';

interface GenericListItemProps {
  thumbnail?: string;
  buttons?: ReactNode;
  children?: ReactNode;
}

const GenericListItem = ({
  thumbnail,
  buttons,
  children,
}: GenericListItemProps) => {
  return (
    <div className="flex items-center">
      {thumbnail && (
        <Image
          src={thumbnail}
          width={60}
          height={78}
          alt="Thumbnail Image"
          className="rounded-[7px]"
        />
      )}
      {children}
      {buttons}
    </div>
  );
};

export default GenericListItem;
