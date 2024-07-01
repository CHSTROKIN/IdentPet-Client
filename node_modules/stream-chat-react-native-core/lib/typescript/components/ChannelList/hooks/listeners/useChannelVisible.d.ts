/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onChannelVisible?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useChannelVisible: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onChannelVisible, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useChannelVisible.d.ts.map