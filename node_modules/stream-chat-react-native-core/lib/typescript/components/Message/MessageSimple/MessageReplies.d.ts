import React from 'react';
import { ColorValue } from 'react-native';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
export type MessageRepliesPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'message' | 'onLongPress' | 'onPress' | 'onPressIn' | 'onOpenThread' | 'preventPress' | 'threadList'> & Pick<MessagesContextValue<StreamChatGenerics>, 'MessageRepliesAvatars'> & Pick<TranslationContextValue, 't'> & {
    noBorder?: boolean;
    repliesCurveColor?: ColorValue;
};
export type MessageRepliesProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageRepliesPropsWithContext<StreamChatGenerics>>;
export declare const MessageReplies: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageRepliesPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageReplies.d.ts.map