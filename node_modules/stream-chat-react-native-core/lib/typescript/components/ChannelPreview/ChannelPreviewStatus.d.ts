import React from 'react';
import { ChannelPreviewProps } from './ChannelPreview';
import type { ChannelPreviewMessengerPropsWithContext } from './ChannelPreviewMessenger';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewStatusProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelPreviewMessengerPropsWithContext<StreamChatGenerics>, 'latestMessagePreview' | 'formatLatestMessageDate'> & Pick<ChannelPreviewProps<StreamChatGenerics>, 'channel'>;
export declare const ChannelPreviewStatus: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewStatusProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelPreviewStatus.d.ts.map