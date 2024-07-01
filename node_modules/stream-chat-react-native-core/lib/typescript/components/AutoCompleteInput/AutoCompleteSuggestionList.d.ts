import React from 'react';
import type { AutoCompleteSuggestionHeaderProps } from './AutoCompleteSuggestionHeader';
import type { AutoCompleteSuggestionItemProps } from './AutoCompleteSuggestionItem';
import { Suggestion, SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type AutoCompleteSuggestionListComponentProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<SuggestionsContextValue, 'queryText' | 'triggerType'> & {
    active: boolean;
    data: Suggestion<StreamChatGenerics>[];
    onSelect: (item: Suggestion<StreamChatGenerics>) => void;
};
export type AutoCompleteSuggestionListPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<SuggestionsContextValue<StreamChatGenerics>, 'AutoCompleteSuggestionHeader' | 'AutoCompleteSuggestionItem'> & AutoCompleteSuggestionListComponentProps<StreamChatGenerics>;
export declare const AutoCompleteSuggestionListWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AutoCompleteSuggestionListPropsWithContext<StreamChatGenerics>) => React.JSX.Element | null;
export type AutoCompleteSuggestionListProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = AutoCompleteSuggestionListComponentProps<StreamChatGenerics> & {
    AutoCompleteSuggestionHeader?: React.ComponentType<AutoCompleteSuggestionHeaderProps>;
    AutoCompleteSuggestionItem?: React.ComponentType<AutoCompleteSuggestionItemProps<StreamChatGenerics>>;
};
export declare const AutoCompleteSuggestionList: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AutoCompleteSuggestionListProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AutoCompleteSuggestionList.d.ts.map