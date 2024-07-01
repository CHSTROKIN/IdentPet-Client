import type { DateSeparators } from './getDateSeparators';
import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type GetGroupStylesParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    dateSeparators: DateSeparators;
    messages: PaginatedMessageListContextValue<StreamChatGenerics>['messages'] | ThreadContextValue<StreamChatGenerics>['threadMessages'];
    hideDateSeparators?: boolean;
    maxTimeBetweenGroupedMessages?: number;
    noGroupByUser?: boolean;
    userId?: string;
};
export declare const getGroupStyles: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: GetGroupStylesParams<StreamChatGenerics>) => {
    [key: string]: string[];
};
//# sourceMappingURL=getGroupStyles.d.ts.map