import { BaseLoading, BaseLoadingProps } from './BaseLoading';

export const ContentLoading = ({ width = '100%', height = 150 }: Partial<Pick<BaseLoadingProps, 'height' | 'width'>>) => {
  return <BaseLoading loadingType="content" width={width} height={height} />;
};
