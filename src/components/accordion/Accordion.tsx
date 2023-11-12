import { styled } from 'styled-components';
import { AccordionContext, AccordionProvider, useAccordion } from './AccordionContext';
import { AccordionBaseProps } from './accordionType';
import { ReactNode } from 'react';
import { ArrowIcon, IconButton, Typography } from 'components';
import { theme } from 'styles/theme';

interface AccordionProps extends AccordionBaseProps {
  className?: string;
}
export const Accordion = ({ useMultipleExpanded = true, initialExpandedItems = [], children, className = '' }: AccordionProps) => {
  return (
    <AccordionProvider useMultipleExpanded={useMultipleExpanded} initialExpandedItems={initialExpandedItems}>
      <div className={className}>{children}</div>
    </AccordionProvider>
  );
};

interface AccordionItemProps {
  title: ReactNode;
  accordionId: string;
  children: ReactNode;
}

const StyledAccordionItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.color.gray8};
  .accordion_title {
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing.md};
    cursor: pointer;
    button {
      flex-shrink: 0;
    }
  }
  &.open {
    .accordion_content {
      grid-template-rows: 1fr;
      padding-bottom: ${theme.spacing.lg};
    }
  }
`;

export const AccordionItem = ({ title, accordionId = '1', children }: AccordionItemProps) => {
  const accordionContext = useAccordion();
  const { expandedItems, onToggleAccordion } = accordionContext as AccordionContext;
  const isExpanded = expandedItems ? expandedItems.includes(accordionId) : false;

  return (
    <StyledAccordionItem className={isExpanded ? 'open' : ''} onClick={() => onToggleAccordion(accordionId, isExpanded)}>
      <div className="accordion_title">
        <Typography typotype="sub2">{title}</Typography>
        <IconButton icon={<ArrowIcon direction={isExpanded ? 'top' : 'down'} />} label={{ title } + '내용 보기'} />
      </div>

      {children}
    </StyledAccordionItem>
  );
};

const StyledAccordionContent = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: all 0.2s;
  padding-left: ${theme.spacing.lg};
  padding-right: ${theme.spacing.lg};
  div {
    overflow: hidden;
  }
`;

export const AccordionContent = ({ children }: { children: ReactNode }) => {
  return (
    <StyledAccordionContent className="accordion_content">
      <div>{children}</div>
    </StyledAccordionContent>
  );
};
