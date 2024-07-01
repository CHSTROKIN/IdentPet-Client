import type { ChannelMemberResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare const getMembers: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelIds, }: {
    channelIds: string[];
}) => Record<string, ChannelMemberResponse<StreamChatGenerics>[]>;
//# sourceMappingURL=getMembers.d.ts.map