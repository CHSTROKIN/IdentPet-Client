import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type PaginatedMessageListContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /**
     * Has more messages to load
     */
    hasMore: boolean;
    /**
     * Flag to indicate that are no more recent messages to be loaded
     */
    hasNoMoreRecentMessagesToLoad: boolean;
    /**
     * Is loading more messages
     */
    loadingMore: boolean;
    /**
     * Is loading more recent messages
     */
    loadingMoreRecent: boolean;
    /**
     * Load more messages
     */
    loadMore: (limit?: number) => Promise<void>;
    /**
     * Load more recent messages
     */
    loadMoreRecent: (limit?: number) => Promise<void>;
    /**
     * Messages from client state
     */
    messages: ChannelState<StreamChatGenerics>['messages'];
    /**
     * Set loadingMore
     */
    setLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Set loadingMoreRecent
     */
    setLoadingMoreRecent: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const PaginatedMessageListContext: React.Context<PaginatedMessageListContextValue<DefaultStreamChatGenerics>>;
export declare const PaginatedMessageListProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value?: PaginatedMessageListContextValue<StreamChatGenerics> | undefined;
}>) => React.JSX.Element;
export declare const usePaginatedMessageListContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => PaginatedMessageListContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withPaginatedMessageListContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withPaginatedMessageListContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof PaginatedMessageListContextValue<StreamChatGenerics>>>;
//# sourceMappingURL=PaginatedMessageListContext.d.ts.map