import React from 'react';
import { ChatContextValue } from '../../../contexts/chatContext/ChatContext';
import { MessageContextValue } from '../../../contexts/messageContext/MessageContext';
import type { DefaultStreamChatGenerics } from '../../../types/types';
import { AvatarProps } from '../../Avatar/Avatar';
export type MessageAvatarPropsWithContext<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<MessageContextValue<StreamChatGenerics>, 'alignment' | 'lastGroupMessage' | 'message' | 'showAvatar'> & Pick<ChatContextValue<StreamChatGenerics>, 'ImageComponent'> & Partial<Pick<AvatarProps, 'size'>>;
export type MessageAvatarProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Partial<MessageAvatarPropsWithContext<StreamChatGenerics>>;
export declare const MessageAvatar: {
    <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: Partial<MessageAvatarPropsWithContext<StreamChatGenerics>>): React.JSX.Element;
    displayName: string;
};
//# sourceMappingURL=MessageAvatar.d.ts.map