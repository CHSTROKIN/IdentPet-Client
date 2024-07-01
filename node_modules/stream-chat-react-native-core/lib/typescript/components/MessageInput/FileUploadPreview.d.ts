import React from 'react';
import { ChatContextValue } from '../../contexts';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type FileUploadPreviewPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'fileUploads' | 'removeFile' | 'uploadFile' | 'setFileUploads' | 'AudioAttachmentUploadPreview'> & Pick<MessagesContextValue<StreamChatGenerics>, 'FileAttachmentIcon'> & Pick<ChatContextValue<StreamChatGenerics>, 'enableOfflineSupport'>;
export type FileUploadPreviewProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<FileUploadPreviewPropsWithContext<StreamChatGenerics>>;
/**
 * FileUploadPreview
 * UI Component to preview the files set for upload
 */
export declare const FileUploadPreview: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<FileUploadPreviewPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=FileUploadPreview.d.ts.map