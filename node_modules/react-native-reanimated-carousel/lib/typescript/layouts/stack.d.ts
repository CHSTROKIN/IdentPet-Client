import type { ViewStyle } from "react-native";
import type { IComputedDirectionTypes, CustomConfig } from "../types";
export interface ILayoutConfig {
    showLength?: number;
    moveSize?: number;
    stackInterval?: number;
    scaleInterval?: number;
    opacityInterval?: number;
    rotateZDeg?: number;
    snapDirection?: "left" | "right";
}
export declare type TStackModeProps = IComputedDirectionTypes<{
    /**
       * Carousel Animated transitions.
       */
    mode?: "horizontal-stack" | "vertical-stack";
    /**
       * Stack animation style.
       * @default
       *     mode: 'vertical',
       *     snapDirection: 'right',
       *     moveSize: window.width,
       *     stackInterval: 30,
       *     scaleInterval: 0.08,
       *     rotateZDeg: 135,
       */
    modeConfig?: ILayoutConfig;
}>;
export declare function horizontalStackLayout(modeConfig?: ILayoutConfig): (_value: number) => ViewStyle;
export declare function useHorizontalStackLayout(customAnimationConfig?: ILayoutConfig, customConfig?: CustomConfig): {
    layout: (_value: number) => ViewStyle;
    config: {
        type: string;
        viewCount: number | undefined;
    };
};
export declare function verticalStackLayout(modeConfig?: ILayoutConfig): (_value: number) => ViewStyle;
