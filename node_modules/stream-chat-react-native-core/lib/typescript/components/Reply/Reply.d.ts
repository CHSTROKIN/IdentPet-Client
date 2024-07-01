import React from 'react';
import { ImageStyle, ViewStyle } from 'react-native';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type ReplyPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'quotedMessage'> & Pick<MessagesContextValue<StreamChatGenerics>, 'FileAttachmentIcon' | 'MessageAvatar'> & Pick<TranslationContextValue, 't'> & {
    attachmentSize?: number;
    styles?: Partial<{
        container: ViewStyle;
        fileAttachmentContainer: ViewStyle;
        imageAttachment: ImageStyle;
        messageContainer: ViewStyle;
        textContainer: ViewStyle;
    }>;
};
export type ReplyProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<ReplyPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for reply
 */
export declare const Reply: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<ReplyPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=Reply.d.ts.map