import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageBouncePropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessagesContextValue<StreamChatGenerics>, 'setEditingState' | 'removeMessage' | 'retrySendMessage'> & Pick<MessageContextValue<StreamChatGenerics>, 'message'> & {
    setIsBounceDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const MessageBounceWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageBouncePropsWithContext<StreamChatGenerics>) => React.JSX.Element;
export type MessageBounceProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageBouncePropsWithContext<StreamChatGenerics>> & {
    setIsBounceDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const MessageBounce: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageBounceProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=MessageBounce.d.ts.map