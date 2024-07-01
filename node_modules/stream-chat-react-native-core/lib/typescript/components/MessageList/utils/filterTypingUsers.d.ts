import type { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { TypingContextValue } from '../../../contexts/typingContext/TypingContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
type FilterTypingUsersParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<TypingContextValue<StreamChatGenerics>, 'typing'> & Pick<ChatContextValue<StreamChatGenerics>, 'client'> & Pick<ThreadContextValue<StreamChatGenerics>, 'thread'>;
export declare const filterTypingUsers: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ client, thread, typing, }: FilterTypingUsersParams<StreamChatGenerics>) => string[];
export {};
//# sourceMappingURL=filterTypingUsers.d.ts.map