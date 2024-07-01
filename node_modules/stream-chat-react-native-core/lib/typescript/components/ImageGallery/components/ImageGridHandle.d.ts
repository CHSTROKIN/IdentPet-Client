import React from 'react';
export type ImageGalleryGridHandleCustomComponent = ({ closeGridView, }: {
    closeGridView: () => void;
}) => React.ReactElement | null;
export type ImageGalleryGridHandleCustomComponentProps = {
    centerComponent?: ImageGalleryGridHandleCustomComponent;
    leftComponent?: ImageGalleryGridHandleCustomComponent;
    rightComponent?: ImageGalleryGridHandleCustomComponent;
};
type Props = ImageGalleryGridHandleCustomComponentProps & {
    closeGridView: () => void;
};
export declare const ImageGridHandle: {
    (props: Props): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=ImageGridHandle.d.ts.map