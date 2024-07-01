import type { DeletedMessagesVisibilityType } from '../../../contexts/messagesContext/MessagesContext';
import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type GetDateSeparatorsParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    messages: PaginatedMessageListContextValue<StreamChatGenerics>['messages'] | ThreadContextValue<StreamChatGenerics>['threadMessages'];
    deletedMessagesVisibilityType?: DeletedMessagesVisibilityType;
    hideDateSeparators?: boolean;
    userId?: string;
};
export type DateSeparators = {
    [key: string]: Date;
};
export declare const getDateSeparators: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: GetDateSeparatorsParams<StreamChatGenerics>) => DateSeparators;
//# sourceMappingURL=getDateSeparators.d.ts.map