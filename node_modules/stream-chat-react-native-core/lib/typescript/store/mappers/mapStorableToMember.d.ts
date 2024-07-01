import type { ChannelMemberResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRowJoinedUser } from '../types';
export declare const mapStorableToMember: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(memberRow: TableRowJoinedUser<'members'>) => ChannelMemberResponse<StreamChatGenerics>;
//# sourceMappingURL=mapStorableToMember.d.ts.map