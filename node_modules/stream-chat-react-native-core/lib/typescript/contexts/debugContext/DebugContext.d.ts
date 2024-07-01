import React, { PropsWithChildren } from 'react';
import type { Channel, ChannelState, StreamChat } from 'stream-chat';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type DebugDataType<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = StreamChat<StreamChatGenerics>['user'] | {
    data: Channel<StreamChatGenerics>['data'];
    members: ChannelState<StreamChatGenerics>['members'];
}[] | MessageType<StreamChatGenerics>[];
export type DebugContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    eventType?: string;
    sendEventParams?: {
        action: string;
        data: DebugDataType<StreamChatGenerics>;
    };
    setEventType?: (data: string) => void;
    setSendEventParams?: (data: {
        action: string;
        data: DebugDataType<StreamChatGenerics>;
    }) => void;
};
export declare const DebugContext: React.Context<React.MutableRefObject<DebugContextValue<DefaultStreamChatGenerics>>>;
export declare const DebugContextProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, useFlipper, }: React.PropsWithChildren<{
    useFlipper: () => {
        updateData: (ref: React.RefObject<DebugContextValue<StreamChatGenerics>>) => void;
    };
}>) => React.JSX.Element;
export declare const useDebugContext: () => React.MutableRefObject<DebugContextValue<DefaultStreamChatGenerics>>;
//# sourceMappingURL=DebugContext.d.ts.map