import type { MessageResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare const getChannelMessages: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelIds, currentUserId, }: {
    channelIds: string[];
    currentUserId: string;
}) => Record<string, MessageResponse<StreamChatGenerics>[]>;
//# sourceMappingURL=getChannelMessages.d.ts.map