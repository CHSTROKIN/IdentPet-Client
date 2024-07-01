import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const getReadStates: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(clientUserId: string | undefined, messages: import("stream-chat").FormatMessageResponse<StreamChatGenerics>[], read?: {
    [x: string]: {
        last_read: Date;
        unread_messages: number;
        user: import("stream-chat").UserResponse<StreamChatGenerics>;
        first_unread_message_id?: string | undefined;
        last_read_message_id?: string | undefined;
    };
} | undefined) => {
    [key: string]: number | boolean;
};
//# sourceMappingURL=getReadStates.d.ts.map