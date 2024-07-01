import React from 'react';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import { ThreadContextValue } from '../../contexts/threadContext/ThreadContext';
import { TranslationContextValue } from '../../contexts/translationContext/TranslationContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type ShowThreadMessageInChannelButtonWithContextProps = Pick<MessageInputContextValue, 'sendThreadMessageInChannel' | 'setSendThreadMessageInChannel'> & Pick<ThreadContextValue, 'allowThreadMessagesInChannel'> & Pick<TranslationContextValue, 't'> & {
    threadList?: boolean;
};
export declare const ShowThreadMessageInChannelButtonWithContext: (props: ShowThreadMessageInChannelButtonWithContextProps) => React.JSX.Element | null;
export type ShowThreadMessageInChannelButtonProps = Partial<ShowThreadMessageInChannelButtonWithContextProps>;
export declare const ShowThreadMessageInChannelButton: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: ShowThreadMessageInChannelButtonProps): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=ShowThreadMessageInChannelButton.d.ts.map