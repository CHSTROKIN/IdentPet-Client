import type { PanGestureHandlerGestureEvent, PinchGestureHandlerGestureEvent, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';
export declare enum HasPinched {
    FALSE = 0,
    TRUE = 1
}
export declare enum IsSwiping {
    UNDETERMINED = 0,
    TRUE = 1,
    FALSE = 2
}
export declare const useImageGalleryGestures: ({ currentImageHeight, halfScreenHeight, halfScreenWidth, headerFooterVisible, offsetScale, overlayOpacity, photoLength, scale, screenHeight, screenWidth, selectedIndex, setSelectedIndex, translateX, translateY, translationX, }: {
    currentImageHeight: number;
    halfScreenHeight: number;
    halfScreenWidth: number;
    headerFooterVisible: SharedValue<number>;
    offsetScale: SharedValue<number>;
    overlayOpacity: SharedValue<number>;
    photoLength: number;
    scale: SharedValue<number>;
    screenHeight: number;
    screenWidth: number;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    translateX: SharedValue<number>;
    translateY: SharedValue<number>;
    translationX: SharedValue<number>;
}) => {
    onDoubleTap: (e: TapGestureHandlerGestureEvent) => void;
    onPan: (e: PanGestureHandlerGestureEvent) => void;
    onPinch: (e: PinchGestureHandlerGestureEvent) => void;
    onSingleTap: (e: TapGestureHandlerGestureEvent) => void;
};
/**
 * Clamping worklet to clamp the scaling
 */
export declare const clamp: (value: number, lowerBound: number, upperBound: number) => number;
//# sourceMappingURL=useImageGalleryGestures.d.ts.map