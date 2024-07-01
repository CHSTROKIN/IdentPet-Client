import type { Attachment } from 'stream-chat';
import type { GallerySizeAndThumbnailGrid, GallerySizeConfig } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
export declare function buildGalleryOfTwoImages<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ images, sizeConfig, }: {
    images: Attachment<StreamChatGenerics>[];
    sizeConfig: GallerySizeConfig;
}): GallerySizeAndThumbnailGrid;
//# sourceMappingURL=buildGalleryOfTwoImages.d.ts.map