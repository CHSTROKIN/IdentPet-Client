import React from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
export type GroupAvatarProps = {
    /** total size in pixels */
    size: number;
    containerStyle?: StyleProp<ViewStyle>;
    ImageComponent?: React.ComponentType<ImageProps>;
    /** image urls */
    images?: string[];
    /** name of the users, used for fallback */
    names?: string[];
    testID?: string;
};
/**
 * GroupAvatar - A round group of avatar images with fallbacks to users' initials
 */
export declare const GroupAvatar: {
    (props: GroupAvatarProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=GroupAvatar.d.ts.map