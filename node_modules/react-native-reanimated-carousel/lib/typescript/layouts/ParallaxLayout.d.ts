import type { PropsWithChildren } from "react";
import React from "react";
import Animated from "react-native-reanimated";
import type { ILayoutConfig } from "./parallax";
import type { IVisibleRanges } from "../hooks/useVisibleRanges";
import type { IComputedDirectionTypes } from "../types";
export declare const ParallaxLayout: React.FC<PropsWithChildren<IComputedDirectionTypes<{
    loop?: boolean;
    handlerOffset: Animated.SharedValue<number>;
    index: number;
    dataLength: number;
    visibleRanges: IVisibleRanges;
} & ILayoutConfig>>>;
