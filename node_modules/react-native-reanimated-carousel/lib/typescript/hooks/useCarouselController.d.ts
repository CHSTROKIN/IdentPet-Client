import type Animated from "react-native-reanimated";
import type { TCarouselActionOptions, TCarouselProps } from "../types";
interface IOpts {
    loop: boolean;
    size: number;
    dataLength: number;
    autoFillData: TCarouselProps["autoFillData"];
    handlerOffset: Animated.SharedValue<number>;
    withAnimation?: TCarouselProps["withAnimation"];
    duration?: number;
    defaultIndex?: number;
    onScrollBegin?: () => void;
    onScrollEnd?: () => void;
}
export interface ICarouselController {
    getSharedIndex: () => number;
    prev: (opts?: TCarouselActionOptions) => void;
    next: (opts?: TCarouselActionOptions) => void;
    getCurrentIndex: () => number;
    scrollTo: (opts?: TCarouselActionOptions) => void;
}
export declare function useCarouselController(options: IOpts): ICarouselController;
export {};
