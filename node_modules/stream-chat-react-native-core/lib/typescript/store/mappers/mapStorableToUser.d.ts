import type { UserResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRow } from '../types';
export declare const mapStorableToUser: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(userRow: TableRow<'users'>) => UserResponse<StreamChatGenerics>;
//# sourceMappingURL=mapStorableToUser.d.ts.map