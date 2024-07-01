import React from 'react';
import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type InputReplyStateHeaderPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'clearQuotedMessageState' | 'resetInput'> & Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'>;
export declare const InputReplyStateHeaderWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ clearQuotedMessageState, disabled, resetInput, }: InputReplyStateHeaderPropsWithContext<StreamChatGenerics>) => React.JSX.Element;
export type InputReplyStateHeaderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<InputReplyStateHeaderPropsWithContext<StreamChatGenerics>>;
export declare const InputReplyStateHeader: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<InputReplyStateHeaderPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputReplyStateHeader.d.ts.map