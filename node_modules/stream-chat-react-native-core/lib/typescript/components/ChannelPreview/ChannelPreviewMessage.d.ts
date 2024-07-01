import React from 'react';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewMessageProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /**
     * Latest message on a channel, formatted for preview.
     */
    latestMessagePreview: LatestMessagePreview<StreamChatGenerics>;
};
export declare const ChannelPreviewMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewMessageProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelPreviewMessage.d.ts.map