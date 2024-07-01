import React, { PropsWithChildren } from 'react';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TypingContextValue } from '../../contexts/typingContext/TypingContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type TypingIndicatorContainerPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<TypingContextValue<StreamChatGenerics>, 'typing'> & Pick<ChatContextValue<StreamChatGenerics>, 'client'> & Pick<ThreadContextValue<StreamChatGenerics>, 'thread'>;
export type TypingIndicatorContainerProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = PropsWithChildren<Partial<TypingIndicatorContainerPropsWithContext<StreamChatGenerics>>>;
export declare const TypingIndicatorContainer: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: TypingIndicatorContainerProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=TypingIndicatorContainer.d.ts.map