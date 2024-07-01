import React from 'react';
import Animated from 'react-native-reanimated';
import { MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import type { OverlayProviderProps } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type MessageActionListPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<OverlayProviderProps<StreamChatGenerics>, 'MessageActionListItem' | 'error' | 'isMyMessage' | 'isThreadMessage' | 'message' | 'messageReactions'> & Pick<MessageOverlayData<StreamChatGenerics>, 'alignment' | 'messageActions'> & {
    showScreen: Animated.SharedValue<number>;
};
export type MessageActionListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<MessageActionListPropsWithContext<StreamChatGenerics>, 'showScreen'>> & Pick<MessageActionListPropsWithContext<StreamChatGenerics>, 'showScreen' | 'message' | 'isMyMessage' | 'error' | 'isThreadMessage' | 'messageReactions'>;
/**
 * MessageActionList - A high level component which implements all the logic required for MessageActions
 */
export declare const MessageActionList: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageActionListProps<StreamChatGenerics>) => React.JSX.Element;
//# sourceMappingURL=MessageActionList.d.ts.map