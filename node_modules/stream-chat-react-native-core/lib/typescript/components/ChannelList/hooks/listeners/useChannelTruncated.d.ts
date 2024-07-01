/// <reference types="react" />
import type { Channel, Event } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
type Parameters<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    refreshList: () => void;
    setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>;
    setForceUpdate: React.Dispatch<React.SetStateAction<number>>;
    onChannelTruncated?: (setChannels: React.Dispatch<React.SetStateAction<Channel<StreamChatGenerics>[] | null>>, event: Event<StreamChatGenerics>) => void;
};
export declare const useChannelTruncated: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ onChannelTruncated, refreshList, setChannels, setForceUpdate, }: Parameters<StreamChatGenerics>) => void;
export {};
//# sourceMappingURL=useChannelTruncated.d.ts.map