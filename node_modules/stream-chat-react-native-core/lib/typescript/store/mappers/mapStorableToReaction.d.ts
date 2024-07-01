import type { ReactionResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { TableRowJoinedUser } from '../types';
export declare const mapStorableToReaction: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(reactionRow: TableRowJoinedUser<'reactions'>) => ReactionResponse<StreamChatGenerics>;
//# sourceMappingURL=mapStorableToReaction.d.ts.map