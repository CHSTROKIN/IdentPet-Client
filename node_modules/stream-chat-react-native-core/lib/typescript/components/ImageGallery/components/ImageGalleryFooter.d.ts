import React from 'react';
import Animated from 'react-native-reanimated';
import { VideoType } from '../../../native';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { Photo } from '../ImageGallery';
export type ImageGalleryFooterCustomComponent<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ({ openGridView, photo, share, shareMenuOpen, }: {
    openGridView: () => void;
    share: () => Promise<void>;
    shareMenuOpen: boolean;
    photo?: Photo<StreamChatGenerics>;
}) => React.ReactElement | null;
export type ImageGalleryFooterVideoControlProps = {
    duration: number;
    onPlayPause: (status?: boolean) => void;
    paused: boolean;
    progress: number;
    videoRef: React.RefObject<VideoType>;
};
export type ImageGalleryFooterVideoControlComponent = ({ duration, onPlayPause, paused, progress, }: ImageGalleryFooterVideoControlProps) => React.ReactElement | null;
export type ImageGalleryFooterCustomComponentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    centerElement?: ImageGalleryFooterCustomComponent<StreamChatGenerics>;
    GridIcon?: React.ReactElement;
    leftElement?: ImageGalleryFooterCustomComponent<StreamChatGenerics>;
    rightElement?: ImageGalleryFooterCustomComponent<StreamChatGenerics>;
    ShareIcon?: React.ReactElement;
    videoControlElement?: ImageGalleryFooterVideoControlComponent;
};
type ImageGalleryFooterPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ImageGalleryFooterCustomComponentProps<StreamChatGenerics> & {
    accessibilityLabel: string;
    duration: number;
    onPlayPause: () => void;
    opacity: Animated.SharedValue<number>;
    openGridView: () => void;
    paused: boolean;
    photo: Photo<StreamChatGenerics>;
    photoLength: number;
    progress: number;
    selectedIndex: number;
    videoRef: React.RefObject<VideoType>;
    visible: Animated.SharedValue<number>;
};
export declare const ImageGalleryFooterWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ImageGalleryFooterPropsWithContext<StreamChatGenerics>) => React.JSX.Element;
export type ImageGalleryFooterProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ImageGalleryFooterPropsWithContext<StreamChatGenerics>;
export declare const ImageGalleryFooter: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ImageGalleryFooterProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ImageGalleryFooter.d.ts.map