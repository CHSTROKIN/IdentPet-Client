import type { ChannelAPIResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
/**
 * Returns the list of channels with state enriched for given channel ids.
 *
 * @param {Object} param
 * @param {Array} param.channelIds List of channel ids to fetch.
 * @param {Array} param.currentUserId Id of the current logged in user.
 *
 * @returns {Array} Channels with enriched state.
 */
export declare const getChannels: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelIds, currentUserId, }: {
    channelIds: string[];
    currentUserId: string;
}) => Omit<ChannelAPIResponse<StreamChatGenerics>, "duration">[];
//# sourceMappingURL=getChannels.d.ts.map