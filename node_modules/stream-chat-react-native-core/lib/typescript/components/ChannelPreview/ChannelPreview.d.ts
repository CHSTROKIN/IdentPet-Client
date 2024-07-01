import React from 'react';
import type { Channel } from 'stream-chat';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChatContextValue<StreamChatGenerics>, 'client'> & Pick<ChannelsContextValue<StreamChatGenerics>, 'Preview' | 'forceUpdate'> & {
    /**
     * Instance of Channel from stream-chat package.
     */
    channel: Channel<StreamChatGenerics>;
};
export type ChannelPreviewProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<ChannelPreviewPropsWithContext<StreamChatGenerics>, 'channel'>> & Pick<ChannelPreviewPropsWithContext<StreamChatGenerics>, 'channel'>;
export declare const ChannelPreview: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelPreview.d.ts.map