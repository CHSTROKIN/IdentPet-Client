import type { ReadResponse } from 'stream-chat';
import type { PreparedQueries } from '../types';
export declare const upsertReads: ({ cid, flush, reads, }: {
    cid: string;
    reads: ReadResponse[];
    flush?: boolean | undefined;
}) => PreparedQueries[];
//# sourceMappingURL=upsertReads.d.ts.map