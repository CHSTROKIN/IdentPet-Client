import React from 'react';
import type { Attachment } from 'stream-chat';
import type { MessageStatusProps } from './MessageStatus';
import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import { Alignment } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { MessageType } from '../../MessageList/hooks/useMessageList';
type MessageFooterComponentProps = {
    date?: string | Date;
    formattedDate?: string | Date;
    isDeleted?: boolean;
};
export type MessageFooterProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<ChannelContextValue<StreamChatGenerics>, 'members'>> & MessageFooterComponentProps & {
    alignment?: Alignment;
    lastGroupMessage?: boolean;
    message?: MessageType<StreamChatGenerics>;
    MessageStatus?: React.ComponentType<MessageStatusProps<StreamChatGenerics>>;
    otherAttachments?: Attachment<StreamChatGenerics>[];
    showMessageStatus?: boolean;
};
export declare const MessageFooter: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageFooterProps<StreamChatGenerics>) => React.JSX.Element;
export {};
//# sourceMappingURL=MessageFooter.d.ts.map