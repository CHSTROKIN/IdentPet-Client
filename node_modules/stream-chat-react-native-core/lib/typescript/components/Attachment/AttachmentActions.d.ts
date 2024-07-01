import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Attachment } from 'stream-chat';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type AttachmentActionsPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<Attachment<StreamChatGenerics>, 'actions'> & Pick<MessageContextValue<StreamChatGenerics>, 'handleAction'> & {
    styles?: Partial<{
        actionButton: StyleProp<ViewStyle>;
        buttonText: StyleProp<TextStyle>;
        container: StyleProp<ViewStyle>;
    }>;
};
export type AttachmentActionsProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Attachment<StreamChatGenerics> & Partial<Pick<MessageContextValue<StreamChatGenerics>, 'handleAction'>>;
/**
 * AttachmentActions - The actions you can take on an attachment.
 * Actions in combination with attachments can be used to build [commands](https://getstream.io/chat/docs/#channel_commands).
 */
export declare const AttachmentActions: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AttachmentActionsProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AttachmentActions.d.ts.map