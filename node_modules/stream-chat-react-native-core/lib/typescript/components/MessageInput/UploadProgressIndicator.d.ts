import React, { PropsWithChildren } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
export type UploadProgressIndicatorProps = {
    /** Action triggered when clicked indicator */
    action?: (event: GestureResponderEvent) => void;
    /** style */
    style?: StyleProp<ViewStyle>;
    /** Type of active indicator */
    type?: 'in_progress' | 'retry' | 'not_supported' | 'inactive' | null;
};
export declare const UploadProgressIndicator: {
    (props: PropsWithChildren<UploadProgressIndicatorProps>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=UploadProgressIndicator.d.ts.map