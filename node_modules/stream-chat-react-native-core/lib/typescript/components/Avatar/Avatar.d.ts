import React from 'react';
import { ImageProps, ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { CircleProps } from 'react-native-svg';
export type AvatarProps = {
    /** size in pixels */
    size: number;
    containerStyle?: StyleProp<ViewStyle>;
    /** image url */
    image?: string;
    ImageComponent?: React.ComponentType<ImageProps>;
    /** name of the picture, used for fallback */
    imageStyle?: StyleProp<ImageStyle>;
    name?: string;
    online?: boolean;
    presenceIndicator?: CircleProps;
    presenceIndicatorContainerStyle?: StyleProp<ViewStyle>;
    testID?: string;
};
/**
 * Avatar - A round avatar image with fallback to user's initials.
 */
export declare const Avatar: {
    (props: AvatarProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Avatar.d.ts.map