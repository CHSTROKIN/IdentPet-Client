import React from 'react';
import Animated from 'react-native-reanimated';
import { FillProps } from 'react-native-svg';
import { MessageOverlayData } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import { IconProps } from '../../icons';
import type { DefaultStreamChatGenerics } from '../../types/types';
type ReactionButtonProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<OverlayReactionListPropsWithContext<StreamChatGenerics>, 'ownReactionTypes' | 'handleReaction' | 'setOverlay'> & {
    Icon: React.ComponentType<IconProps>;
    index: number;
    numberOfReactions: number;
    showScreen: Animated.SharedValue<number>;
    type: string;
};
export declare const ReactionButton: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ReactionButtonProps<StreamChatGenerics>) => React.JSX.Element;
export type OverlayReactionListPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageOverlayData<StreamChatGenerics>, 'alignment' | 'handleReaction' | 'messagesContext'> & Pick<MessagesContextValue<StreamChatGenerics>, 'supportedReactions'> & Pick<OverlayContextValue, 'setOverlay'> & {
    messageLayout: Animated.SharedValue<{
        x: number;
        y: number;
    }>;
    ownReactionTypes: string[];
    setReactionListHeight: React.Dispatch<React.SetStateAction<number>>;
    showScreen: Animated.SharedValue<number>;
    fill?: FillProps['fill'];
};
export type OverlayReactionListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Omit<OverlayReactionListPropsWithContext<StreamChatGenerics>, 'setOverlay' | 'supportedReactions'> & Partial<Pick<OverlayReactionListPropsWithContext<StreamChatGenerics>, 'setOverlay' | 'supportedReactions'>>;
/**
 * OverlayReactionList - A high level component which implements all the logic required for a message overlay reaction list
 */
export declare const OverlayReactionList: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: OverlayReactionListProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=OverlayReactionList.d.ts.map