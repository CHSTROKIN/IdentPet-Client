import React from 'react';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import { ImageGalleryContextValue } from '../../contexts/imageGalleryContext/ImageGalleryContext';
import { MessageContextValue } from '../../contexts/messageContext/MessageContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type GalleryPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ImageGalleryContextValue<StreamChatGenerics>, 'setSelectedMessage' | 'setMessages'> & Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'groupStyles' | 'images' | 'videos' | 'onLongPress' | 'onPress' | 'onPressIn' | 'preventPress' | 'threadList'> & Pick<MessagesContextValue<StreamChatGenerics>, 'additionalTouchableProps' | 'legacyImageViewerSwipeBehaviour' | 'VideoThumbnail' | 'ImageLoadingIndicator' | 'ImageLoadingFailedIndicator' | 'myMessageTheme'> & Pick<OverlayContextValue, 'setOverlay'> & {
    channelId: string | undefined;
    hasThreadReplies?: boolean;
    /**
     * `message` prop has been introduced here as part of `legacyImageViewerSwipeBehaviour` prop.
     * https://github.com/GetStream/stream-chat-react-native/commit/d5eac6193047916f140efe8e396a671675c9a63f
     * messageId and messageText may seem redundant now, but to avoid breaking change as part
     * of minor release, we are keeping those props.
     *
     * Also `message` type should ideally be imported from MessageContextValue and not be explicitely mentioned
     * here, but due to some circular dependencies within the SDK, it causes "excessive deep nesting" issue with
     * typescript within Channel component. We should take it as a mini-project and resolve all these circular imports.
     *
     * TODO: Fix circular dependencies of imports
     */
    message?: MessageType<StreamChatGenerics>;
};
export type GalleryProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<GalleryPropsWithContext<StreamChatGenerics>>;
/**
 * UI component for card in attachments.
 */
export declare const Gallery: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<GalleryPropsWithContext<StreamChatGenerics>>): React.JSX.Element | null;
    displayName: string;
};
//# sourceMappingURL=Gallery.d.ts.map