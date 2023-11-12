import { ReactHTML } from 'react';

interface GridProps {
  as: keyof ReactHTML;
}
export const Grid = ({ as }: GridProps) => {
  return <div>Grid</div>;
};
