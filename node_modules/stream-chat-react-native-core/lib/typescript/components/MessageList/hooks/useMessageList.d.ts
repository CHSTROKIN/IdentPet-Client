import type { ChannelState, MessageResponse } from 'stream-chat';
import { DeletedMessagesVisibilityType } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type UseMessageListParams = {
    deletedMessagesVisibilityType?: DeletedMessagesVisibilityType;
    noGroupByUser?: boolean;
    threadList?: boolean;
};
export type GroupType = string;
export type MessagesWithStylesReadByAndDateSeparator<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = MessageResponse<StreamChatGenerics> & {
    groupStyles: GroupType[];
    readBy: boolean | number;
    dateSeparator?: Date;
};
export type MessageType<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ReturnType<ChannelState<StreamChatGenerics>['formatMessage']> | MessagesWithStylesReadByAndDateSeparator<StreamChatGenerics>;
export declare const isMessageWithStylesReadByAndDateSeparator: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(message: MessageType<StreamChatGenerics>) => message is MessagesWithStylesReadByAndDateSeparator<StreamChatGenerics>;
export declare const useMessageList: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(params: UseMessageListParams) => {
    /** Messages enriched with dates/readby/groups and also reversed in order */
    processedMessageList: MessageType<StreamChatGenerics>[];
    /** Raw messages from the channel state */
    rawMessageList: import("stream-chat").FormatMessageResponse<StreamChatGenerics>[];
};
//# sourceMappingURL=useMessageList.d.ts.map