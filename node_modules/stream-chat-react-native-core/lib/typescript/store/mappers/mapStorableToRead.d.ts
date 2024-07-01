import type { ReadResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRowJoinedUser } from '../types';
export declare const mapStorableToRead: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(row: TableRowJoinedUser<'reads'>) => ReadResponse<StreamChatGenerics>;
//# sourceMappingURL=mapStorableToRead.d.ts.map