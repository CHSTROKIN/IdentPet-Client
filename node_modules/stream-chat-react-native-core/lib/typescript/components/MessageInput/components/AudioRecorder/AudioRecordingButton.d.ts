import React from 'react';
import { ChannelContextValue } from '../../../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../../../contexts/messageInputContext/MessageInputContext';
import { AudioRecordingReturnType } from '../../../../native';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type AudioRecordingButtonPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & Pick<MessageInputContextValue<StreamChatGenerics>, 'asyncMessagesMinimumPressDuration'> & {
    /**
     * The current voice recording that is in progress.
     */
    recording: AudioRecordingReturnType;
    /**
     * Size of the mic button.
     */
    buttonSize?: number;
    /**
     * Handler to determine what should happen on long press of the mic button.
     */
    handleLongPress?: () => void;
    /**
     * Handler to determine what should happen on press of the mic button.
     */
    handlePress?: () => void;
    /**
     * Boolean to determine if the audio recording permissions are granted.
     */
    permissionsGranted?: boolean;
    /**
     * Function to start the voice recording.
     */
    startVoiceRecording?: () => Promise<void>;
};
export type AudioRecordingButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AudioRecordingButtonPropsWithContext<StreamChatGenerics>> & {
    recording: AudioRecordingReturnType;
};
/**
 * Component to display the mic button on the Message Input.
 */
export declare const AudioRecordingButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AudioRecordingButtonProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AudioRecordingButton.d.ts.map