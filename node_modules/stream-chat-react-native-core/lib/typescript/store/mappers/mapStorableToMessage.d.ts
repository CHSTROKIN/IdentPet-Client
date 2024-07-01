import type { MessageResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRowJoinedUser } from '../types';
export declare const mapStorableToMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ currentUserId, messageRow, reactionRows, }: {
    currentUserId: string;
    messageRow: TableRowJoinedUser<'messages'>;
    reactionRows: TableRowJoinedUser<'reactions'>[];
}) => MessageResponse<StreamChatGenerics>;
//# sourceMappingURL=mapStorableToMessage.d.ts.map