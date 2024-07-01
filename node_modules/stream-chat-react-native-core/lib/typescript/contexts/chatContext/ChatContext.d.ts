import React, { PropsWithChildren } from 'react';
import type { ImageProps } from 'react-native';
import type { AppSettingsAPIResponse, Channel, Mute, StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics, UnknownType } from '../../types/types';
export type ChatContextValue<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = {
    /**
     * Object of application settings returned from Stream.
     * */
    appSettings: AppSettingsAPIResponse<StreamChatGenerics> | null;
    /**
     * The StreamChat client object
     *
     * ```
     * import { StreamChat } from 'stream-chat';
     * import { Chat } from 'stream-chat-react-native';
     *
     * const client = StreamChat.getInstance('api_key);
     * await client.connectUser('user_id', 'userToken');
     *
     * <Chat client={client}>
     * </Chat>
     * ```
     *
     * @overrideType StreamChat
     * */
    client: StreamChat<StreamChatGenerics>;
    connectionRecovering: boolean;
    enableOfflineSupport: boolean;
    /**
     * Drop in replacement of all the underlying Image components within SDK. This is useful for the purpose of offline caching of images. Please check the Offline Support Guide for usage.
     */
    ImageComponent: React.ComponentType<ImageProps>;
    isOnline: boolean | null;
    mutedUsers: Mute<StreamChatGenerics>[];
    /**
     * @param newChannel Channel to set as active.
     *
     * @overrideType Function
     */
    setActiveChannel: (newChannel?: Channel<StreamChatGenerics>) => void;
    /**
     * Instance of channel object from stream-chat package.
     *
     * Please check the docs around how to create or query channel - https://getstream.io/chat/docs/javascript/creating_channels/?language=javascript
     *
     * ```
     * import { StreamChat, Channel } from 'stream-chat';
     * import { Chat, Channel} from 'stream-chat-react-native';
     *
     * const client = StreamChat.getInstance('api_key');
     * await client.connectUser('user_id', 'user_token');
     * const channel = client.channel('messaging', 'channel_id');
     * await channel.watch();
     * ```
     *
     * @overrideType Channel
     */
    channel?: Channel<StreamChatGenerics>;
    /**
     * This option allows you to specify a list of CDNs that offer image resizing.
     */
    resizableCDNHosts?: string[];
};
export declare const ChatContext: React.Context<ChatContextValue<DefaultStreamChatGenerics>>;
export declare const ChatProvider: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ children, value, }: React.PropsWithChildren<{
    value?: ChatContextValue<StreamChatGenerics> | undefined;
}>) => React.JSX.Element;
export declare const useChatContext: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>() => ChatContextValue<StreamChatGenerics>;
/**
 * @deprecated
 *
 * This will be removed in the next major version.
 *
 * Typescript currently does not support partial inference so if ChatContext
 * typing is desired while using the HOC withChatContext the Props for the
 * wrapped component must be provided as the first generic.
 */
export declare const withChatContext: <P extends UnknownType, StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(Component: React.ComponentType<P>) => React.ComponentType<Omit<P, keyof ChatContextValue<StreamChatGenerics>>>;
//# sourceMappingURL=ChatContext.d.ts.map