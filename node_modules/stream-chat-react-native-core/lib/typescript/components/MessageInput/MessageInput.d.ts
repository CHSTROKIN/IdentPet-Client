import React from 'react';
import { ChatContextValue } from '../../contexts';
import { AttachmentPickerContextValue } from '../../contexts/attachmentPickerContext/AttachmentPickerContext';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type MessageInputPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<AttachmentPickerContextValue, 'AttachmentPickerSelectionBar'> & Pick<ChatContextValue<StreamChatGenerics>, 'isOnline'> & Pick<ChannelContextValue<StreamChatGenerics>, 'disabled' | 'members' | 'threadList' | 'watchers'> & Pick<MessageInputContextValue<StreamChatGenerics>, 'additionalTextInputProps' | 'asyncIds' | 'audioRecordingEnabled' | 'asyncMessagesLockDistance' | 'asyncMessagesMinimumPressDuration' | 'asyncMessagesSlideToCancelDistance' | 'asyncUploads' | 'AudioRecorder' | 'AudioRecordingInProgress' | 'AudioRecordingLockIndicator' | 'AudioRecordingPreview' | 'cooldownEndsAt' | 'CooldownTimer' | 'clearEditingState' | 'clearQuotedMessageState' | 'closeAttachmentPicker' | 'editing' | 'FileUploadPreview' | 'fileUploads' | 'giphyActive' | 'ImageUploadPreview' | 'imageUploads' | 'Input' | 'inputBoxRef' | 'InputButtons' | 'InputEditingStateHeader' | 'InputGiphySearch' | 'InputReplyStateHeader' | 'isValidMessage' | 'maxNumberOfFiles' | 'mentionedUsers' | 'numberOfUploads' | 'quotedMessage' | 'resetInput' | 'SendButton' | 'sending' | 'sendMessageAsync' | 'setShowMoreOptions' | 'setGiphyActive' | 'showMoreOptions' | 'ShowThreadMessageInChannelButton' | 'StartAudioRecordingButton' | 'removeFile' | 'removeImage' | 'text' | 'uploadNewFile' | 'uploadNewImage'> & Pick<MessagesContextValue<StreamChatGenerics>, 'Reply'> & Pick<SuggestionsContextValue<StreamChatGenerics>, 'AutoCompleteSuggestionHeader' | 'AutoCompleteSuggestionItem' | 'AutoCompleteSuggestionList' | 'suggestions' | 'triggerType'> & Pick<ThreadContextValue<StreamChatGenerics>, 'thread'> & Pick<TranslationContextValue, 't'>;
export type MessageInputProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageInputPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for message input
 * It's a consumer of
 * [Channel Context](https://getstream.io/chat/docs/sdk/reactnative/contexts/channel-context/),
 * [Chat Context](https://getstream.io/chat/docs/sdk/reactnative/contexts/chat-context/),
 * [MessageInput Context](https://getstream.io/chat/docs/sdk/reactnative/contexts/message-input-context/),
 * [Suggestions Context](https://getstream.io/chat/docs/sdk/reactnative/contexts/suggestions-context/), and
 * [Translation Context](https://getstream.io/chat/docs/sdk/reactnative/contexts/translation-context/)
 */
export declare const MessageInput: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageInputPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=MessageInput.d.ts.map