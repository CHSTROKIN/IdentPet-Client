/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onAddedToChannel?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useAddedToChannelNotification: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onAddedToChannel, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useAddedToChannelNotification.d.ts.map