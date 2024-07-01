import React from 'react';
import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type InputEditingStateHeaderPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'clearEditingState' | 'resetInput'> & Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'>;
export declare const InputEditingStateHeaderWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ clearEditingState, disabled, resetInput, }: InputEditingStateHeaderPropsWithContext<StreamChatGenerics>) => React.JSX.Element;
export type InputEditingStateHeaderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<InputEditingStateHeaderPropsWithContext<StreamChatGenerics>>;
export declare const InputEditingStateHeader: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<InputEditingStateHeaderPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputEditingStateHeader.d.ts.map