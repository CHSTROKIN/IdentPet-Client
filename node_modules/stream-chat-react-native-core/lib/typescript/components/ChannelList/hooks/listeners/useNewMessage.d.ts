/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    lockChannelOrder: boolean;
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onNewMessage?: (lockChannelOrder: boolean, setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useNewMessage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ lockChannelOrder, onNewMessage, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useNewMessage.d.ts.map