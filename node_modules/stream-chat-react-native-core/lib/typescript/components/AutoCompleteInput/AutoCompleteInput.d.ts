import React from 'react';
import { ChannelContextValue } from '../../contexts/channelContext/ChannelContext';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { SuggestionsContextValue } from '../../contexts/suggestionsContext/SuggestionsContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
type AutoCompleteInputPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChannelContextValue<StreamChatGenerics>, 'giphyEnabled'> & Pick<MessageInputContextValue<StreamChatGenerics>, 'additionalTextInputProps' | 'autoCompleteSuggestionsLimit' | 'giphyActive' | 'maxMessageLength' | 'mentionAllAppUsersEnabled' | 'mentionAllAppUsersQuery' | 'numberOfLines' | 'onChange' | 'setGiphyActive' | 'setInputBoxRef' | 'text' | 'triggerSettings'> & Pick<SuggestionsContextValue<StreamChatGenerics>, 'closeSuggestions' | 'openSuggestions' | 'updateSuggestions'> & Pick<TranslationContextValue, 't'> & {
    /**
     * This is currently passed in from MessageInput to avoid rerenders
     * that would happen if we put this in the MessageInputContext
     */
    cooldownActive?: boolean;
};
export type AutoCompleteInputProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<AutoCompleteInputPropsWithContext<StreamChatGenerics>>;
export declare const AutoCompleteInput: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<AutoCompleteInputPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=AutoCompleteInput.d.ts.map