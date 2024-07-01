import React from 'react';
import Animated from 'react-native-reanimated';
import type { UserResponse } from 'stream-chat';
import { ImageGalleryFooterCustomComponentProps } from './components/ImageGalleryFooter';
import { ImageGalleryHeaderCustomComponentProps } from './components/ImageGalleryHeader';
import { ImageGalleryGridImageComponents } from './components/ImageGrid';
import { ImageGalleryGridHandleCustomComponentProps } from './components/ImageGridHandle';
import { OverlayProviderProps } from '../../contexts/overlayContext/OverlayContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export declare enum HasPinched {
    FALSE = 0,
    TRUE = 1
}
export declare enum IsSwiping {
    UNDETERMINED = 0,
    TRUE = 1,
    FALSE = 2
}
export type ImageGalleryCustomComponents<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /**
     * Override props for following UI components, which are part of [image gallery](https://github.com/GetStream/stream-chat-react-native/wiki/Cookbook-v3.0#gallery-components).
     *
     * - [ImageGalleryFooter](#ImageGalleryFooter)
     *
     * - [ImageGrid](#ImageGrid)
     *
     * - [ImageGridHandle](#ImageGridHandle)
     *
     * - [ImageGalleryHeader](#ImageGalleryHeader)
     *
     * e.g.,
     *
     * ```js
     * {
     *  footer: {
     *    ShareIcon: CustomShareIconComponent
     *  },
     *  grid: {
     *    avatarComponent: CustomAvatarComponent
     *  },
     *  gridHandle: {
     *    centerComponent: CustomCenterComponent
     *  },
     *  header: {
     *    CloseIcon: CustomCloseButtonComponent
     *  },
     * }
     * ```
     * @overrideType object
     */
    imageGalleryCustomComponents?: {
        footer?: ImageGalleryFooterCustomComponentProps<StreamChatGenerics>;
        grid?: ImageGalleryGridImageComponents<StreamChatGenerics>;
        gridHandle?: ImageGalleryGridHandleCustomComponentProps;
        header?: ImageGalleryHeaderCustomComponentProps<StreamChatGenerics>;
    };
};
type Props<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ImageGalleryCustomComponents<StreamChatGenerics> & {
    overlayOpacity: Animated.SharedValue<number>;
} & Pick<OverlayProviderProps<StreamChatGenerics>, 'giphyVersion' | 'imageGalleryGridSnapPoints' | 'imageGalleryGridHandleHeight' | 'numberOfImageGalleryGridColumns' | 'autoPlayVideo'>;
export declare const ImageGallery: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Props<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
/**
 * Clamping worklet to clamp the scaling
 */
export declare const clamp: (value: number, lowerBound: number, upperBound: number) => number;
export type Photo<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    id: string;
    uri: string;
    channelId?: string;
    created_at?: string | Date;
    duration?: number;
    messageId?: string;
    mime_type?: string;
    original_height?: number;
    original_width?: number;
    paused?: boolean;
    progress?: number;
    thumb_url?: string;
    type?: string;
    user?: UserResponse<StreamChatGenerics> | null;
    user_id?: string;
};
export {};
//# sourceMappingURL=ImageGallery.d.ts.map