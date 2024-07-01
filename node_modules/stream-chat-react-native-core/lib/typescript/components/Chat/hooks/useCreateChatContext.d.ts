import type { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export declare const useCreateChatContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ appSettings, channel, client, connectionRecovering, enableOfflineSupport, ImageComponent, isOnline, mutedUsers, resizableCDNHosts, setActiveChannel, }: ChatContextValue<StreamChatGenerics>) => ChatContextValue<StreamChatGenerics>;
//# sourceMappingURL=useCreateChatContext.d.ts.map