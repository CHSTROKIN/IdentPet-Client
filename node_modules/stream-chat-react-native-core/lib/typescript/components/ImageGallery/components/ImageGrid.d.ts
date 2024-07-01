import React from 'react';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import type { Photo } from '../ImageGallery';
export type ImageGalleryGridImageComponent<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ({ item, }: {
    item: Photo<StreamChatGenerics> & {
        selectAndClose: () => void;
        numberOfImageGalleryGridColumns?: number;
    };
}) => React.ReactElement | null;
export type ImageGalleryGridImageComponents<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    avatarComponent?: ImageGalleryGridImageComponent<StreamChatGenerics>;
    imageComponent?: ImageGalleryGridImageComponent<StreamChatGenerics>;
};
export type GridImageItem<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Photo<StreamChatGenerics> & ImageGalleryGridImageComponents<StreamChatGenerics> & {
    selectAndClose: () => void;
    numberOfImageGalleryGridColumns?: number;
};
export type ImageGridType<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = ImageGalleryGridImageComponents<StreamChatGenerics> & {
    closeGridView: () => void;
    photos: Photo<StreamChatGenerics>[];
    setSelectedMessage: React.Dispatch<React.SetStateAction<{
        messageId?: string | undefined;
        url?: string | undefined;
    } | undefined>>;
    numberOfImageGalleryGridColumns?: number;
};
export declare const ImageGrid: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ImageGridType<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ImageGrid.d.ts.map