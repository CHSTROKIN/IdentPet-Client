import type { ViewStyle } from 'react-native';
import type { TapGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import type { MessageActionListItemProps } from '../MessageActionListItem';
export declare const useMessageActionAnimation: ({ action, activeOpacity, }: Pick<MessageActionListItemProps, "action"> & {
    activeOpacity?: number | undefined;
}) => {
    animatedStyle: ViewStyle;
    onTap: (e: TapGestureHandlerStateChangeEvent) => void;
    opacity: import("react-native-reanimated").SharedValue<number>;
};
//# sourceMappingURL=useMessageActionAnimation.d.ts.map