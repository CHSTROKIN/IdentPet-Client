import type { Channel, UserResponse } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../types/types';
export declare const removeReactionFromLocalState: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, messageId, reactionType, user, }: {
    channel: Channel<StreamChatGenerics>;
    messageId: string;
    reactionType: string;
    user: UserResponse<StreamChatGenerics>;
}) => void;
//# sourceMappingURL=removeReactionFromLocalState.d.ts.map