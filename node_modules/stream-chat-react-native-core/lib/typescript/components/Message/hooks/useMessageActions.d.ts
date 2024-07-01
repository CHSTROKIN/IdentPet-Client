import type { ChannelContextValue } from '../../../contexts/channelContext/ChannelContext';
import type { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import type { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { OverlayContextValue } from '../../../contexts/overlayContext/OverlayContext';
import type { ThreadContextValue } from '../../../contexts/threadContext/ThreadContext';
import type { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { MessageType } from '../../MessageList/hooks/useMessageList';
import type { MessageActionType } from '../../MessageOverlay/MessageActionListItem';
export declare const useMessageActions: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ channel, client, deleteMessage: deleteMessageFromContext, deleteReaction, enforceUniqueReaction, handleBlock, handleCopy, handleDelete, handleEdit, handleFlag, handleMute, handlePinMessage, handleQuotedReply, handleReaction: handleReactionProp, handleRetry, handleThreadReply, message, onThreadSelect, openThread, retrySendMessage, selectReaction, sendReaction, setEditingState, setOverlay, setQuotedMessageState, supportedReactions, t, }: Pick<MessagesContextValue<StreamChatGenerics>, "sendReaction" | "deleteMessage" | "deleteReaction" | "updateMessage" | "supportedReactions" | "handleReaction" | "removeMessage" | "retrySendMessage" | "setEditingState" | "setQuotedMessageState" | "handleBlock" | "handleCopy" | "handleDelete" | "handleEdit" | "handleFlag" | "handleMute" | "handlePinMessage" | "handleQuotedReply" | "handleRetry" | "handleThreadReply" | "selectReaction"> & Pick<ChannelContextValue<StreamChatGenerics>, "channel" | "enforceUniqueReaction"> & Pick<ChatContextValue<StreamChatGenerics>, "client"> & Pick<OverlayContextValue, "setOverlay"> & Pick<ThreadContextValue<StreamChatGenerics>, "openThread"> & Pick<MessageContextValue<StreamChatGenerics>, "message"> & Pick<TranslationContextValue, "t"> & {
    onThreadSelect?: ((message: MessageType<StreamChatGenerics>) => void) | undefined;
}) => {
    blockUser: MessageActionType;
    copyMessage: MessageActionType | undefined;
    deleteMessage: MessageActionType;
    editMessage: MessageActionType;
    flagMessage: MessageActionType;
    handleReaction: ((reactionType: string) => Promise<void>) | undefined;
    muteUser: MessageActionType;
    pinMessage: MessageActionType;
    quotedReply: MessageActionType;
    retry: MessageActionType;
    threadReply: MessageActionType;
    unpinMessage: MessageActionType;
};
//# sourceMappingURL=useMessageActions.d.ts.map