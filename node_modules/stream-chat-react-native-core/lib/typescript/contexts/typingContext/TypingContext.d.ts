import React, { PropsWithChildren } from 'react';
import type { ChannelState } from 'stream-chat';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type TypingContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    typing: ChannelState<StreamChatGenerics>['typing'];
};
export declare const TypingContext: React.Context<TypingContextValue<DefaultStreamChatGenerics>>;
export declare const TypingProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value: TypingContextValue<StreamChatGenerics>;
}>) => React.JSX.Element;
export declare const useTypingContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => TypingContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withTypingContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withTypingContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, "typing">>;
//# sourceMappingURL=TypingContext.d.ts.map