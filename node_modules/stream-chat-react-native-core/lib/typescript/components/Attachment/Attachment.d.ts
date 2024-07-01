import React from 'react';
import type { Attachment as AttachmentType } from 'stream-chat';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ActionHandler = (name: string, value: string) => void;
export type AttachmentPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessagesContextValue<StreamChatGenerics>, 'AttachmentActions' | 'Card' | 'FileAttachment' | 'Gallery' | 'giphyVersion' | 'Giphy' | 'isAttachmentEqual' | 'UrlPreview' | 'myMessageTheme'> & {
    /**
     * The attachment to render
     */
    attachment: AttachmentType<StreamChatGenerics>;
};
export type AttachmentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<Pick<MessagesContextValue<StreamChatGenerics>, 'AttachmentActions' | 'Card' | 'FileAttachment' | 'Gallery' | 'Giphy' | 'giphyVersion' | 'myMessageTheme' | 'UrlPreview' | 'isAttachmentEqual'>> & Pick<AttachmentPropsWithContext<StreamChatGenerics>, 'attachment'>;
/**
 * Attachment - The message attachment
 */
export declare const Attachment: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AttachmentProps<StreamChatGenerics>) => React.JSX.Element | null;
//# sourceMappingURL=Attachment.d.ts.map