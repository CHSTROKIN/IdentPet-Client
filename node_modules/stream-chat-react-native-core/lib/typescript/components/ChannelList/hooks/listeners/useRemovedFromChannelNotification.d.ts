/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onRemovedFromChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useRemovedFromChannelNotification: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onRemovedFromChannel, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useRemovedFromChannelNotification.d.ts.map