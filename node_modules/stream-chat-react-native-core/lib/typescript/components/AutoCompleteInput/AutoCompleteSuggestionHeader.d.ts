import React from 'react';
import type { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type AutoCompleteSuggestionHeaderPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<SuggestionsContextValue<StreamChatGenerics>, 'triggerType' | 'queryText'>;
export type AutoCompleteSuggestionHeaderProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = AutoCompleteSuggestionHeaderPropsWithContext<StreamChatGenerics>;
export declare const AutoCompleteSuggestionHeader: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: AutoCompleteSuggestionHeaderProps<StreamChatGenerics>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=AutoCompleteSuggestionHeader.d.ts.map