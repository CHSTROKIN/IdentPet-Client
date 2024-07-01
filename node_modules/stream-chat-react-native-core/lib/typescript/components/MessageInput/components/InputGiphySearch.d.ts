import React from 'react';
import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type InputGiphySearchPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'additionalTextInputProps' | 'cooldownEndsAt' | 'setGiphyActive' | 'setShowMoreOptions'> & Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'>;
export declare const InputGiphySearchWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ additionalTextInputProps, cooldownEndsAt, disabled, setGiphyActive, setShowMoreOptions, }: InputGiphySearchPropsWithContext<StreamChatGenerics>) => React.JSX.Element;
export type InputGiphySearchProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<InputGiphySearchPropsWithContext<StreamChatGenerics>>;
export declare const InputGiphySearch: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<InputGiphySearchPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=InputGiphySearch.d.ts.map