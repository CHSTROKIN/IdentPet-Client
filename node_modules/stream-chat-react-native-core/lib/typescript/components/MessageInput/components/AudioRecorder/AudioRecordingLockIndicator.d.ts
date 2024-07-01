import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export type AudioRecordingLockIndicatorProps = {
    /**
     * Boolean used to show if the voice recording state is locked. This makes sure the mic button shouldn't be pressed any longer.
     * When the mic is locked the `AudioRecordingInProgress` component shows up.
     */
    micLocked: boolean;
    /**
     * Height of the message input, to apply necessary position adjustments to this component.
     */
    messageInputHeight?: number;
    /**
     * Styles of the lock indicator.
     */
    style?: StyleProp<ViewStyle>;
};
/**
 * Component displayed to show the lock state of the recording when the button is slided up.
 */
export declare const AudioRecordingLockIndicator: ({ messageInputHeight, micLocked, style, }: AudioRecordingLockIndicatorProps) => React.JSX.Element | null;
//# sourceMappingURL=AudioRecordingLockIndicator.d.ts.map