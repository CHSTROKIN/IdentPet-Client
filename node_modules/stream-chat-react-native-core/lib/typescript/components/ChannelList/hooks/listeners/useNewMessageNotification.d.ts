/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onMessageNew?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
    onNewMessageNotification?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useNewMessageNotification: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onMessageNew, onNewMessageNotification, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useNewMessageNotification.d.ts.map