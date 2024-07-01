import React from 'react';
import Animated from 'react-native-reanimated';
import type { Alignment } from '../../contexts/messageContext/MessageContext';
import type { MessageOverlayContextValue } from '../../contexts/messageOverlayContext/MessageOverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { ReactionData } from '../../utils/utils';
export type Reaction = {
    alignment: Alignment;
    id: string;
    name: string;
    type: string;
    image?: string;
};
export type OverlayReactionsProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageOverlayContextValue<StreamChatGenerics>, 'OverlayReactionsAvatar'> & {
    reactions: Reaction[];
    showScreen: Animated.SharedValue<number>;
    title: string;
    alignment?: Alignment;
    supportedReactions?: ReactionData[];
};
/**
 * OverlayReactions - A high level component which implements all the logic required for message overlay reactions
 */
export declare const OverlayReactions: {
    (props: OverlayReactionsProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=OverlayReactions.d.ts.map