/// <reference types="react" />
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    enableOfflineSupport: boolean;
    filters: ChannelFilters<StreamChatGenerics>;
    options: ChannelOptions;
    setForceUpdate: React.Dispatch<React.SetStateAction<number>>;
    sort: ChannelSort<StreamChatGenerics>;
};
type QueryType = 'queryLocalDB' | 'reload' | 'refresh' | 'loadChannels';
export type QueryChannels = (queryType?: QueryType, retryCount?: number) => Promise<void>;
export declare const usePaginatedChannels: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ enableOfflineSupport, filters, options, setForceUpdate, sort, }: Parameters<StreamChatGenerics>) => {
    channels: Channel<StreamChatGenerics>[] | null;
    error: Error | undefined;
    hasNextPage: boolean;
    loadingChannels: boolean;
    loadingNextPage: boolean;
    loadNextPage: QueryChannels;
    refreshing: boolean;
    refreshList: () => Promise<void>;
    reloadList: () => Promise<void>;
    setChannels: import("react").Dispatch<import("react").SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    staticChannelsActive: boolean;
};
export {};
//# sourceMappingURL=usePaginatedChannels.d.ts.map