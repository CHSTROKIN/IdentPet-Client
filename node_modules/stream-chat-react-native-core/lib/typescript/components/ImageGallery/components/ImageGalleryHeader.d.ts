import React from 'react';
import Animated from 'react-native-reanimated';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { Photo } from '../ImageGallery';
export type ImageGalleryHeaderCustomComponent<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ({ hideOverlay, photo, }: {
    hideOverlay: () => void;
    photo?: Photo<StreamChatGenerics>;
}) => React.ReactElement | null;
export type ImageGalleryHeaderCustomComponentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    centerElement?: ImageGalleryHeaderCustomComponent<StreamChatGenerics>;
    CloseIcon?: React.ReactElement;
    leftElement?: ImageGalleryHeaderCustomComponent<StreamChatGenerics>;
    rightElement?: ImageGalleryHeaderCustomComponent<StreamChatGenerics>;
};
type Props<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ImageGalleryHeaderCustomComponentProps<StreamChatGenerics> & {
    opacity: Animated.SharedValue<number>;
    visible: Animated.SharedValue<number>;
    photo?: Photo<StreamChatGenerics>;
};
export declare const ImageGalleryHeader: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Props<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ImageGalleryHeader.d.ts.map