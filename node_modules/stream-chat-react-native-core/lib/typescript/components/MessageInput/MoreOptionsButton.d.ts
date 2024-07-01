import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type MoreOptionsButtonPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & {
    /** Function that opens attachment options bottom sheet */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
};
export type MoreOptionsButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MoreOptionsButtonPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for more options button in MessageInput component.
 */
export declare const MoreOptionsButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MoreOptionsButtonPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=MoreOptionsButton.d.ts.map