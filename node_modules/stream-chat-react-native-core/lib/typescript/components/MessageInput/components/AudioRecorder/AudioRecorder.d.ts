import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ChannelContextValue } from '../../../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../../../contexts/messageInputContext/MessageInputContext';
import { AudioRecordingReturnType } from '../../../../native';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type AudioRecorderPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & Pick<MessageInputContextValue<StreamChatGenerics>, 'asyncMessagesMultiSendEnabled'> & {
    /**
     * Function to stop and delete the voice recording.
     */
    deleteVoiceRecording: () => Promise<void>;
    /**
     * Boolean used to show if the voice recording state is locked. This makes sure the mic button shouldn't be pressed any longer.
     * When the mic is locked the `AudioRecordingInProgress` component shows up.
     */
    micLocked: boolean;
    /**
     * The current voice recording that is in progress.
     */
    recording: AudioRecordingReturnType;
    /**
     * Boolean to determine if the recording has been stopped.
     */
    recordingStopped: boolean;
    /**
     * Function to stop the ongoing voice recording.
     */
    stopVoiceRecording: () => Promise<void>;
    /**
     * Function to upload the voice recording.
     */
    uploadVoiceRecording: (multiSendEnabled: boolean) => Promise<void>;
    /**
     * The duration of the voice recording.
     */
    recordingDuration?: number;
    /**
     * Style used in slide to cancel container.
     */
    slideToCancelStyle?: StyleProp<ViewStyle>;
};
export type AudioRecorderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AudioRecorderPropsWithContext<StreamChatGenerics>> & Pick<AudioRecorderPropsWithContext<StreamChatGenerics>, 'deleteVoiceRecording' | 'micLocked' | 'recording' | 'recordingStopped' | 'stopVoiceRecording' | 'uploadVoiceRecording'>;
/**
 * Component to display the Recording UI in the Message Input.
 */
export declare const AudioRecorder: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AudioRecorderProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AudioRecorder.d.ts.map