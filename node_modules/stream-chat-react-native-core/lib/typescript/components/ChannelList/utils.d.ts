import type { Channel, StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
type MoveParameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    channels: Channel<StreamChatGenerics>[];
    cid: string;
};
export declare const moveChannelUp: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channels, cid, }: MoveParameters<StreamChatGenerics>) => Channel<StreamChatGenerics>[];
type GetParameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    client: StreamChat<StreamChatGenerics>;
    id: string;
    type: string;
};
export declare const getChannel: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ client, id, type, }: GetParameters<StreamChatGenerics>) => Promise<Channel<StreamChatGenerics>>;
export declare const DEFAULT_QUERY_CHANNELS_LIMIT = 10;
export declare const MAX_QUERY_CHANNELS_LIMIT = 30;
export {};
//# sourceMappingURL=utils.d.ts.map