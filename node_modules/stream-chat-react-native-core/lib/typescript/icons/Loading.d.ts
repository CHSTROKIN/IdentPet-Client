import React from 'react';
import { StopProps } from 'react-native-svg';
import { IconProps } from './utils/base';
type LoadingProps = IconProps & Partial<Pick<StopProps, 'stopOpacity'>> & {
    startColor?: StopProps['stopColor'];
    stopColor?: StopProps['stopColor'];
};
export declare const Loading: (props: LoadingProps) => React.JSX.Element;
export {};
//# sourceMappingURL=Loading.d.ts.map