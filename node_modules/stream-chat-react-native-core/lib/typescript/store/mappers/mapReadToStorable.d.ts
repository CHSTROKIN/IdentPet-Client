import type { ReadResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapReadToStorable: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ cid, read, }: {
    cid: string;
    read: ReadResponse<StreamChatGenerics>;
}) => TableRow<'reads'>;
//# sourceMappingURL=mapReadToStorable.d.ts.map