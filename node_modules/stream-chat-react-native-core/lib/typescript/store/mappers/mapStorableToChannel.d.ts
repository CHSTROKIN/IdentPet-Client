import type { ChannelAPIResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapStorableToChannel: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channelRow: TableRow<'channels'>) => Omit<ChannelAPIResponse<StreamChatGenerics>, "duration" | "members" | "messages" | "pinned_messages">;
//# sourceMappingURL=mapStorableToChannel.d.ts.map