import React from 'react';
import { ChannelPreviewProps } from './ChannelPreview';
import type { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewUnreadCountProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelsContextValue<StreamChatGenerics>, 'maxUnreadCount'> & Pick<ChannelPreviewProps<StreamChatGenerics>, 'channel'> & {
    /**
     * Number of unread messages on the channel
     */
    unread?: number;
};
export declare const ChannelPreviewUnreadCount: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewUnreadCountProps<StreamChatGenerics>) => React.JSX.Element | null;
//# sourceMappingURL=ChannelPreviewUnreadCount.d.ts.map