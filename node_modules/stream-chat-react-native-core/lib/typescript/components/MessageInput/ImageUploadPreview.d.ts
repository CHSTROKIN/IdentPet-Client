import React from 'react';
import { ChatContextValue } from '../../contexts';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type ImageUploadPreviewPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'imageUploads' | 'removeImage' | 'uploadImage'> & Pick<ChatContextValue<StreamChatGenerics>, 'enableOfflineSupport'>;
export type ImageUploadPreviewProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<ImageUploadPreviewPropsWithContext<StreamChatGenerics>>;
/**
 * UI Component to preview the images set for upload
 */
export declare const ImageUploadPreview: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<ImageUploadPreviewPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ImageUploadPreview.d.ts.map