import React from 'react';
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Attachment } from 'stream-chat';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type CardPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Attachment<StreamChatGenerics> & Pick<ChatContextValue, 'ImageComponent'> & Pick<MessageContextValue<StreamChatGenerics>, 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'CardCover' | 'CardFooter' | 'CardHeader' | 'myMessageTheme'> & {
    channelId: string | undefined;
    messageId: string | undefined;
    styles?: Partial<{
        authorName: StyleProp<TextStyle>;
        authorNameContainer: StyleProp<ViewStyle>;
        authorNameFooter: StyleProp<TextStyle>;
        authorNameFooterContainer: StyleProp<ViewStyle>;
        authorNameMask: StyleProp<ViewStyle>;
        cardCover: StyleProp<ImageStyle>;
        cardFooter: StyleProp<ViewStyle>;
        container: StyleProp<ViewStyle>;
        description: StyleProp<TextStyle>;
        title: StyleProp<TextStyle>;
    }>;
};
export type CardProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Attachment<StreamChatGenerics> & Partial<Pick<ChatContextValue<StreamChatGenerics>, 'ImageComponent'> & Pick<MessageContextValue<StreamChatGenerics>, 'onLongPress' | 'onPress' | 'onPressIn' | 'myMessageTheme'> & Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'CardCover' | 'CardFooter' | 'CardHeader'>>;
/**
 * UI component for card in attachments.
 */
export declare const Card: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: CardProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Card.d.ts.map