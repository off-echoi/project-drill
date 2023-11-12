import { ReactNode } from 'react';

export type ExpendItemsType = string[];

export interface AccordionBaseProps {
  useMultipleExpanded?: boolean;
  controlledExpandedItems?: ExpendItemsType;
  initialExpandedItems?: ExpendItemsType;
  children: ReactNode;
}
