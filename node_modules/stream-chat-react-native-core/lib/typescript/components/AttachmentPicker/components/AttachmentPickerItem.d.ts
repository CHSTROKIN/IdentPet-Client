import React from 'react';
import type { AttachmentPickerContextValue } from '../../../contexts/attachmentPickerContext/AttachmentPickerContext';
import type { Asset } from '../../../types/types';
type AttachmentPickerItemType = Pick<AttachmentPickerContextValue, 'selectedFiles' | 'setSelectedFiles' | 'setSelectedImages' | 'selectedImages' | 'maxNumberOfFiles'> & {
    asset: Asset;
    ImageOverlaySelectedComponent: React.ComponentType;
    numberOfUploads: number;
    selected: boolean;
    numberOfAttachmentPickerImageColumns?: number;
};
export declare const renderAttachmentPickerItem: ({ item }: {
    item: AttachmentPickerItemType;
}) => React.JSX.Element;
export {};
//# sourceMappingURL=AttachmentPickerItem.d.ts.map