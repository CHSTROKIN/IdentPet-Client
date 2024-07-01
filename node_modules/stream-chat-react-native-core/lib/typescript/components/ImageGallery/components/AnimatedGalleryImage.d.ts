import React from 'react';
import type { ImageStyle, StyleProp } from 'react-native';
import Animated from 'react-native-reanimated';
type Props = {
    accessibilityLabel: string;
    index: number;
    offsetScale: Animated.SharedValue<number>;
    photo: {
        uri: string;
    };
    previous: boolean;
    scale: Animated.SharedValue<number>;
    screenHeight: number;
    selected: boolean;
    shouldRender: boolean;
    translateX: Animated.SharedValue<number>;
    translateY: Animated.SharedValue<number>;
    style?: StyleProp<ImageStyle>;
};
export declare const AnimatedGalleryImage: React.MemoExoticComponent<(props: Props) => React.JSX.Element>;
export {};
//# sourceMappingURL=AnimatedGalleryImage.d.ts.map