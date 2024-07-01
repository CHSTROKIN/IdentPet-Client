import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { RenderTextParams } from './utils/renderText';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { MarkdownStyle, Theme } from '../../../contexts/themeContext/utils/theme';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageTextProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = MessageTextContainerProps<StreamChatGenerics> & {
    renderText: (params: RenderTextParams<StreamChatGenerics>) => JSX.Element | null;
    theme: {
        theme: Theme;
    };
};
export type MessageTextContainerPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'message' | 'onLongPress' | 'onlyEmojis' | 'onPress' | 'preventPress'> & Pick<MessagesContextValue<StreamChatGenerics>, 'markdownRules' | 'MessageText' | 'myMessageTheme'> & {
    markdownStyles?: MarkdownStyle;
    messageOverlay?: boolean;
    messageTextNumberOfLines?: number;
    styles?: Partial<{
        textContainer: StyleProp<ViewStyle>;
    }>;
};
export type MessageTextContainerProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageTextContainerPropsWithContext<StreamChatGenerics>>;
export declare const MessageTextContainer: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageTextContainerPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageTextContainer.d.ts.map