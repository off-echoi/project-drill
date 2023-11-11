import { theme } from 'styles/theme';
import { ToggleInputProps } from './toggleInput';
import styled from 'styled-components';

export const StyledToggleInput = styled.div<ToggleInputProps>`
  cursor: pointer;
  label {
    position: relative;
    z-index: 1;
    padding-left: ${theme.spacing.xxl};
    display: block;
  }
  .icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -55%);
  }
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }
  &.active {
    label {
      color: ${theme.color.primary2};
    }
  }
`;
