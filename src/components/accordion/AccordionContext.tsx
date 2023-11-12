import { createContext, useContext, useState } from 'react';
import { ExpendItemsType, AccordionBaseProps } from './accordionType';

export type AccordionContext = {
  expandedItems: ExpendItemsType;
  onToggleAccordion: (toggledItem: string, isExpanded?: boolean) => void;
};

export const Context = createContext<AccordionContext | null>(null);

export const AccordionProvider = ({ useMultipleExpanded = false, initialExpandedItems = [], children }: AccordionBaseProps) => {
  const [expandedItems, setExpandedItems] = useState<ExpendItemsType>(initialExpandedItems);

  const onToggleAccordion = (toggledItem: string, isExpanded?: boolean) => {
    if (!isExpanded) {
      useMultipleExpanded ? setExpandedItems(prevItems => [...prevItems, toggledItem]) : setExpandedItems([toggledItem]);
      return;
    } else {
      setExpandedItems(expandedItems.filter(expandedItem => expandedItem !== toggledItem));
    }
  };

  return (
    <Context.Provider
      value={{
        expandedItems,
        onToggleAccordion,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useAccordion = () => useContext(Context);
