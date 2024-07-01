import React from 'react';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessagePinnedHeaderPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'message'>;
export type MessagePinnedHeaderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessagePinnedHeaderPropsWithContext<StreamChatGenerics>>;
export declare const MessagePinnedHeader: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessagePinnedHeaderPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessagePinnedHeader.d.ts.map