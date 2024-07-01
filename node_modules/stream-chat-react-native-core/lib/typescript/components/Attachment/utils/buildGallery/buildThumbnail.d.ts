import type { ImageResizeMode } from 'react-native';
import type { Attachment } from 'stream-chat';
import type { Thumbnail } from './types';
import type { DefaultStreamChatGenerics } from '../../../../types/types';
export declare function buildThumbnail<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ height, image, resizeMode, width, }: {
    height: number;
    image: Attachment<StreamChatGenerics>;
    width: number;
    resizeMode?: ImageResizeMode;
}): Thumbnail;
//# sourceMappingURL=buildThumbnail.d.ts.map