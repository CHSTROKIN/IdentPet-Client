import type { LegacyRef } from 'react';
import React, { PropsWithChildren } from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { Attachment, Message, SendFileAPIResponse, StreamChat, Message as StreamMessage, UserFilters, UserOptions, UserResponse, UserSort } from 'stream-chat';
import { AudioAttachmentProps } from '../../components/Attachment/AudioAttachment';
import type { AttachButtonProps } from '../../components/MessageInput/AttachButton';
import type { CommandsButtonProps } from '../../components/MessageInput/CommandsButton';
import type { AudioRecorderProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecorder';
import type { AudioRecordingButtonProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecordingButton';
import type { AudioRecordingInProgressProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecordingInProgress';
import type { AudioRecordingLockIndicatorProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecordingLockIndicator';
import type { AudioRecordingPreviewProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecordingPreview';
import type { AudioRecordingWaveformProps } from '../../components/MessageInput/components/AudioRecorder/AudioRecordingWaveform';
import type { InputEditingStateHeaderProps } from '../../components/MessageInput/components/InputEditingStateHeader';
import type { InputGiphySearchProps } from '../../components/MessageInput/components/InputGiphySearch';
import type { InputReplyStateHeaderProps } from '../../components/MessageInput/components/InputReplyStateHeader';
import type { CooldownTimerProps } from '../../components/MessageInput/CooldownTimer';
import type { FileUploadPreviewProps } from '../../components/MessageInput/FileUploadPreview';
import type { ImageUploadPreviewProps } from '../../components/MessageInput/ImageUploadPreview';
import type { InputButtonsProps } from '../../components/MessageInput/InputButtons';
import type { MessageInputProps } from '../../components/MessageInput/MessageInput';
import type { MoreOptionsButtonProps } from '../../components/MessageInput/MoreOptionsButton';
import type { SendButtonProps } from '../../components/MessageInput/SendButton';
import type { UploadProgressIndicatorProps } from '../../components/MessageInput/UploadProgressIndicator';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { Emoji } from '../../emoji-data';
import type { Asset, DefaultStreamChatGenerics, File, FileUpload, ImageUpload, UnknownType } from '../../types/types';
import { ACITriggerSettingsParams, TriggerSettings } from '../../utils/utils';
import { ChannelContextValue } from '../channelContext/ChannelContext';
export type EmojiSearchIndex = {
    search: (query: string) => PromiseLike<Array<Emoji>> | Array<Emoji> | null;
};
export type MentionAllAppUsersQuery<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    filters?: UserFilters<StreamChatGenerics>;
    options?: UserOptions;
    sort?: UserSort<StreamChatGenerics>;
};
export type LocalMessageInputContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    appendText: (newText: string) => void;
    asyncIds: string[];
    asyncUploads: {
        [key: string]: {
            state: string;
            url: string;
        };
    };
    closeAttachmentPicker: () => void;
    /** The time at which the active cooldown will end */
    cooldownEndsAt: Date;
    /**
     * An array of file objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *      "url": "https://url1.com",
     *    },
     *  ]
     * ```
     *
     */
    fileUploads: FileUpload[];
    giphyActive: boolean;
    /**
     * An array of image objects which are set for upload. It has the following structure:
     *
     * ```json
     *  [
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_1",
     *      "state": "uploading" // or "finished",
     *    },
     *    {
     *      "file": // File object,
     *      "id": "randomly_generated_temp_id_2",
     *      "state": "uploading" // or "finished",
     *    },
     *  ]
     * ```
     *
     */
    imageUploads: ImageUpload[];
    inputBoxRef: React.MutableRefObject<TextInput | null>;
    isValidMessage: () => boolean;
    mentionedUsers: string[];
    numberOfUploads: number;
    onChange: (newText: string) => void;
    onSelectItem: (item: UserResponse<StreamChatGenerics>) => void;
    openAttachmentPicker: () => void;
    openCommandsPicker: () => void;
    openFilePicker: () => void;
    openMentionsPicker: () => void;
    pickFile: () => Promise<void>;
    /**
     * Function for removing a file from the upload preview
     *
     * @param id string ID of file in `fileUploads` object in state of MessageInput
     */
    removeFile: (id: string) => void;
    /**
     * Function for removing an image from the upload preview
     *
     * @param id string ID of image in `imageUploads` object in state of MessageInput
     */
    removeImage: (id: string) => void;
    resetInput: (pendingAttachments?: Attachment<StreamChatGenerics>[]) => void;
    selectedPicker: string | undefined;
    sending: React.MutableRefObject<boolean>;
    sendMessage: (params?: {
        customMessageData?: Partial<Message<StreamChatGenerics>>;
    }) => Promise<void>;
    sendMessageAsync: (id: string) => void;
    sendThreadMessageInChannel: boolean;
    setAsyncIds: React.Dispatch<React.SetStateAction<string[]>>;
    setAsyncUploads: React.Dispatch<React.SetStateAction<{
        [key: string]: {
            state: string;
            url: string;
        };
    }>>;
    setFileUploads: React.Dispatch<React.SetStateAction<FileUpload[]>>;
    setGiphyActive: React.Dispatch<React.SetStateAction<boolean>>;
    setImageUploads: React.Dispatch<React.SetStateAction<ImageUpload[]>>;
    /**
     * Ref callback to set reference on input box
     */
    setInputBoxRef: LegacyRef<TextInput> | undefined;
    setMentionedUsers: React.Dispatch<React.SetStateAction<string[]>>;
    setNumberOfUploads: React.Dispatch<React.SetStateAction<number>>;
    setSendThreadMessageInChannel: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMoreOptions: React.Dispatch<React.SetStateAction<boolean>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
    showMoreOptions: boolean;
    text: string;
    toggleAttachmentPicker: () => void;
    /**
     * Mapping of input triggers to the outputs to be displayed by the AutoCompleteInput
     */
    triggerSettings: TriggerSettings<StreamChatGenerics>;
    updateMessage: () => Promise<void>;
    /** Function for attempting to upload a file */
    uploadFile: ({ newFile }: {
        newFile: FileUpload;
    }) => Promise<void>;
    /** Function for attempting to upload an image */
    uploadImage: ({ newImage }: {
        newImage: ImageUpload;
    }) => Promise<void>;
    uploadNewFile: (file: File) => Promise<void>;
    uploadNewImage: (image: Partial<Asset>) => Promise<void>;
};
export type InputMessageInputContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & {
    /**
     * Controls how many pixels to the top side the user has to scroll in order to lock the recording view and allow the user to lift their finger from the screen without stopping the recording.
     */
    asyncMessagesLockDistance: number;
    /**
     * Controls the minimum duration that the user has to press on the record button in the composer, in order to start recording a new voice message.
     */
    asyncMessagesMinimumPressDuration: number;
    /**
     * When it’s enabled, recorded messages won’t be sent immediately. Instead they will “stack up” in the composer allowing the user to send multiple voice recording as part of the same message.
     */
    asyncMessagesMultiSendEnabled: boolean;
    /**
     * Controls how many pixels to the leading side the user has to scroll in order to cancel the recording of a voice message.
     */
    asyncMessagesSlideToCancelDistance: number;
    /**
     * Custom UI component for attach button.
     *
     * Defaults to and accepts same props as: [AttachButton](https://getstream.io/chat/docs/sdk/reactnative/ui-components/attach-button/)
     */
    AttachButton: React.ComponentType<AttachButtonProps<StreamChatGenerics>>;
    /**
     * Custom UI component for audio attachment upload preview.
     *
     * Defaults to and accepts same props as: [AudioAttachmentUploadPreview](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/Attachment/AudioAttachment.tsx)
     */
    AudioAttachmentUploadPreview: React.ComponentType<AudioAttachmentProps>;
    /**
     * Custom UI component for audio recorder UI.
     *
     * Defaults to and accepts same props as: [AudioRecorder](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/AudioRecorder.tsx)
     */
    AudioRecorder: React.ComponentType<AudioRecorderProps<StreamChatGenerics>>;
    /**
     * Controls whether the async audio feature is enabled.
     */
    audioRecordingEnabled: boolean;
    /**
     * Custom UI component to render audio recording in progress.
     *
     * **Default** [AudioRecordingInProgress](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingInProgress.tsx)
     */
    AudioRecordingInProgress: React.ComponentType<AudioRecordingInProgressProps>;
    /**
     * Custom UI component for audio recording lock indicator.
     *
     * Defaults to and accepts same props as: [AudioRecordingLockIndicator](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingLockIndicator.tsx)
     */
    AudioRecordingLockIndicator: React.ComponentType<AudioRecordingLockIndicatorProps>;
    /**
     * Custom UI component to render audio recording preview.
     *
     * **Default** [AudioRecordingPreview](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingPreview.tsx)
     */
    AudioRecordingPreview: React.ComponentType<AudioRecordingPreviewProps>;
    /**
     * Custom UI component to render audio recording waveform.
     *
     * **Default** [AudioRecordingWaveform](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingWaveform.tsx)
     */
    AudioRecordingWaveform: React.ComponentType<AudioRecordingWaveformProps>;
    clearEditingState: () => void;
    clearQuotedMessageState: () => void;
    /**
     * Custom UI component for commands button.
     *
     * Defaults to and accepts same props as: [CommandsButton](https://getstream.io/chat/docs/sdk/reactnative/ui-components/commands-button/)
     */
    CommandsButton: React.ComponentType<CommandsButtonProps<StreamChatGenerics>>;
    /**
     * Custom UI component to display the remaining cooldown a user will have to wait before
     * being allowed to send another message. This component is displayed in place of the
     * send button for the MessageInput component.
     *
     * **default** [CooldownTimer](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/CooldownTimer.tsx)
     */
    CooldownTimer: React.ComponentType<CooldownTimerProps>;
    editMessage: StreamChat<StreamChatGenerics>['updateMessage'];
    /**
     * Custom UI component for FileUploadPreview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/FileUploadPreview.tsx
     */
    FileUploadPreview: React.ComponentType<FileUploadPreviewProps<StreamChatGenerics>>;
    /** When false, CommandsButton will be hidden */
    hasCommands: boolean;
    /** When false, FileSelectorIcon will be hidden */
    hasFilePicker: boolean;
    /** When false, ImageSelectorIcon will be hidden */
    hasImagePicker: boolean;
    /**
     * Custom UI component for ImageUploadPreview.
     * Defaults to and accepts same props as: https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/ImageUploadPreview.tsx
     */
    ImageUploadPreview: React.ComponentType<ImageUploadPreviewProps<StreamChatGenerics>>;
    InputEditingStateHeader: React.ComponentType<InputEditingStateHeaderProps<StreamChatGenerics>>;
    InputGiphySearch: React.ComponentType<InputGiphySearchProps<StreamChatGenerics>>;
    InputReplyStateHeader: React.ComponentType<InputReplyStateHeaderProps<StreamChatGenerics>>;
    /** Limit on allowed number of files to attach at a time. */
    maxNumberOfFiles: number;
    /**
     * Custom UI component for more options button.
     *
     * Defaults to and accepts same props as: [MoreOptionsButton](https://getstream.io/chat/docs/sdk/reactnative/ui-components/more-options-button/)
     */
    MoreOptionsButton: React.ComponentType<MoreOptionsButtonProps<StreamChatGenerics>>;
    /** Limit on the number of lines in the text input before scrolling */
    numberOfLines: number;
    quotedMessage: boolean | MessageType<StreamChatGenerics>;
    /**
     * Custom UI component for send button.
     *
     * Defaults to and accepts same props as: [SendButton](https://getstream.io/chat/docs/sdk/reactnative/ui-components/send-button/)
     */
    SendButton: React.ComponentType<SendButtonProps<StreamChatGenerics>>;
    sendImageAsync: boolean;
    sendMessage: (message: Partial<StreamMessage<StreamChatGenerics>>) => Promise<void>;
    setQuotedMessageState: (message: MessageType<StreamChatGenerics>) => void;
    /**
     * Custom UI component to render checkbox with text ("Also send to channel") in Thread's input box.
     * When ticked, message will also be sent in parent channel.
     */
    ShowThreadMessageInChannelButton: React.ComponentType<{
        threadList?: boolean;
    }>;
    /**
     * Custom UI component for audio recording mic button.
     *
     * Defaults to and accepts same props as: [AudioRecordingButton](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingButton.tsx)
     */
    StartAudioRecordingButton: React.ComponentType<AudioRecordingButtonProps<StreamChatGenerics>>;
    /**
     * Custom UI component to render upload progress indicator on attachment preview.
     *
     * **Default** [UploadProgressIndicator](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/UploadProgressIndicator.tsx)
     */
    UploadProgressIndicator: React.ComponentType<UploadProgressIndicatorProps>;
    /**
     * Additional props for underlying TextInput component. These props will be forwarded as it is to TextInput component.
     *
     * @see See https://reactnative.dev/docs/textinput#reference
     */
    additionalTextInputProps?: TextInputProps;
    /** Max number of suggestions to display in autocomplete list. Defaults to 10. */
    autoCompleteSuggestionsLimit?: number;
    /**
     * Mapping of input triggers to the outputs to be displayed by the AutoCompleteInput
     */
    autoCompleteTriggerSettings?: (settings: ACITriggerSettingsParams<StreamChatGenerics>) => TriggerSettings<StreamChatGenerics>;
    /**
     * Compress image with quality (from 0 to 1, where 1 is best quality).
     * On iOS, values larger than 0.8 don't produce a noticeable quality increase in most images,
     * while a value of 0.8 will reduce the file size by about half or less compared to a value of 1.
     * Image picker defaults to 0.8 for iOS and 1 for Android
     */
    compressImageQuality?: number;
    /**
     * Override file upload request
     *
     * @param file    File object - { uri: '', name: '' }
     * @param channel Current channel object
     *
     * @overrideType Function
     */
    doDocUploadRequest?: (file: File, channel: ChannelContextValue<StreamChatGenerics>['channel']) => Promise<SendFileAPIResponse>;
    /**
     * Override image upload request
     *
     * @param file    File object - { uri: '' }
     * @param channel Current channel object
     *
     * @overrideType Function
     */
    doImageUploadRequest?: (file: {
        name?: string;
        uri?: string;
    }, channel: ChannelContextValue<StreamChatGenerics>['channel']) => Promise<SendFileAPIResponse>;
    /**
     * Variable that tracks the editing state.
     * It is defined with message type if the editing state is true, else its undefined.
     */
    editing?: MessageType<StreamChatGenerics>;
    /**
     * Prop to override the default emoji search index in auto complete suggestion list.
     */
    emojiSearchIndex?: EmojiSearchIndex;
    /** Initial value to set on input */
    initialValue?: string;
    /**
     * Custom UI component for AutoCompleteInput.
     * Has access to all of [MessageInputContext](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/contexts/messageInputContext/MessageInputContext.tsx)
     */
    Input?: React.ComponentType<Omit<MessageInputProps<StreamChatGenerics>, 'Input'> & InputButtonsProps<StreamChatGenerics> & {
        getUsers: () => UserResponse<StreamChatGenerics>[];
    }>;
    /**
     * Custom UI component to override buttons on left side of input box
     * Defaults to [InputButtons](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/MessageInput/InputButtons.tsx),
     * which contain following components/buttons:
     *
     *  - AttachButton
     *  - CommandsButtom
     *
     * You have access to following prop functions:
     *
     * - closeAttachmentPicker
     * - openAttachmentPicker
     * - openCommandsPicker
     * - toggleAttachmentPicker
     */
    InputButtons?: React.ComponentType<InputButtonsProps<StreamChatGenerics>>;
    maxMessageLength?: number;
    mentionAllAppUsersEnabled?: boolean;
    /** Object containing filters/sort/options overrides for an @mention user query */
    mentionAllAppUsersQuery?: MentionAllAppUsersQuery<StreamChatGenerics>;
    /**
     * Callback that is called when the text input's text changes. Changed text is passed as a single string argument to the callback handler.
     */
    onChangeText?: (newText: string) => void;
    SendMessageDisallowedIndicator?: React.ComponentType;
    /**
     * ref for input setter function
     *
     * @param ref [Ref object](https://reactjs.org/docs/refs-and-the-dom.html) for underling `TextInput` component.
     *
     * @overrideType Function
     */
    setInputRef?: (ref: TextInput | null) => void;
};
export type MessageInputContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = LocalMessageInputContext<StreamChatGenerics> & Omit<InputMessageInputContextValue<StreamChatGenerics>, 'sendMessage'>;
export declare const MessageInputContext: React.Context<MessageInputContextValue<DefaultStreamChatGenerics>>;
export declare const MessageInputProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value: InputMessageInputContextValue<StreamChatGenerics>;
}>) => React.JSX.Element;
export declare const useMessageInputContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => MessageInputContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withMessageInputContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withMessageInputContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, "disabled" | "numberOfLines" | "maxNumberOfFiles" | "compressImageQuality" | "setQuotedMessageState" | "asyncMessagesLockDistance" | "asyncMessagesMinimumPressDuration" | "asyncMessagesMultiSendEnabled" | "asyncMessagesSlideToCancelDistance" | "AttachButton" | "AudioAttachmentUploadPreview" | "AudioRecorder" | "audioRecordingEnabled" | "AudioRecordingInProgress" | "AudioRecordingLockIndicator" | "AudioRecordingPreview" | "AudioRecordingWaveform" | "clearEditingState" | "clearQuotedMessageState" | "CommandsButton" | "CooldownTimer" | "editMessage" | "FileUploadPreview" | "hasCommands" | "hasFilePicker" | "hasImagePicker" | "ImageUploadPreview" | "InputEditingStateHeader" | "InputGiphySearch" | "InputReplyStateHeader" | "MoreOptionsButton" | "quotedMessage" | "SendButton" | "sendImageAsync" | "ShowThreadMessageInChannelButton" | "StartAudioRecordingButton" | "UploadProgressIndicator" | "additionalTextInputProps" | "autoCompleteSuggestionsLimit" | "autoCompleteTriggerSettings" | "doDocUploadRequest" | "doImageUploadRequest" | "editing" | "emojiSearchIndex" | "initialValue" | "Input" | "InputButtons" | "maxMessageLength" | "mentionAllAppUsersEnabled" | "mentionAllAppUsersQuery" | "onChangeText" | "SendMessageDisallowedIndicator" | "setInputRef" | keyof LocalMessageInputContext<StreamChatGenerics>>>;
//# sourceMappingURL=MessageInputContext.d.ts.map