/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onChannelHidden?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useChannelHidden: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onChannelHidden, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useChannelHidden.d.ts.map