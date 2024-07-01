import type { Attachment } from 'stream-chat';
import type { GallerySizeAndThumbnailGrid, GallerySizeConfig } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
export declare function buildGalleryOfSingleImage<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ image, sizeConfig, }: {
    image: Attachment<StreamChatGenerics>;
    sizeConfig: GallerySizeConfig;
}): GallerySizeAndThumbnailGrid;
//# sourceMappingURL=buildGalleryOfSingleImage.d.ts.map