import type { ChannelAPIResponse, ChannelFilters, ChannelSort } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
/**
 * Gets the channels from database for given filter and sort query.
 *
 * @param {Object} param
 * @param {string} param.currentUserId Id of current logged in user
 * @param {Object} param.filters Filters for channels https://getstream.io/chat/docs/javascript/query_channels/?language=javascript&q=su#query-parameters
 * @param {Object} param.sort Sort for channels https://getstream.io/chat/docs/javascript/query_channels/?language=javascript&q=su#query-parameters
 *
 * @returns Array of channels corresponding to filters & sort. Returns null if filters + sort query doesn't exist in "channelQueries" table.
 */
export declare const getChannelsForFilterSort: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ currentUserId, filters, sort, }: {
    currentUserId: string;
    filters?: ChannelFilters<StreamChatGenerics> | undefined;
    sort?: ChannelSort<StreamChatGenerics> | undefined;
}) => Omit<ChannelAPIResponse<StreamChatGenerics>, "duration">[] | null;
//# sourceMappingURL=getChannelsForFilterSort.d.ts.map