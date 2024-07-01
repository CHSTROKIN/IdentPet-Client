import React from 'react';
import type { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import type { Attachment } from 'stream-chat';
import type { AttachmentPickerProps } from '../../components/AttachmentPicker/AttachmentPicker';
import type { ImageGalleryCustomComponents } from '../../components/ImageGallery/ImageGallery';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { Streami18n } from '../../utils/Streami18n';
import type { AttachmentPickerContextValue } from '../attachmentPickerContext/AttachmentPickerContext';
import type { MessageOverlayContextValue } from '../messageOverlayContext/MessageOverlayContext';
import type { DeepPartial } from '../themeContext/ThemeContext';
import type { Theme } from '../themeContext/utils/theme';
export type Overlay = 'alert' | 'gallery' | 'message' | 'none';
export type OverlayContextValue = {
    overlay: Overlay;
    setOverlay: React.Dispatch<React.SetStateAction<Overlay>>;
    style?: DeepPartial<Theme>;
};
export declare const OverlayContext: React.Context<OverlayContextValue>;
export type OverlayProviderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AttachmentPickerProps> & Partial<Pick<AttachmentPickerContextValue, 'AttachmentPickerBottomSheetHandle' | 'attachmentPickerBottomSheetHandleHeight' | 'attachmentPickerBottomSheetHeight' | 'AttachmentPickerSelectionBar' | 'attachmentSelectionBarHeight' | 'bottomInset' | 'CameraSelectorIcon' | 'FileSelectorIcon' | 'ImageSelectorIcon' | 'topInset'>> & ImageGalleryCustomComponents<StreamChatGenerics> & Partial<Pick<MessageOverlayContextValue<StreamChatGenerics>, 'MessageActionList' | 'MessageActionListItem' | 'OverlayReactionList' | 'OverlayReactions' | 'OverlayReactionsAvatar'>> & {
    autoPlayVideo?: boolean;
    /**
     * The giphy version to render - check the keys of the [Image Object](https://developers.giphy.com/docs/api/schema#image-object) for possible values. Uses 'fixed_height' by default
     * */
    closePicker?: (ref: React.RefObject<BottomSheetMethods>) => void;
    error?: boolean | Error;
    giphyVersion?: keyof NonNullable<Attachment['giphy']>;
    /** https://github.com/GetStream/stream-chat-react-native/wiki/Internationalization-(i18n) */
    i18nInstance?: Streami18n;
    imageGalleryGridHandleHeight?: number;
    imageGalleryGridSnapPoints?: [string | number, string | number];
    isMyMessage?: boolean;
    isThreadMessage?: boolean;
    message?: MessageType<StreamChatGenerics>;
    messageReactions?: boolean;
    messageTextNumberOfLines?: number;
    numberOfImageGalleryGridColumns?: number;
    openPicker?: (ref: React.RefObject<BottomSheetMethods>) => void;
    value?: Partial<OverlayContextValue>;
};
export declare const useOverlayContext: () => OverlayContextValue;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withOverlayContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withOverlayContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<StreamChatGenerics>) => React.ComponentType<Omit<StreamChatGenerics, keyof OverlayContextValue>>;
//# sourceMappingURL=OverlayContext.d.ts.map