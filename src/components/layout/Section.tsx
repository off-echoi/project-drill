import { SpacingType } from 'components/varient';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface SectionProps {
  marginX?: SpacingType;
  marginY?: SpacingType;
  paddingX?: SpacingType;
  paddingY?: SpacingType;
}
const StyledSection = styled.section<SectionProps>`
  margin: ${({ marginX, marginY }) => `${marginY} ${marginX}`};
`;
export const Section = ({ marginX = theme.spacing.xl, marginY = theme.spacing.xl, paddingX = theme.spacing.xl, paddingY = theme.spacing.xl }) => {
  return <StyledSection>Section</StyledSection>;
};
