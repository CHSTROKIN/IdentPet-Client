import React from 'react';
import type { ChannelPreviewProps } from './ChannelPreview';
import type { LatestMessagePreview } from './hooks/useLatestMessagePreview';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelPreviewMessengerPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelPreviewProps<StreamChatGenerics>, 'channel'> & Pick<ChannelsContextValue<StreamChatGenerics>, 'maxUnreadCount' | 'onSelect' | 'PreviewAvatar' | 'PreviewMessage' | 'PreviewMutedStatus' | 'PreviewStatus' | 'PreviewTitle' | 'PreviewUnreadCount'> & {
    /**
     * Latest message on a channel, formatted for preview
     *
     * e.g.,
     *
     * ```json
     * {
     *  created_at: '' ,
     *  messageObject: { ... },
     *  previews: {
     *    bold: true,
     *    text: 'This is the message preview text'
     *  },
     *  status: 0 | 1 | 2 // read states of the latest message.
     * }
     * ```
     *
     * The read status is either of the following:
     *
     * 0: The message was not sent by the current user
     * 1: The message was sent by the current user and is unread
     * 2: The message was sent by the current user and is read
     *
     * @overrideType object
     */
    latestMessagePreview: LatestMessagePreview<StreamChatGenerics>;
    /**
     * Formatter function for date of latest message.
     * @param date Message date
     * @returns Formatted date string
     *
     * By default today's date is shown in 'HH:mm A' format and other dates
     * are displayed in 'DD/MM/YY' format. props.latestMessage.created_at is the
     * default formatted date. This default logic is part of ChannelPreview component.
     */
    formatLatestMessageDate?: (date: Date) => string;
    /** Number of unread messages on the channel */
    unread?: number;
};
export type ChannelPreviewMessengerProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<ChannelPreviewMessengerPropsWithContext<StreamChatGenerics>, 'channel' | 'latestMessagePreview'>> & Pick<ChannelPreviewMessengerPropsWithContext<StreamChatGenerics>, 'channel' | 'latestMessagePreview'>;
/**
 * This UI component displays an individual preview item for each channel in a list. It also receives all props
 * from the ChannelPreview component.
 */
export declare const ChannelPreviewMessenger: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelPreviewMessengerProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ChannelPreviewMessenger.d.ts.map