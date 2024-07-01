import type { ReadResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare const getReads: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelIds, }: {
    channelIds: string[];
}) => Record<string, ReadResponse<StreamChatGenerics>[]>;
//# sourceMappingURL=getReads.d.ts.map