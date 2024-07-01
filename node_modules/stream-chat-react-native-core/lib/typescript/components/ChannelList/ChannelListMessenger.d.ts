import React from 'react';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelListMessengerPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Omit<ChannelsContextValue<StreamChatGenerics>, 'HeaderErrorIndicator' | 'HeaderNetworkDownIndicator' | 'maxUnreadCount' | 'numberOfSkeletons' | 'onSelect' | 'Preview' | 'PreviewTitle' | 'PreviewStatus' | 'PreviewAvatar' | 'previewMessage' | 'Skeleton'>;
export type ChannelListMessengerProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<ChannelListMessengerPropsWithContext<StreamChatGenerics>>;
/**
 * This UI component displays the preview list of channels and handles Channel navigation. It
 * receives all props from the ChannelList component.
 *
 * @example ./ChannelListMessenger.md
 */
export declare const ChannelListMessenger: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<ChannelListMessengerPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ChannelListMessenger.d.ts.map