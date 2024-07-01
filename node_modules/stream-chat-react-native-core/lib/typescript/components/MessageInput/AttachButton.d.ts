import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type AttachButtonPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'disabled'> & {
    /** Function that opens attachment options bottom sheet */
    handleOnPress?: ((event: GestureResponderEvent) => void) & (() => void);
    selectedPicker?: 'images';
};
export type AttachButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AttachButtonPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component for attach button in MessageInput component.
 */
export declare const AttachButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<AttachButtonPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AttachButton.d.ts.map