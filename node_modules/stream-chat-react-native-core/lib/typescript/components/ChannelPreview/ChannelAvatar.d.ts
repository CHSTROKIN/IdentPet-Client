import React from 'react';
import type { ChannelPreviewProps } from './ChannelPreview';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelAvatarProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelPreviewProps<StreamChatGenerics>, 'channel'>;
/**
 * This UI component displays an avatar for a particular channel.
 */
export declare const ChannelAvatarWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelAvatarProps<StreamChatGenerics> & Pick<ChatContextValue, "ImageComponent">) => React.JSX.Element;
export declare const ChannelAvatar: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelAvatarProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelAvatar.d.ts.map