import React from 'react';
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort, Event } from 'stream-chat';
import { ChannelListMessengerProps } from './ChannelListMessenger';
import { ChannelsContextValue } from '../../contexts/channelsContext/ChannelsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ChannelListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<ChannelsContextValue<StreamChatGenerics>, 'additionalFlatListProps' | 'EmptyStateIndicator' | 'FooterLoadingIndicator' | 'HeaderErrorIndicator' | 'HeaderNetworkDownIndicator' | 'LoadingErrorIndicator' | 'LoadingIndicator' | 'Preview' | 'setFlatListRef' | 'ListHeaderComponent' | 'onSelect' | 'PreviewAvatar' | 'PreviewMessage' | 'PreviewMutedStatus' | 'PreviewStatus' | 'PreviewTitle' | 'PreviewUnreadCount' | 'loadMoreThreshold' | 'Skeleton' | 'maxUnreadCount' | 'numberOfSkeletons'>> & {
    /** Optional function to filter channels prior to rendering the list. Do not use any complex logic that would delay the loading of the ChannelList. We recommend using a pure function with array methods like filter/sort/reduce. */
    channelRenderFilterFn?: (channels: Array<Channel<StreamChatGenerics>>) => Array<Channel<StreamChatGenerics>>;
    /**
     * Object containing channel query filters
     *
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available filter fields
     *
     * @overrideType object
     * */
    filters?: ChannelFilters<StreamChatGenerics>;
    /**
     * Custom UI component to display the list of channels
     *
     * Default: [ChannelListMessenger](https://getstream.io/chat/docs/sdk/reactnative/ui-components/channel-list-messenger/)
     */
    List?: React.ComponentType<ChannelListMessengerProps<StreamChatGenerics>>;
    /**
     * If set to true, channels won't dynamically sort by most recent message, defaults to false
     */
    lockChannelOrder?: boolean;
    /**
     * Function that overrides default behavior when a user gets added to a channel
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event Object](https://getstream.io/chat/docs/event_object) corresponding to `notification.added_to_channel` event
     *
     * @overrideType Function
     * */
    onAddedToChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function that overrides default behavior when a channel gets deleted. In absence of this prop, the channel will be removed from the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.deleted` event
     *
     * @overrideType Function
     * */
    onChannelDeleted?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function that overrides default behavior when a channel gets hidden. In absence of this prop, the channel will be removed from the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.hidden` event
     *
     * @overrideType Function
     * */
    onChannelHidden?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function to customize behavior when a channel gets truncated
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.truncated` event
     *
     * @overrideType Function
     * */
    onChannelTruncated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function that overrides default behavior when a channel gets updated
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.updated` event
     *
     * @overrideType Function
     * */
    onChannelUpdated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function that overrides default behavior when a channel gets visible. In absence of this prop, the channel will be added to the list.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `channel.visible` event
     *
     * @overrideType Function
     * */
    onChannelVisible?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * @deprecated use onNewMessageNotification instead
     *
     * Override the default listener/handler for event `notification.message_new`
     * This event is received on channel, which is not being watched.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `notification.message_new` event
     *
     * @overrideType Function
     * */
    onMessageNew?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Override the default listener/handler for event `message.new`
     * This event is received on channel, when a new message is added on a channel.
     *
     * @param lockChannelOrder If set to true, channels won't dynamically sort by most recent message, defaults to false
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `message.new` event
     *
     * @overrideType Function
     * */
    onNewMessage?: (lockChannelOrder: boolean, setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Override the default listener/handler for event `notification.message_new`
     * This event is received on channel, which is not being watched.
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `notification.message_new` event
     *
     * @overrideType Function
     * */
    onNewMessageNotification?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Function that overrides default behavior when a user gets removed from a channel
     *
     * @param setChannels Setter for internal state property - `channels`. It's created from useState() hook.
     * @param event An [Event object](https://getstream.io/chat/docs/event_object) corresponding to `notification.removed_from_channel` event
     *
     * @overrideType Function
     * */
    onRemovedFromChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    /**
     * Object containing channel query options
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available option fields
     * */
    options?: ChannelOptions;
    /**
     * Object containing channel sort parameters
     * @see See [Channel query documentation](https://getstream.io/chat/docs/query_channels) for a list of available sorting fields
     * */
    sort?: ChannelSort<StreamChatGenerics>;
};
/**
 * This component fetches a list of channels, allowing you to select the channel you want to open.
 * The ChannelList doesn't provide any UI for the underlying React Native FlatList. UI is determined by the `List` component which is
 * provided to the ChannelList component as a prop. By default, the ChannelListMessenger component is used as the list UI.
 *
 * @example ./ChannelList.md
 */
export declare const ChannelList: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ChannelListProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=ChannelList.d.ts.map