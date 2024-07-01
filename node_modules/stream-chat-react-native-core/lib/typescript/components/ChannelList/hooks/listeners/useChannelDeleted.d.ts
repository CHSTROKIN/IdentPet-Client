/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    onChannelDeleted?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useChannelDeleted: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onChannelDeleted, setChannels, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useChannelDeleted.d.ts.map