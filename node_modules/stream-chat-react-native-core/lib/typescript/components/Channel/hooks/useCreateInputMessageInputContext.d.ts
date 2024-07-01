/// <reference types="react" />
import type { InputMessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateInputMessageInputContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ additionalTextInputProps, asyncMessagesLockDistance, asyncMessagesMinimumPressDuration, asyncMessagesMultiSendEnabled, asyncMessagesSlideToCancelDistance, AttachButton, AudioAttachmentUploadPreview, AudioRecorder, audioRecordingEnabled, AudioRecordingInProgress, AudioRecordingLockIndicator, AudioRecordingPreview, AudioRecordingWaveform, autoCompleteSuggestionsLimit, autoCompleteTriggerSettings, channelId, clearEditingState, clearQuotedMessageState, CommandsButton, compressImageQuality, CooldownTimer, disabled, doDocUploadRequest, doImageUploadRequest, editing, editMessage, emojiSearchIndex, FileUploadPreview, hasCommands, hasFilePicker, hasImagePicker, ImageUploadPreview, initialValue, Input, InputButtons, InputEditingStateHeader, InputGiphySearch, InputReplyStateHeader, maxMessageLength, maxNumberOfFiles, mentionAllAppUsersEnabled, mentionAllAppUsersQuery, MoreOptionsButton, numberOfLines, onChangeText, quotedMessage, SendButton, sendImageAsync, sendMessage, SendMessageDisallowedIndicator, setInputRef, setQuotedMessageState, ShowThreadMessageInChannelButton, StartAudioRecordingButton, UploadProgressIndicator, }: Pick<import("../../..").ChannelContextValue<StreamChatGenerics>, "disabled"> & {
    asyncMessagesLockDistance: number;
    asyncMessagesMinimumPressDuration: number;
    asyncMessagesMultiSendEnabled: boolean;
    asyncMessagesSlideToCancelDistance: number;
    AttachButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<StreamChatGenerics>, "disabled"> & {
        handleOnPress?: (((event: import("react-native/types").GestureResponderEvent) => void) & (() => void)) | undefined;
        selectedPicker?: "images" | undefined;
    }>>;
    AudioAttachmentUploadPreview: import("react").ComponentType<import("../..").AudioAttachmentProps>;
    AudioRecorder: import("react").ComponentType<import("../..").AudioRecorderProps<StreamChatGenerics>>;
    audioRecordingEnabled: boolean;
    AudioRecordingInProgress: import("react").ComponentType<import("../..").AudioRecordingInProgressProps>;
    AudioRecordingLockIndicator: import("react").ComponentType<import("../..").AudioRecordingLockIndicatorProps>;
    AudioRecordingPreview: import("react").ComponentType<import("../..").AudioRecordingPreviewProps>;
    AudioRecordingWaveform: import("react").ComponentType<import("../..").AudioRecordingWaveformProps>;
    clearEditingState: () => void;
    clearQuotedMessageState: () => void;
    CommandsButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<StreamChatGenerics>, "disabled"> & Pick<import("../../..").SuggestionsContextValue<StreamChatGenerics>, "suggestions"> & {
        handleOnPress?: (((event: import("react-native/types").GestureResponderEvent) => void) & (() => void)) | undefined;
    }>>;
    CooldownTimer: import("react").ComponentType<import("../..").CooldownTimerProps>;
    editMessage: (message: import("stream-chat").UpdatedMessage<StreamChatGenerics>, userId?: string | {
        id: string;
    } | undefined, options?: import("stream-chat").UpdateMessageOptions | undefined) => Promise<import("stream-chat").UpdateMessageAPIResponse<StreamChatGenerics>>;
    FileUploadPreview: import("react").ComponentType<Partial<Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<StreamChatGenerics>, "uploadFile" | "AudioAttachmentUploadPreview" | "fileUploads" | "removeFile" | "setFileUploads"> & Pick<import("../../..").MessagesContextValue<StreamChatGenerics>, "FileAttachmentIcon"> & Pick<import("../../..").ChatContextValue<StreamChatGenerics>, "enableOfflineSupport">>>;
    hasCommands: boolean;
    hasFilePicker: boolean;
    hasImagePicker: boolean;
    ImageUploadPreview: import("react").ComponentType<Partial<Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<StreamChatGenerics>, "imageUploads" | "removeImage" | "uploadImage"> & Pick<import("../../..").ChatContextValue<StreamChatGenerics>, "enableOfflineSupport">>>;
    InputEditingStateHeader: import("react").ComponentType<Partial<import("../../MessageInput/components/InputEditingStateHeader").InputEditingStateHeaderPropsWithContext<StreamChatGenerics>>>;
    InputGiphySearch: import("react").ComponentType<Partial<import("../../MessageInput/components/InputGiphySearch").InputGiphySearchPropsWithContext<StreamChatGenerics>>>;
    InputReplyStateHeader: import("react").ComponentType<Partial<import("../../MessageInput/components/InputReplyStateHeader").InputReplyStateHeaderPropsWithContext<StreamChatGenerics>>>;
    maxNumberOfFiles: number;
    MoreOptionsButton: import("react").ComponentType<Partial<Pick<import("../../..").ChannelContextValue<StreamChatGenerics>, "disabled"> & {
        handleOnPress?: (((event: import("react-native/types").GestureResponderEvent) => void) & (() => void)) | undefined;
    }>>;
    numberOfLines: number;
    quotedMessage: boolean | import("../..").MessageType<StreamChatGenerics>;
    SendButton: import("react").ComponentType<Partial<Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<StreamChatGenerics>, "sendMessage" | "giphyActive"> & {
        disabled: boolean;
    }>>;
    sendImageAsync: boolean;
    sendMessage: (message: Partial<import("stream-chat").Message<StreamChatGenerics>>) => Promise<void>;
    setQuotedMessageState: (message: import("../..").MessageType<StreamChatGenerics>) => void;
    ShowThreadMessageInChannelButton: import("react").ComponentType<{
        threadList?: boolean | undefined;
    }>;
    StartAudioRecordingButton: import("react").ComponentType<import("../..").AudioRecordingButtonProps<StreamChatGenerics>>;
    UploadProgressIndicator: import("react").ComponentType<import("../..").UploadProgressIndicatorProps>;
    additionalTextInputProps?: import("react-native/types").TextInputProps | undefined;
    autoCompleteSuggestionsLimit?: number | undefined;
    autoCompleteTriggerSettings?: ((settings: import("../../..").ACITriggerSettingsParams<StreamChatGenerics>) => import("../../..").TriggerSettings<StreamChatGenerics>) | undefined;
    compressImageQuality?: number | undefined;
    doDocUploadRequest?: ((file: import("../../../types/types").File, channel: import("stream-chat").Channel<StreamChatGenerics>) => Promise<import("stream-chat").SendFileAPIResponse>) | undefined;
    doImageUploadRequest?: ((file: {
        name?: string | undefined;
        uri?: string | undefined;
    }, channel: import("stream-chat").Channel<StreamChatGenerics>) => Promise<import("stream-chat").SendFileAPIResponse>) | undefined;
    editing?: import("../..").MessageType<StreamChatGenerics> | undefined;
    emojiSearchIndex?: import("../../../contexts/messageInputContext/MessageInputContext").EmojiSearchIndex | undefined;
    initialValue?: string | undefined;
    Input?: import("react").ComponentType<Omit<Partial<Pick<import("../../..").AttachmentPickerContextValue, "AttachmentPickerSelectionBar"> & Pick<import("../../..").ChatContextValue<StreamChatGenerics>, "isOnline"> & Pick<import("../../..").ChannelContextValue<StreamChatGenerics>, "disabled" | "members" | "watchers" | "threadList"> & Pick<import("../../../contexts/messageInputContext/MessageInputContext").MessageInputContextValue<StreamChatGenerics>, "text" | "maxNumberOfFiles" | "numberOfUploads" | "asyncMessagesLockDistance" | "asyncMessagesMinimumPressDuration" | "asyncMessagesSlideToCancelDistance" | "AudioRecorder" | "audioRecordingEnabled" | "AudioRecordingInProgress" | "AudioRecordingLockIndicator" | "AudioRecordingPreview" | "clearEditingState" | "clearQuotedMessageState" | "CooldownTimer" | "FileUploadPreview" | "ImageUploadPreview" | "InputEditingStateHeader" | "InputGiphySearch" | "InputReplyStateHeader" | "quotedMessage" | "SendButton" | "ShowThreadMessageInChannelButton" | "StartAudioRecordingButton" | "additionalTextInputProps" | "editing" | "Input" | "InputButtons" | "asyncIds" | "asyncUploads" | "closeAttachmentPicker" | "cooldownEndsAt" | "fileUploads" | "removeFile" | "giphyActive" | "imageUploads" | "removeImage" | "inputBoxRef" | "isValidMessage" | "mentionedUsers" | "resetInput" | "sending" | "sendMessageAsync" | "setShowMoreOptions" | "setGiphyActive" | "showMoreOptions" | "uploadNewFile" | "uploadNewImage"> & Pick<import("../../..").MessagesContextValue<StreamChatGenerics>, "Reply"> & Pick<import("../../..").SuggestionsContextValue<StreamChatGenerics>, "suggestions" | "AutoCompleteSuggestionHeader" | "AutoCompleteSuggestionItem" | "AutoCompleteSuggestionList" | "triggerType"> & Pick<import("../../..").ThreadContextValue<StreamChatGenerics>, "thread"> & Pick<import("../../..").TranslationContextValue, "t">>, "Input"> & Partial<import("../..").InputButtonsWithContextProps<StreamChatGenerics>> & {
        getUsers: () => import("stream-chat").UserResponse<StreamChatGenerics>[];
    }> | undefined;
    InputButtons?: import("react").ComponentType<Partial<import("../..").InputButtonsWithContextProps<StreamChatGenerics>>> | undefined;
    maxMessageLength?: number | undefined;
    mentionAllAppUsersEnabled?: boolean | undefined;
    mentionAllAppUsersQuery?: import("../../../contexts/messageInputContext/MessageInputContext").MentionAllAppUsersQuery<StreamChatGenerics> | undefined;
    onChangeText?: ((newText: string) => void) | undefined;
    SendMessageDisallowedIndicator?: import("react").ComponentType<{}> | undefined;
    setInputRef?: ((ref: import("react-native/types").TextInput | null) => void) | undefined;
} & {
    /**
     * To ensure we allow re-render, when channel is changed
     */
    channelId?: string | undefined;
}) => InputMessageInputContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreateInputMessageInputContext.d.ts.map