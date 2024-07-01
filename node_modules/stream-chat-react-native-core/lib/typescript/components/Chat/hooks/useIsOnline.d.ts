import type { StreamChat } from 'stream-chat';
import type { DefaultStreamChatGenerics } from '../../../types/types';
/**
 * Disconnect the websocket connection when app goes to background,
 * and reconnect when app comes to foreground.
 * We do this to make sure the user receives push notifications when app is in the background.
 * You can't receive push notification until you have active websocket connection.
 */
export declare const useIsOnline: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(client: StreamChat<StreamChatGenerics>, closeConnectionOnBackground?: boolean) => {
    connectionRecovering: boolean;
    isOnline: boolean | null;
};
//# sourceMappingURL=useIsOnline.d.ts.map