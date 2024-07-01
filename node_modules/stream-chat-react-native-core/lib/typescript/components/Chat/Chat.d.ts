import React, { PropsWithChildren } from 'react';
import { ChatContextValue } from '../../contexts/chatContext/ChatContext';
import { DeepPartial } from '../../contexts/themeContext/ThemeContext';
import type { Theme } from '../../contexts/themeContext/utils/theme';
import type { DefaultStreamChatGenerics } from '../../types/types';
import type { Streami18n } from '../../utils/Streami18n';
export type ChatProps<StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics> = Pick<ChatContextValue<StreamChatGenerics>, 'client'> & Partial<Pick<ChatContextValue<StreamChatGenerics>, 'ImageComponent' | 'resizableCDNHosts'>> & {
    /**
     * When false, ws connection won't be disconnection upon backgrounding the app.
     * To receive push notifications, its necessary that user doesn't have active
     * websocket connection. So by default, we disconnect websocket connection when
     * app goes to background, and reconnect when app comes to foreground.
     */
    closeConnectionOnBackground?: boolean;
    /**
     * Enables offline storage and loading for chat data.
     */
    enableOfflineSupport?: boolean;
    /**
     * Instance of Streami18n class should be provided to Chat component to enable internationalization.
     *
     * Stream provides following list of in-built translations:
     * 1. English (en)
     * 2. Dutch (nl)
     * 3. ...
     * 4. ...
     *
     * Simplest way to start using chat components in one of the in-built languages would be following:
     *
     * ```
     * const i18n = new Streami18n('nl');
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     *
     * If you would like to override certain keys in in-built translation.
     * UI will be automatically updated in this case.
     *
     * ```
     * const i18n = new Streami18n('nl');
     *
     * i18n.registerTranslation('nl', {
     *  'Nothing yet...': 'Nog Niet ...',
     *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} en {{ secondUser }} zijn aan het typen...',
     * });
     *
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     *
     * You can use the same function to add whole new language.
     *
     * ```
     * const i18n = new Streami18n('it');
     *
     * i18n.registerTranslation('it', {
     *  'Nothing yet...': 'Non ancora ...',
     *  '{{ firstUser }} and {{ secondUser }} are typing...': '{{ firstUser }} a {{ secondUser }} stanno scrivendo...',
     * });
     *
     * // Make sure to call setLanguage to reflect new language in UI.
     * i18n.setLanguage('it');
     * <Chat client={chatClient} i18nInstance={i18n}>
     *  ...
     * </Chat>
     * ```
     */
    i18nInstance?: Streami18n;
    /**
     * You can pass the theme object to customize the styles of Chat components. You can check the default theme in [theme.ts](https://github.com/GetStream/stream-chat-react-native/blob/main/package/src/contexts/themeContext/utils/theme.ts)
     *
     * Please check section about [themes in cookbook](https://github.com/GetStream/stream-chat-react-native/wiki/Cookbook-v3.0#theme) for details.
     *
     * ```
     * import type { DeepPartial, Theme } from 'stream-chat-react-native';
     *
     * const theme: DeepPartial<Theme> = {
     *   messageSimple: {
     *     file: {
     *       container: {
     *         backgroundColor: 'red',
     *       },
     *       icon: {
     *         height: 16,
     *         width: 16,
     *       },
     *     },
     *   },
     * };
     *
     * <Chat style={theme}>
     * </Chat>
     * ```
     *
     * @overrideType object
     */
    style?: DeepPartial<Theme>;
};
/**
 * Chat - Wrapper component for Chat. The needs to be placed around any other chat components.
 * This Chat component provides the ChatContext to all other components.
 *
 * The ChatContext provides the following props:
 *
 * - channel - currently active channel
 * - client - client connection
 * - connectionRecovering - whether or not websocket is reconnecting
 * - isOnline - whether or not set user is active
 * - setActiveChannel - function to set the currently active channel
 *
 * The Chat Component takes the following generics in order:
 * - At (AttachmentType) - custom Attachment object extension
 * - Ct (ChannelType) - custom Channel object extension
 * - Co (CommandType) - custom Command string union extension
 * - Ev (EventType) - custom Event object extension
 * - Me (MessageType) - custom Message object extension
 * - Re (ReactionType) - custom Reaction object extension
 * - Us (UserType) - custom User object extension
 */
export declare const Chat: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(props: React.PropsWithChildren<ChatProps<StreamChatGenerics>>) => React.JSX.Element;
//# sourceMappingURL=Chat.d.ts.map