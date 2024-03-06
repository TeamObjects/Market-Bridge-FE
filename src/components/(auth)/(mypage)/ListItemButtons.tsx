import { ReactNode } from 'react';

interface ListItemButtonsProps {
  children?: ReactNode;
}

const ListItemButtons = ({ children }: ListItemButtonsProps) => {
  return <div>{children}</div>;
};

export default ListItemButtons;
