import type { Channel, UserResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../types/types';
export declare const addReactionToLocalState: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, enforceUniqueReaction, messageId, reactionType, user, }: {
    channel: Channel<StreamChatGenerics>;
    enforceUniqueReaction: boolean;
    messageId: string;
    reactionType: string;
    user: UserResponse<StreamChatGenerics>;
}) => void;
//# sourceMappingURL=addReactionToLocalState.d.ts.map