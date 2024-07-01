import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateThreadContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ allowThreadMessagesInChannel, closeThread, loadMoreThread, openThread, reloadThread, setThreadLoadingMore, thread, threadHasMore, threadLoadingMore, threadMessages, }: ThreadContextValue<StreamChatGenerics>) => ThreadContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreateThreadContext.d.ts.map