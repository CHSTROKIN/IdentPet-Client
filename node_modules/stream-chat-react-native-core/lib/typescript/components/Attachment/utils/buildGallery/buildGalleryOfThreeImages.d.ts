import type { Attachment } from 'stream-chat';
import type { GallerySizeAndThumbnailGrid, GallerySizeConfig } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
export declare function buildGalleryOfThreeImages<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ images, sizeConfig, }: {
    images: Attachment<StreamChatGenerics>[];
    sizeConfig: GallerySizeConfig;
}): GallerySizeAndThumbnailGrid;
//# sourceMappingURL=buildGalleryOfThreeImages.d.ts.map