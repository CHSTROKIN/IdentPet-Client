import React from 'react';
import { MessageInputContextValue } from '../../contexts/messageInputContext/MessageInputContext';
import type { DefaultStreamChatGenerics } from '../../types/types';
export type InputButtonsProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<InputButtonsWithContextProps<StreamChatGenerics>>;
export type InputButtonsWithContextProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageInputContextValue<StreamChatGenerics>, 'AttachButton' | 'CommandsButton' | 'giphyActive' | 'hasCommands' | 'hasFilePicker' | 'hasImagePicker' | 'MoreOptionsButton' | 'openCommandsPicker' | 'selectedPicker' | 'setShowMoreOptions' | 'showMoreOptions' | 'text' | 'toggleAttachmentPicker'>;
export declare const InputButtonsWithContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: InputButtonsWithContextProps<StreamChatGenerics>) => React.JSX.Element | null;
export declare const InputButtons: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<InputButtonsWithContextProps<StreamChatGenerics>>) => React.JSX.Element;
//# sourceMappingURL=InputButtons.d.ts.map