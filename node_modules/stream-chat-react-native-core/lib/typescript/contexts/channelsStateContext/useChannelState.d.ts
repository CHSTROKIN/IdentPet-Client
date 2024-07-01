import type { Channel as ChannelType } from 'stream-chat';
import type { ChannelState } from './ChannelsStateContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type UseChannelStateValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    members: ChannelState<StreamChatGenerics>['members'];
    messages: ChannelState<StreamChatGenerics>['messages'];
    read: ChannelState<StreamChatGenerics>['read'];
    setMembers: (value: ChannelState<StreamChatGenerics>['members']) => void;
    setMessages: (value: ChannelState<StreamChatGenerics>['messages']) => void;
    setRead: (value: ChannelState<StreamChatGenerics>['read']) => void;
    setThreadMessages: (value: ChannelState<StreamChatGenerics>['threadMessages']) => void;
    setTyping: (value: ChannelState<StreamChatGenerics>['typing']) => void;
    setWatcherCount: (value: ChannelState<StreamChatGenerics>['watcherCount']) => void;
    setWatchers: (value: ChannelState<StreamChatGenerics>['watchers']) => void;
    threadMessages: ChannelState<StreamChatGenerics>['threadMessages'];
    typing: ChannelState<StreamChatGenerics>['typing'];
    watcherCount: ChannelState<StreamChatGenerics>['watcherCount'];
    watchers: ChannelState<StreamChatGenerics>['watchers'];
};
export declare function useChannelState<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(channel: ChannelType<StreamChatGenerics> | undefined, threadId?: string): UseChannelStateValue<StreamChatGenerics>;
//# sourceMappingURL=useChannelState.d.ts.map