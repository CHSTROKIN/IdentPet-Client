import React from 'react';
import { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageRepliesAvatarsProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'message'>;
export declare const MessageRepliesAvatarsWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageRepliesAvatarsProps<StreamChatGenerics> & Pick<ChatContextValue, "ImageComponent">) => React.JSX.Element;
export declare const MessageRepliesAvatars: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageRepliesAvatarsProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=MessageRepliesAvatars.d.ts.map