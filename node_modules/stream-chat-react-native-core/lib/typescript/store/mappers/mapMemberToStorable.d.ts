import type { ChannelMemberResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapMemberToStorable: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ cid, member, }: {
    cid: string;
    member: ChannelMemberResponse<StreamChatGenerics>;
}) => TableRow<'members'>;
//# sourceMappingURL=mapMemberToStorable.d.ts.map