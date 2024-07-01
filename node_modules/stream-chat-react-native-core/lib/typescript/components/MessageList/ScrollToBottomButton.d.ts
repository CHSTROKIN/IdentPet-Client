import React from 'react';
import { GestureResponderEvent } from 'react-native';
export type ScrollToBottomButtonProps = {
    /** onPress handler */
    onPress: (event: GestureResponderEvent) => void;
    /** If we should show the notification or not */
    showNotification?: boolean;
    unreadCount?: number;
};
export declare const ScrollToBottomButton: {
    (props: ScrollToBottomButtonProps): React.JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=ScrollToBottomButton.d.ts.map