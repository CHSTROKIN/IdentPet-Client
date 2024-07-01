import type { ChannelMemberResponse } from 'stream-chat';
import type { PreparedQueries } from '../types';
export declare const upsertMembers: ({ cid, flush, members, }: {
    cid: string;
    members: ChannelMemberResponse[];
    flush?: boolean | undefined;
}) => PreparedQueries[];
//# sourceMappingURL=upsertMembers.d.ts.map