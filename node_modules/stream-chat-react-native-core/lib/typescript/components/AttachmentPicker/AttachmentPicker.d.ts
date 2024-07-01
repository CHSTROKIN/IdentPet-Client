import React from 'react';
import type { AttachmentPickerErrorProps } from './components/AttachmentPickerError';
import { AttachmentPickerContextValue } from '../../contexts/attachmentPickerContext/AttachmentPickerContext';
export type AttachmentPickerProps = Pick<AttachmentPickerContextValue, 'AttachmentPickerBottomSheetHandle' | 'attachmentPickerBottomSheetHandleHeight' | 'attachmentSelectionBarHeight' | 'attachmentPickerBottomSheetHeight'> & {
    /**
     * Custom UI component to render error component while opening attachment picker.
     *
     * **Default** [AttachmentPickerError](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/AttachmentPickerError.tsx)
     */
    AttachmentPickerError: React.ComponentType<AttachmentPickerErrorProps>;
    /**
     * Custom UI component to render error image for attachment picker
     *
     * **Default** [AttachmentPickerErrorImage](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/AttachmentPickerErrorImage.tsx)
     */
    AttachmentPickerErrorImage: React.ComponentType;
    /**
     * Custom UI Component to render select more photos for selected gallery access in iOS.
     */
    AttachmentPickerIOSSelectMorePhotos: React.ComponentType;
    /**
     * Custom UI component to render overlay component, that shows up on top of [selected image](https://github.com/GetStream/stream-chat-react-native/blob/main/screenshots/docs/1.png) (with tick mark)
     *
     * **Default** [ImageOverlaySelectedComponent](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/ImageOverlaySelectedComponent.tsx)
     */
    ImageOverlaySelectedComponent: React.ComponentType;
    attachmentPickerErrorButtonText?: string;
    attachmentPickerErrorText?: string;
    numberOfAttachmentImagesToLoadPerCall?: number;
    numberOfAttachmentPickerImageColumns?: number;
};
export declare const AttachmentPicker: React.ForwardRefExoticComponent<Pick<AttachmentPickerContextValue, "AttachmentPickerBottomSheetHandle" | "attachmentPickerBottomSheetHandleHeight" | "attachmentPickerBottomSheetHeight" | "attachmentSelectionBarHeight"> & {
    /**
     * Custom UI component to render error component while opening attachment picker.
     *
     * **Default** [AttachmentPickerError](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/AttachmentPickerError.tsx)
     */
    AttachmentPickerError: React.ComponentType<AttachmentPickerErrorProps>;
    /**
     * Custom UI component to render error image for attachment picker
     *
     * **Default** [AttachmentPickerErrorImage](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/AttachmentPickerErrorImage.tsx)
     */
    AttachmentPickerErrorImage: React.ComponentType;
    /**
     * Custom UI Component to render select more photos for selected gallery access in iOS.
     */
    AttachmentPickerIOSSelectMorePhotos: React.ComponentType;
    /**
     * Custom UI component to render overlay component, that shows up on top of [selected image](https://github.com/GetStream/stream-chat-react-native/blob/main/screenshots/docs/1.png) (with tick mark)
     *
     * **Default** [ImageOverlaySelectedComponent](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/components/AttachmentPicker/components/ImageOverlaySelectedComponent.tsx)
     */
    ImageOverlaySelectedComponent: React.ComponentType;
    attachmentPickerErrorButtonText?: string | undefined;
    attachmentPickerErrorText?: string | undefined;
    numberOfAttachmentImagesToLoadPerCall?: number | undefined;
    numberOfAttachmentPickerImageColumns?: number | undefined;
} & React.RefAttributes<import("@gorhom/bottom-sheet/lib/typescript/types").BottomSheetMethods>>;
//# sourceMappingURL=AttachmentPicker.d.ts.map