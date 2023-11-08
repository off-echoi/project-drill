import { LoaderIcon } from 'components';
import { styled } from 'styled-components';
import { getStyleBasedOnCondition } from 'styles/styledUtils';
import { theme } from 'styles/theme';

export interface BaseLoadingProps {
  loadingType: 'full' | 'content';
  width: number | string;
  height: number | string;
}

const StyledDiv = styled.div<BaseLoadingProps>`
  ${({ loadingType }) =>
    getStyleBasedOnCondition(
      loadingType === 'full',
      ` position: fixed;
        left: 0;
        right 0;
        top: 0;`,
      ``
    )}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xxl};
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  height: ${({ height }) => (typeof height === 'number' ? height + 'px' : height)};
  background: ${theme.color.white}60;
`;

const StyledSpinDiv = styled.div`
  animation: spin 1.5s 1s infinite ease-in-out;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const BaseLoading = ({ loadingType = 'content', width = '100%', height = 100 }: BaseLoadingProps) => {
  return (
    <StyledDiv loadingType={loadingType} width={width} height={height}>
      <StyledSpinDiv>
        <LoaderIcon size={50} color={theme.color.gray7} />
      </StyledSpinDiv>
    </StyledDiv>
  );
};
