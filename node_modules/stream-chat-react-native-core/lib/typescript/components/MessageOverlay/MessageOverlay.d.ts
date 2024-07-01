import React from 'react';
import Animated from 'react-native-reanimated';
import { MessageOverlayContextValue, MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { OverlayContextValue, OverlayProviderProps } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type MessageOverlayPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageOverlayContextValue<StreamChatGenerics>, 'MessageActionList' | 'MessageActionListItem' | 'OverlayReactionList' | 'OverlayReactions' | 'OverlayReactionsAvatar'> & Omit<MessageOverlayData<StreamChatGenerics>, 'supportedReactions'> & Pick<OverlayContextValue, 'overlay' | 'setOverlay'> & Pick<OverlayProviderProps<StreamChatGenerics>, 'error' | 'isMyMessage' | 'isThreadMessage' | 'message' | 'messageReactions' | 'messageTextNumberOfLines'> & {
    overlayOpacity: Animated.SharedValue<number>;
    showScreen?: Animated.SharedValue<number>;
};
export type MessageOverlayProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<MessageOverlayPropsWithContext<StreamChatGenerics>, 'overlayOpacity'>> & Pick<MessageOverlayPropsWithContext<StreamChatGenerics>, 'overlayOpacity'> & Pick<MessageOverlayPropsWithContext<StreamChatGenerics>, 'isMyMessage' | 'error' | 'isThreadMessage' | 'message' | 'messageReactions'>;
/**
 * MessageOverlay - A high level component which implements all the logic required for a message overlay
 */
export declare const MessageOverlay: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageOverlayProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=MessageOverlay.d.ts.map