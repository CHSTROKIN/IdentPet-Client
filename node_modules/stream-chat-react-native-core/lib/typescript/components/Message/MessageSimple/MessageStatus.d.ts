import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageStatusPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'message' | 'threadList'>;
export type MessageStatusProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageStatusPropsWithContext<StreamChatGenerics>>;
export declare const MessageStatus: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageStatusPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageStatus.d.ts.map