import React from "react";
import type { ViewStyle } from "react-native";
import type { AnimatedStyleProp } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import type { IVisibleRanges } from "../hooks/useVisibleRanges";
export declare type TAnimationStyle = (value: number) => AnimatedStyleProp<ViewStyle>;
export declare const BaseLayout: React.FC<{
    index: number;
    handlerOffset: Animated.SharedValue<number>;
    visibleRanges: IVisibleRanges;
    animationStyle: TAnimationStyle;
    children: (ctx: {
        animationValue: Animated.SharedValue<number>;
    }) => React.ReactElement;
}>;
