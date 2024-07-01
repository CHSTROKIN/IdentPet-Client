import React from 'react';
import type { Attachment } from 'stream-chat';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { ImageGalleryContextValue } from '../../contexts/imageGalleryContext/ImageGalleryContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type GiphyPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ImageGalleryContextValue<StreamChatGenerics>, 'setSelectedMessage' | 'setMessages'> & Pick<MessageContextValue<StreamChatGenerics>, 'handleAction' | 'isMyMessage' | 'message' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress'> & Pick<ChatContextValue<StreamChatGenerics>, 'ImageComponent'> & Pick<MessagesContextValue<StreamChatGenerics>, 'giphyVersion' | 'additionalTouchableProps' | 'ImageLoadingIndicator' | 'ImageLoadingFailedIndicator'> & {
    attachment: Attachment<StreamChatGenerics>;
} & Pick<OverlayContextValue, 'setOverlay'>;
export type GiphyProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<GiphyPropsWithContext<StreamChatGenerics>> & {
    attachment: Attachment<StreamChatGenerics>;
};
/**
 * UI component for card in attachments.
 */
export declare const Giphy: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: GiphyProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=Giphy.d.ts.map