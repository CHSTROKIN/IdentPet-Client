import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type CommandsButtonPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & Pick<SuggestionsContextValue<StreamChatGenerics>, 'suggestions'> & {
    /** Function that opens commands selector */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
};
export type CommandsButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<CommandsButtonPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for attach button in MessageInput component.
 */
export declare const CommandsButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<CommandsButtonPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=CommandsButton.d.ts.map