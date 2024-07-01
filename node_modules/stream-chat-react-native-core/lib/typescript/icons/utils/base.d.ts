import React from 'react';
import { PathProps, SvgProps } from 'react-native-svg';
export type IconProps = Partial<SvgProps> & Omit<RootPathProps, 'd'> & {
    height?: number;
    width?: number;
};
export declare const RootSvg: (props: IconProps) => React.JSX.Element;
export type RootPathProps = Pick<PathProps, 'd'> & {
    pathFill?: SvgProps['fill'];
    pathOpacity?: PathProps['opacity'];
};
export declare const RootPath: (props: RootPathProps) => React.JSX.Element;
//# sourceMappingURL=base.d.ts.map