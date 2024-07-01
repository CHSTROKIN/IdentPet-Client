import React from 'react';
import { FlatListProps, FlatList as FlatListType, ScrollViewProps } from 'react-native';
import { MessageType } from './hooks/useMessageList';
import { AttachmentPickerContextValue } from '../../contexts/attachmentPickerContext/AttachmentPickerContext';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { ImageGalleryContextValue } from '../../contexts/imageGalleryContext/ImageGalleryContext';
import { MessagesContextValue } from '../../contexts/messagesContext/MessagesContext';
import { OverlayContextValue } from '../../contexts/overlayContext/OverlayContext';
import { PaginatedMessageListContextValue } from '../../contexts/paginatedMessageListContext/PaginatedMessageListContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type MessageListPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<AttachmentPickerContextValue, 'closePicker' | 'selectedPicker' | 'setSelectedPicker'> & Pick<ChannelContextValue<StreamChatGenerics>, 'channel' | 'disabled' | 'EmptyStateIndicator' | 'hideStickyDateHeader' | 'loadChannelAroundMessage' | 'loading' | 'LoadingIndicator' | 'markRead' | 'NetworkDownIndicator' | 'reloadChannel' | 'scrollToFirstUnreadThreshold' | 'setTargetedMessage' | 'StickyHeader' | 'targetedMessage' | 'threadList'> & Pick<ChatContextValue<StreamChatGenerics>, 'client'> & Pick<ImageGalleryContextValue<StreamChatGenerics>, 'setMessages'> & Pick<PaginatedMessageListContextValue<StreamChatGenerics>, 'hasNoMoreRecentMessagesToLoad' | 'loadMore' | 'loadMoreRecent'> & Pick<OverlayContextValue, 'overlay'> & Pick<MessagesContextValue<StreamChatGenerics>, 'DateHeader' | 'disableTypingIndicator' | 'FlatList' | 'initialScrollToFirstUnreadMessage' | 'InlineDateSeparator' | 'InlineUnreadIndicator' | 'legacyImageViewerSwipeBehaviour' | 'Message' | 'ScrollToBottomButton' | 'MessageSystem' | 'myMessageTheme' | 'TypingIndicator' | 'TypingIndicatorContainer'> & Pick<ThreadContextValue<StreamChatGenerics>, 'loadMoreThread' | 'thread'> & Pick<TranslationContextValue, 't' | 'tDateTimeParser'> & {
    /**
     * Besides existing (default) UX behavior of underlying FlatList of MessageList component, if you want
     * to attach some additional props to underlying FlatList, you can add it to following prop.
     *
     * You can find list of all the available FlatList props here - https://facebook.github.io/react-native/docs/flatlist#props
     *
     * **NOTE** Don't use `additionalFlatListProps` to get access to ref of flatlist. Use `setFlatListRef` instead.
     *
     * e.g.
     * ```js
     * <MessageList
     *  additionalFlatListProps={{ bounces: true, keyboardDismissMode: true }} />
     * ```
     */
    additionalFlatListProps?: Partial<FlatListProps<MessageType<StreamChatGenerics>>>;
    /**
     * UI component for footer of message list. By default message list will use `InlineLoadingMoreIndicator`
     * as FooterComponent. If you want to implement your own inline loading indicator, you can access `loadingMore`
     * from context.
     *
     * This is a [ListHeaderComponent](https://facebook.github.io/react-native/docs/flatlist#listheadercomponent) of FlatList
     * used in MessageList. Should be used for header by default if inverted is true or defaulted
     */
    FooterComponent?: React.ComponentType;
    /**
     * UI component for header of message list. By default message list will use `InlineLoadingMoreRecentIndicator`
     * as HeaderComponent. If you want to implement your own inline loading indicator, you can access `loadingMoreRecent`
     * from context.
     *
     * This is a [ListFooterComponent](https://facebook.github.io/react-native/docs/flatlist#listheadercomponent) of FlatList
     * used in MessageList. Should be used for header if inverted is false
     */
    HeaderComponent?: React.ComponentType;
    /** Whether or not the FlatList is inverted. Defaults to true */
    inverted?: boolean;
    isListActive?: boolean;
    /** Turn off grouping of messages by user */
    noGroupByUser?: boolean;
    onListScroll?: ScrollViewProps['onScroll'];
    /**
     * Handler to open the thread on message. This is callback for touch event for replies button.
     *
     * @param message A message object to open the thread upon.
     */
    onThreadSelect?: (message: ThreadContextValue<StreamChatGenerics>['thread']) => void;
    /**
     * Use `setFlatListRef` to get access to ref to inner FlatList.
     *
     * e.g.
     * ```js
     * <MessageList
     *  setFlatListRef={(ref) => {
     *    // Use ref for your own good
     *  }}
     * ```
     */
    setFlatListRef?: (ref: FlatListType<MessageType<StreamChatGenerics>> | null) => void;
};
export type MessageListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageListPropsWithContext<StreamChatGenerics>>;
export declare const MessageList: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageListPropsWithContext<StreamChatGenerics>>) => React.JSX.Element;
export {};
//# sourceMappingURL=MessageList.d.ts.map