import type { PaginatedMessageListContextValue } from '../../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreatePaginatedMessageListContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channelId, hasMore, hasNoMoreRecentMessagesToLoad, loadingMore, loadingMoreRecent, loadMore, loadMoreRecent, messages, setLoadingMore, setLoadingMoreRecent, }: PaginatedMessageListContextValue<StreamChatGenerics> & {
    channelId?: string | undefined;
}) => PaginatedMessageListContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreatePaginatedMessageListContext.d.ts.map