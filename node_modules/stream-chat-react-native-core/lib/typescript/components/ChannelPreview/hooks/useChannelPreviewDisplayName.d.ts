import type { Channel, ChannelMemberResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const getChannelPreviewDisplayName: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelName, characterLimit, currentUserId, members, }: {
    characterLimit: number;
    channelName?: string | undefined;
    currentUserId?: string | undefined;
    members?: Record<string, ChannelMemberResponse<StreamChatGenerics>> | undefined;
}) => string;
export declare const useChannelPreviewDisplayName: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel?: Channel<StreamChatGenerics> | undefined, characterLength?: number) => string;
//# sourceMappingURL=useChannelPreviewDisplayName.d.ts.map