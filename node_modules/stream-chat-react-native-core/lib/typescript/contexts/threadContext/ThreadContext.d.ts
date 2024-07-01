import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type ThreadContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    allowThreadMessagesInChannel: boolean;
    closeThread: () => void;
    loadMoreThread: () => Promise<void>;
    openThread: (message: MessageType<StreamChatGenerics>) => void;
    reloadThread: () => void;
    setThreadLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
    thread: MessageType<StreamChatGenerics> | null;
    threadHasMore: boolean;
    threadLoadingMore: boolean;
    threadMessages: ChannelState<StreamChatGenerics>['threads'][string];
};
export declare const ThreadContext: React.Context<ThreadContextValue<DefaultStreamChatGenerics>>;
export declare const ThreadProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value: ThreadContextValue<StreamChatGenerics>;
}>) => React.JSX.Element;
export declare const useThreadContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => ThreadContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withThreadContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withThreadContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof ThreadContextValue<StreamChatGenerics>>>;
//# sourceMappingURL=ThreadContext.d.ts.map