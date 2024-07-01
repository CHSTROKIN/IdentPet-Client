import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { MessageOverlayPropsWithContext } from '../MessageOverlay/MessageOverlay';
export type ActionType = 'blockUser' | 'copyMessage' | 'deleteMessage' | 'editMessage' | 'flagMessage' | 'muteUser' | 'pinMessage' | 'selectReaction' | 'reply' | 'retry' | 'quotedReply' | 'threadReply' | 'unpinMessage';
export type MessageActionType = {
    /**
     * Callback when user presses the action button.
     */
    action: () => void;
    /**
     * Type of the action performed.
     * Eg: 'blockUser', 'copyMessage', 'deleteMessage', 'editMessage', 'flagMessage', 'muteUser', 'pinMessage', 'selectReaction', 'reply', 'retry', 'quotedReply', 'threadReply', 'unpinMessage'
     */
    actionType: ActionType;
    /**
     * Title for action button.
     */
    title: string;
    /**
     * Element to render as icon for action button.
     */
    icon?: React.ReactElement;
    /**
     * Styles for underlying Text component of action title.
     */
    titleStyle?: StyleProp<TextStyle>;
};
export type MessageActionListItemProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = MessageActionType & Pick<MessageOverlayPropsWithContext<StreamChatGenerics>, 'error' | 'isMyMessage' | 'isThreadMessage' | 'message' | 'messageReactions'> & {
    index: number;
    length: number;
};
export declare const MemoizedMessageActionListItem: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageActionListItemProps<StreamChatGenerics>) => React.JSX.Element;
/**
 * MessageActionListItem - A high-level component that implements all the logic required for a `MessageAction` in a `MessageActionList`
 */
export declare const MessageActionListItem: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageActionListItemProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=MessageActionListItem.d.ts.map