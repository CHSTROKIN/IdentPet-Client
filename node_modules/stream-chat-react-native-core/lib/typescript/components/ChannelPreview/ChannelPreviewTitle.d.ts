import React from 'react';
import type { ChannelPreviewProps } from './ChannelPreview';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewTitleProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelPreviewProps<StreamChatGenerics>, 'channel'> & {
    /**
     * Formatted name for the previewed channel.
     */
    displayName: string;
};
export declare const ChannelPreviewTitle: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewTitleProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelPreviewTitle.d.ts.map