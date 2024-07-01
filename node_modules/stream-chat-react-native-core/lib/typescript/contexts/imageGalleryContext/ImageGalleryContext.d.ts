import React, { PropsWithChildren } from 'react';
import type { MessageType } from '../../components/MessageList/hooks/useMessageList';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
type SelectedMessage = {
    messageId?: string;
    url?: string;
};
export type ImageGalleryContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    messages: MessageType<StreamChatGenerics>[];
    setMessages: React.Dispatch<React.SetStateAction<MessageType<StreamChatGenerics>[]>>;
    setSelectedMessage: React.Dispatch<React.SetStateAction<SelectedMessage | undefined>>;
    selectedMessage?: SelectedMessage;
};
export declare const ImageGalleryContext: React.Context<ImageGalleryContextValue<DefaultStreamChatGenerics>>;
export declare const ImageGalleryProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, }: PropsWithChildren<UnknownType>) => React.JSX.Element;
export declare const useImageGalleryContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => ImageGalleryContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withImageGalleryContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withImageGalleryContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof ImageGalleryContextValue<StreamChatGenerics>>>;
export {};
//# sourceMappingURL=ImageGalleryContext.d.ts.map