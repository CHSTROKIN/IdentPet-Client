import type { ChannelAPIResponse, ChannelFilters, ChannelSort } from 'stream-chat';
import type { PreparedQueries } from '../types';
export declare const upsertChannels: ({ channels, filters, flush, isLatestMessagesSet, sort, }: {
    channels: ChannelAPIResponse[];
    filters?: ChannelFilters | undefined;
    flush?: boolean | undefined;
    isLatestMessagesSet?: boolean | undefined;
    sort?: ChannelSort | undefined;
}) => PreparedQueries[];
//# sourceMappingURL=upsertChannels.d.ts.map