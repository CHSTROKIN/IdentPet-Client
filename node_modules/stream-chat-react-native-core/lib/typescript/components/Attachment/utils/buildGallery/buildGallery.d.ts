import type { Attachment } from 'stream-chat';
import type { GallerySizeAndThumbnailGrid, GallerySizeConfig } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
/**
 * Builds and returns a gallery of optimized images to be rendered on UI.
 * This function take a object parameter with following properties:
 *
 * @param {Attachment[]} images - Array of image attachments
 * @param {GallerySizeConfig} sizeConfig - Theme config for the gallery
 *
 * The returned object contains following properties:
 *
 * - height {number[]} - Height of the gallery
 * - width {number[]} - Width of the gallery
 * - thumbnailGrid {number[][]} - Grid of thumbnail images
 * - invertedDirections {boolean} - Whether to invert the direction of the grid. By default grid is rendered with column as primary direction and row as secondary direction.
 *
 * @return {GallerySizeAndThumbnailGrid}
 */
export declare function buildGallery<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ images, sizeConfig, }: {
    images: Attachment<StreamChatGenerics>[];
    sizeConfig: GallerySizeConfig;
}): GallerySizeAndThumbnailGrid;
//# sourceMappingURL=buildGallery.d.ts.map