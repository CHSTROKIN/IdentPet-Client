import React from 'react';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type SendButtonPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'giphyActive' | 'sendMessage'> & {
    /** Disables the button */ disabled: boolean;
};
export type SendButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<SendButtonPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for send button in MessageInput component.
 */
export declare const SendButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<SendButtonPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=SendButton.d.ts.map