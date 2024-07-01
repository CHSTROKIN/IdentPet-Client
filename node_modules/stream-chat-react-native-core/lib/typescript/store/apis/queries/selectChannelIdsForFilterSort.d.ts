import type { ChannelFilters, ChannelSort } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
/**
 * Gets the channel ids from database for given filter and sort query.
 *
 * @param {Object} param
 * @param {Object} param.filters Filters for channels https://getstream.io/chat/docs/javascript/query_channels/?language=javascript&q=su#query-parameters
 * @param {Object} param.sort Sort for channels https://getstream.io/chat/docs/javascript/query_channels/?language=javascript&q=su#query-parameters
 *
 * @returns Array of channel ids corresponding to filters & sort. Returns null if filters + sort query doesn't exist in "channelQueries" table.
 */
export declare const selectChannelIdsForFilterSort: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ filters, sort, }: {
    filters?: ChannelFilters<StreamChatGenerics> | undefined;
    sort?: ChannelSort<StreamChatGenerics> | undefined;
}) => string[] | null;
//# sourceMappingURL=selectChannelIdsForFilterSort.d.ts.map