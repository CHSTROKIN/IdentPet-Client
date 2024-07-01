import type { FormatMessageResponse, MessageResponse, ReactionResponse } from 'stream-chat';
import type { PreparedQueries } from '../types';
export declare const updateReaction: ({ flush, message, reaction, }: {
    message: MessageResponse | FormatMessageResponse;
    reaction: ReactionResponse;
    flush?: boolean | undefined;
}) => PreparedQueries[];
//# sourceMappingURL=updateReaction.d.ts.map