import type { ChannelFilters, ChannelSort } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const convertFilterSortToQuery: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ filters, sort, }: {
    filters?: ChannelFilters<StreamChatGenerics> | undefined;
    sort?: ChannelSort<StreamChatGenerics> | undefined;
}) => string;
//# sourceMappingURL=convertFilterSortToQuery.d.ts.map