import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { OwnCapabilitiesContextValue } from '../../../contexts/ownCapabilitiesContext/OwnCapabilitiesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { MessageActionType } from '../../MessageOverlay/MessageActionListItem';
export type MessageActionsParams<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    blockUser: MessageActionType;
    deleteMessage: MessageActionType;
    dismissOverlay: () => void;
    editMessage: MessageActionType;
    error: boolean | Error;
    flagMessage: MessageActionType;
    isThreadMessage: boolean;
    messageReactions: boolean;
    muteUser: MessageActionType;
    ownCapabilities: OwnCapabilitiesContextValue;
    pinMessage: MessageActionType;
    quotedReply: MessageActionType;
    retry: MessageActionType;
    threadReply: MessageActionType;
    unpinMessage: MessageActionType;
    copyMessage?: MessageActionType;
} & Pick<MessageContextValue<StreamChatGenerics>, 'message' | 'isMyMessage'>;
export type MessageActionsProp<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = (param: MessageActionsParams<StreamChatGenerics>) => MessageActionType[];
export declare const messageActions: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ blockUser, copyMessage, deleteMessage, editMessage, error, flagMessage, isMyMessage, isThreadMessage, message, messageReactions, ownCapabilities, pinMessage, quotedReply, retry, threadReply, unpinMessage, }: MessageActionsParams<StreamChatGenerics>) => MessageActionType[] | undefined;
//# sourceMappingURL=messageActions.d.ts.map