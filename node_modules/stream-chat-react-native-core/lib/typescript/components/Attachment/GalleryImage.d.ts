import React from 'react';
import { ImageProps } from 'react-native';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type GalleryImageWithContextProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = GalleryImageProps & Pick<ChatContextValue<StreamChatGenerics>, 'ImageComponent'>;
export declare const GalleryImageWithContext: (props: GalleryImageWithContextProps) => React.JSX.Element;
export declare const MemoizedGalleryImage: React.MemoExoticComponent<(props: GalleryImageWithContextProps) => React.JSX.Element>;
export type GalleryImageProps = Omit<ImageProps, 'height' | 'source'> & {
    uri: string;
};
export declare const GalleryImage: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: GalleryImageProps) => React.JSX.Element;
//# sourceMappingURL=GalleryImage.d.ts.map