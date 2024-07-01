import React from 'react';
import { LayoutChangeEvent } from 'react-native';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
type MessageDeletedComponentProps = {
    groupStyle: string;
    noBorder: boolean;
    onLayout: (event: LayoutChangeEvent) => void;
    date?: string | Date;
};
type MessageDeletedPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'message'> & Pick<MessagesContextValue<StreamChatGenerics>, 'MessageFooter'> & MessageDeletedComponentProps;
export type MessageDeletedProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageDeletedPropsWithContext<StreamChatGenerics>> & {
    groupStyle: string;
    noBorder: boolean;
    onLayout: (event: LayoutChangeEvent) => void;
};
export declare const MessageDeleted: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: MessageDeletedProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=MessageDeleted.d.ts.map