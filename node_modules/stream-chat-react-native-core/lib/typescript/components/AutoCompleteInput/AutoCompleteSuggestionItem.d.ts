import React from 'react';
import type { Suggestion, SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type AutoCompleteSuggestionItemPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<SuggestionsContextValue, 'triggerType'> & {
    itemProps: Suggestion<StreamChatGenerics>;
};
export type AutoCompleteSuggestionItemProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = AutoCompleteSuggestionItemPropsWithContext<StreamChatGenerics>;
export declare const AutoCompleteSuggestionItem: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AutoCompleteSuggestionItemProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AutoCompleteSuggestionItem.d.ts.map