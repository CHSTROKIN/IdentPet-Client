import React from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import type { Attachment, UserResponse } from 'stream-chat';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { KeyboardContextValue } from '../../contexts/keyboardContext/KeyboardContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessageOverlayContextValue } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
import { MessageType } from '../MessageList/hooks/useMessageList';
export type TouchableEmitter = 'fileAttachment' | 'gallery' | 'giphy' | 'message' | 'messageContent' | 'messageReplies' | 'reactionList';
export type TextMentionTouchableHandlerPayload<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    emitter: 'textMention';
    additionalInfo?: {
        user?: UserResponse<StreamChatGenerics>;
    };
};
export type UrlTouchableHandlerPayload = {
    emitter: 'textLink' | 'card';
    additionalInfo?: {
        url?: string;
    };
};
export type FileAttachmentTouchableHandlerPayload<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    emitter: 'fileAttachment';
    additionalInfo?: {
        attachment?: Attachment<StreamChatGenerics>;
    };
};
export type TouchableHandlerPayload = {
    defaultHandler?: () => void;
    event?: GestureResponderEvent;
} & ({
    emitter?: Exclude<TouchableEmitter, 'textMention' | 'textLink' | 'card' | 'fileAttachment'>;
} | TextMentionTouchableHandlerPayload | UrlTouchableHandlerPayload | FileAttachmentTouchableHandlerPayload);
export type MessageTouchableHandlerPayload<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = TouchableHandlerPayload & {
    /**
     * Set of action handler functions for various message actions. You can use these functions to perform any action when give interaction occurs.
     */
    actionHandlers?: MessageActionHandlers;
    /**
     * Additional message touchable handler info.
     */
    additionalInfo?: Record<string, unknown>;
    /**
     * Message object, on which interaction occurred.
     */
    message?: MessageType<StreamChatGenerics>;
};
export type MessageActionHandlers = {
    deleteMessage: () => Promise<void>;
    editMessage: () => void;
    pinMessage: () => Promise<void>;
    quotedReply: () => void;
    resendMessage: () => Promise<void>;
    showMessageOverlay: () => void;
    toggleBanUser: () => Promise<void>;
    toggleMuteUser: () => Promise<void>;
    toggleReaction: (reactionType: string) => Promise<void>;
};
export type MessagePropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'channel' | 'disabled' | 'enforceUniqueReaction' | 'members'> & Pick<KeyboardContextValue, 'dismissKeyboard'> & Partial<Omit<MessageContextValue<StreamChatGenerics>, 'groupStyles' | 'message'>> & Pick<MessageContextValue<StreamChatGenerics>, 'groupStyles' | 'message'> & Pick<MessagesContextValue<StreamChatGenerics>, 'sendReaction' | 'deleteMessage' | 'dismissKeyboardOnMessageTouch' | 'forceAlignMessages' | 'handleBlock' | 'handleCopy' | 'handleDelete' | 'handleEdit' | 'handleFlag' | 'handleMute' | 'handlePinMessage' | 'handleQuotedReply' | 'handleReaction' | 'handleRetry' | 'handleThreadReply' | 'isAttachmentEqual' | 'messageActions' | 'messageContentOrder' | 'MessageBounce' | 'MessageSimple' | 'onLongPressMessage' | 'onPressInMessage' | 'onPressMessage' | 'OverlayReactionList' | 'removeMessage' | 'deleteReaction' | 'retrySendMessage' | 'selectReaction' | 'setEditingState' | 'setQuotedMessageState' | 'supportedReactions' | 'updateMessage'> & Pick<MessageOverlayContextValue<StreamChatGenerics>, 'setData'> & Pick<OverlayContextValue, 'setOverlay'> & Pick<ThreadContextValue<StreamChatGenerics>, 'openThread'> & Pick<TranslationContextValue, 't'> & {
    chatContext: ChatContextValue<StreamChatGenerics>;
    messagesContext: MessagesContextValue<StreamChatGenerics>;
    /**
     * Whether or not users are able to long press messages.
     */
    enableLongPress?: boolean;
    goToMessage?: (messageId: string) => void;
    isTargetedMessage?: boolean;
    /**
     * Array of allowed actions or null on message, this can also be a function returning the array.
     * If all the actions need to be disabled an empty array should be provided as value of prop
     */
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/Message/Message.tsx)
     *
     * By default, we show the overlay with all the message actions on long press.
     *
     * @param message Message object which was long pressed
     * @param event   Event object for onLongPress event
     **/
    onLongPress?: (payload: Partial<MessageTouchableHandlerPayload<StreamChatGenerics>>) => void;
    /**
     * You can call methods available on the Message
     * component such as handleEdit, handleDelete, handleAction etc.
     *
     * Source - [Message](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/Message/Message.tsx)
     *
     * By default, we will dismiss the keyboard on press.
     *
     * @param message Message object which was long pressed
     * @param event   Event object for onLongPress event
     * */
    onPress?: (payload: Partial<MessageTouchableHandlerPayload<StreamChatGenerics>>) => void;
    onPressIn?: (payload: Partial<MessageTouchableHandlerPayload<StreamChatGenerics>>) => void;
    /**
     * Handler to open the thread on message. This is callback for touch event for replies button.
     *
     * @param message A message object to open the thread upon.
     */
    onThreadSelect?: (message: MessageType<StreamChatGenerics>) => void;
    showUnreadUnderlay?: boolean;
    style?: StyleProp<ViewStyle>;
};
export type MessageProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<MessagePropsWithContext<StreamChatGenerics>, 'groupStyles' | 'message'>> & Pick<MessagePropsWithContext<StreamChatGenerics>, 'groupStyles' | 'message'>;
/**
 * Message - A high level component which implements all the logic required for a message.
 * The actual rendering of the message is delegated via the "Message" property
 *
 * @example ./Message.md
 */
export declare const Message: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=Message.d.ts.map