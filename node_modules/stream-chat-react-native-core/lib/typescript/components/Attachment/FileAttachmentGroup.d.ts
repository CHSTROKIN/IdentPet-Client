import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type FileAttachmentGroupPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'files'> & Pick<MessagesContextValue<StreamChatGenerics>, 'Attachment' | 'AudioAttachment'> & {
    /**
     * The unique id for the message with file attachments
     */
    messageId: string;
    styles?: Partial<{
        attachmentContainer: StyleProp<ViewStyle>;
        container: StyleProp<ViewStyle>;
    }>;
};
export type FileAttachmentGroupProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<FileAttachmentGroupPropsWithContext<StreamChatGenerics>, 'messageId'>> & Pick<FileAttachmentGroupPropsWithContext<StreamChatGenerics>, 'messageId'>;
export declare const FileAttachmentGroup: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: FileAttachmentGroupProps<StreamChatGenerics>): React.JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=FileAttachmentGroup.d.ts.map