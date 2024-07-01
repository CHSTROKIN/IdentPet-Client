import React, { ReactNode } from 'react';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
import type { ChannelContextValue } from '../channelContext/ChannelContext';
import type { PaginatedMessageListContextValue } from '../paginatedMessageListContext/PaginatedMessageListContext';
import type { ThreadContextValue } from '../threadContext/ThreadContext';
import type { TypingContextValue } from '../typingContext/TypingContext';
export type ChannelState<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    members: ChannelContextValue<StreamChatGenerics>['members'];
    messages: PaginatedMessageListContextValue<StreamChatGenerics>['messages'];
    read: ChannelContextValue<StreamChatGenerics>['read'];
    subscriberCount: number;
    threadMessages: ThreadContextValue<StreamChatGenerics>['threadMessages'];
    typing: TypingContextValue<StreamChatGenerics>['typing'];
    watcherCount: ChannelContextValue<StreamChatGenerics>['watcherCount'];
    watchers: ChannelContextValue<StreamChatGenerics>['watchers'];
};
type ChannelsState<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    [cid: string]: ChannelState<StreamChatGenerics>;
};
export type Keys = keyof ChannelState;
export type Payload<Key extends Keys = Keys, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    cid: string;
    key: Key;
    value: ChannelState<StreamChatGenerics>[Key];
};
export type ChannelsStateContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    decreaseSubscriberCount: (value: {
        cid: string;
    }) => void;
    increaseSubscriberCount: (value: {
        cid: string;
    }) => void;
    setState: (value: Payload<Keys, StreamChatGenerics>) => void;
    state: ChannelsState<StreamChatGenerics>;
};
export declare const ChannelsStateProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, }: {
    children: ReactNode;
}) => React.JSX.Element;
export declare const useChannelsStateContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => ChannelsStateContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChannelsStateContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withChannelsStateContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof ChannelsStateContextValue<StreamChatGenerics>>>;
export {};
//# sourceMappingURL=ChannelsStateContext.d.ts.map