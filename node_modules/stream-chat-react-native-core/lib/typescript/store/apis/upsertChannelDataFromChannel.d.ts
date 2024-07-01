import type { Channel } from 'stream-chat';
import { DefaultStreamChatGenerics } from '../../types/types';
export declare const upsertChannelDataFromChannel: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, flush, }: {
    channel: Channel<StreamChatGenerics>;
    flush?: boolean | undefined;
}) => import("../types").PreparedQueries[] | undefined;
//# sourceMappingURL=upsertChannelDataFromChannel.d.ts.map