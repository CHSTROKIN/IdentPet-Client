/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onChannelUpdated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useChannelUpdated: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onChannelUpdated, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useChannelUpdated.d.ts.map