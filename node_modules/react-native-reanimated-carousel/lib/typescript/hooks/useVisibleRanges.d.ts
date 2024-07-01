import type Animated from "react-native-reanimated";
export declare type IVisibleRanges = Animated.SharedValue<{
    negativeRange: number[];
    positiveRange: number[];
}>;
export declare function useVisibleRanges(options: {
    total: number;
    viewSize: number;
    windowSize?: number;
    translation: Animated.SharedValue<number>;
}): IVisibleRanges;
