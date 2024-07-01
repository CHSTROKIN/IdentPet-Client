import React from 'react';
import { MessageContextValue, Reactions } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { ReactionData } from '../../../utils/utils';
export type MessageReactions = {
    reactions: Reactions;
    supportedReactions?: ReactionData[];
};
export type ReactionListPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'message' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress' | 'reactions' | 'showMessageOverlay'> & Pick<MessagesContextValue<StreamChatGenerics>, 'targetedMessage'> & {
    messageContentWidth: number;
    supportedReactions: ReactionData[];
    fill?: string;
    radius?: number;
    reactionSize?: number;
    stroke?: string;
    strokeSize?: number;
};
export type ReactionListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<ReactionListPropsWithContext<StreamChatGenerics>, 'messageContentWidth'>> & Pick<ReactionListPropsWithContext<StreamChatGenerics>, 'messageContentWidth'>;
/**
 * ReactionList - A high level component which implements all the logic required for a message reaction list
 */
export declare const ReactionList: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ReactionListProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ReactionList.d.ts.map