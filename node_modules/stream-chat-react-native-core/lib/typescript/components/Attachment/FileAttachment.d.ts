import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import type { Attachment } from 'stream-chat';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type FileAttachmentPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'AttachmentActions' | 'FileAttachmentIcon'> & {
    /** The attachment to render */
    attachment: Attachment<StreamChatGenerics>;
    attachmentSize?: number;
    styles?: Partial<{
        container: StyleProp<ViewStyle>;
        details: StyleProp<ViewStyle>;
        size: StyleProp<TextStyle>;
        title: StyleProp<TextStyle>;
    }>;
};
export type FileAttachmentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Omit<FileAttachmentPropsWithContext<StreamChatGenerics>, 'attachment'>> & Pick<FileAttachmentPropsWithContext<StreamChatGenerics>, 'attachment'>;
export declare const FileAttachment: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: FileAttachmentProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export declare const getFileSizeDisplayText: (size?: number | string) => string | undefined;
//# sourceMappingURL=FileAttachment.d.ts.map