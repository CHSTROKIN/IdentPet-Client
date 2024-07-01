import React from 'react';
import { DefaultRules, ReactOutput, SingleASTNode, State } from 'simple-markdown';
import type { MessageContextValue } from '../../../../contexts/messageContext/MessageContext';
import type { Colors, MarkdownStyle } from '../../../../contexts/themeContext/utils/theme';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
import type { MessageType } from '../../../MessageList/hooks/useMessageList';
export type MarkdownRules = Partial<DefaultRules>;
export type RenderTextParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<MessageContextValue<StreamChatGenerics>, 'onLongPress' | 'onPress' | 'preventPress'>> & {
    colors: typeof Colors;
    message: MessageType<StreamChatGenerics>;
    markdownRules?: MarkdownRules;
    markdownStyles?: MarkdownStyle;
    messageOverlay?: boolean;
    messageTextNumberOfLines?: number;
    onLink?: (url: string) => Promise<void>;
    onlyEmojis?: boolean;
};
export declare const renderText: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: RenderTextParams<StreamChatGenerics>) => React.JSX.Element;
export interface ListOutputProps {
    node: SingleASTNode;
    output: ReactOutput;
    state: State;
    styles?: Partial<MarkdownStyle>;
}
/**
 * For lists and sublists, the default behavior of the markdown library we use is
 * to always renumber any list, so all ordered lists start from 1.
 *
 * This custom rule overrides this behavior both for top level lists and sublists,
 * in order to start the numbering from the number of the first list item provided.
 */
export declare const ListOutput: ({ node, output, state, styles }: ListOutputProps) => React.JSX.Element;
//# sourceMappingURL=renderText.d.ts.map