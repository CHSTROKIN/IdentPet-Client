import React, { PropsWithChildren } from 'react';
import type { CommandResponse, UserResponse } from 'stream-chat';
import type { AutoCompleteSuggestionHeaderProps } from '../../components/AutoCompleteInput/AutoCompleteSuggestionHeader';
import type { AutoCompleteSuggestionItemProps } from '../../components/AutoCompleteInput/AutoCompleteSuggestionItem';
import type { AutoCompleteSuggestionListProps } from '../../components/AutoCompleteInput/AutoCompleteSuggestionList';
import type { Emoji } from '../../emoji-data';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type SuggestionComponentType = 'command' | 'emoji' | 'mention';
export declare const isSuggestionCommand: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(suggestion: Suggestion<StreamChatGenerics>) => suggestion is SuggestionCommand<StreamChatGenerics>;
export declare const isSuggestionEmoji: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(suggestion: Suggestion<StreamChatGenerics>) => suggestion is Emoji;
export declare const isSuggestionUser: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(suggestion: Suggestion<StreamChatGenerics>) => suggestion is SuggestionUser<StreamChatGenerics>;
export type Suggestion<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Emoji | SuggestionCommand<StreamChatGenerics> | SuggestionUser<StreamChatGenerics>;
export type SuggestionCommand<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = CommandResponse<StreamChatGenerics>;
export type SuggestionUser<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = UserResponse<StreamChatGenerics>;
export type Suggestions<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    data: Suggestion<StreamChatGenerics>[];
    onSelect: (item: Suggestion<StreamChatGenerics>) => void;
    queryText?: string;
};
export type SuggestionsContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    AutoCompleteSuggestionHeader: React.ComponentType<AutoCompleteSuggestionHeaderProps>;
    AutoCompleteSuggestionItem: React.ComponentType<AutoCompleteSuggestionItemProps<StreamChatGenerics>>;
    AutoCompleteSuggestionList: React.ComponentType<AutoCompleteSuggestionListProps<StreamChatGenerics>>;
    /** Override handler for closing suggestions (mentions, command autocomplete etc) */
    closeSuggestions: () => void;
    /**
     * Override handler for opening suggestions (mentions, command autocomplete etc)
     *
     * @param component {Component|element} UI Component for suggestion item.
     * @overrideType Function
     */
    openSuggestions: (component: SuggestionComponentType) => Promise<void>;
    suggestions: Suggestions<StreamChatGenerics>;
    triggerType: SuggestionComponentType;
    /**
     * Override handler for updating suggestions (mentions, command autocomplete etc)
     *
     * @param newSuggestions {Component|element} UI Component for suggestion item.
     * @overrideType Function
     */
    updateSuggestions: (newSuggestions: Suggestions<StreamChatGenerics>) => void;
    queryText?: string;
    suggestionsViewActive?: boolean;
};
export declare const SuggestionsContext: React.Context<SuggestionsContextValue<DefaultStreamChatGenerics>>;
/**
 * This provider component exposes the properties stored within the SuggestionsContext.
 */
export declare const SuggestionsProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value?: Partial<SuggestionsContextValue<StreamChatGenerics>> | undefined;
}>) => React.JSX.Element;
export declare const useSuggestionsContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => SuggestionsContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withSuggestionsContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withSuggestionsContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof SuggestionsContextValue<StreamChatGenerics>>>;
//# sourceMappingURL=SuggestionsContext.d.ts.map