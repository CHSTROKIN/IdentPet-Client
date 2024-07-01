import React from 'react';
import { MessageInputContextValue } from '../../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type AudioRecordingInProgressPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'AudioRecordingWaveform'> & {
    /**
     * The waveform data to be presented to show the audio levels.
     */
    waveformData: number[];
    /**
     * Maximum number of waveform lines that should be rendered in the UI.
     */
    maxDataPointsDrawn?: number;
    /**
     * The duration of the voice recording.
     */
    recordingDuration?: number;
};
export type AudioRecordingInProgressProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AudioRecordingInProgressPropsWithContext<StreamChatGenerics>> & {
    waveformData: number[];
};
/**
 * Component displayed when the audio is in the recording state.
 */
export declare const AudioRecordingInProgress: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AudioRecordingInProgressProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AudioRecordingInProgress.d.ts.map