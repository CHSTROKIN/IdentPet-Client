import type { StreamChat } from 'stream-chat';
import type { PendingTask } from '../store/types';
import type { DefaultStreamChatGenerics } from '../types/types';
export declare class DBSyncManager {
    static syncStatus: boolean;
    static listeners: Array<(status: boolean) => void>;
    static client: StreamChat | null;
    /**
     * Returns weather channel states in local DB are synced with backend or not.
     * @returns boolean
     */
    static getSyncStatus: () => boolean;
    /**
     * Initializes the DBSyncManager. This function should be called only once
     * throughout the lifetime of SDK.
     *
     * @param client
     */
    static init: (client: StreamChat) => Promise<void>;
    /**
     * Subscribes a listener for sync status change.
     *
     * @param listener {function}
     * @returns {function} to unsubscribe the listener.
     */
    static onSyncStatusChange: (listener: (status: boolean) => void) => {
        unsubscribe: () => void;
    };
    static sync: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(client: StreamChat<StreamChatGenerics>) => Promise<void>;
    static syncAndExecutePendingTasks: () => Promise<void>;
    static queueTask: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ client, task, }: {
        client: StreamChat<StreamChatGenerics>;
        task: PendingTask;
    }) => Promise<(import("stream-chat").APIResponse & {
        message: import("stream-chat").MessageResponse<StreamChatGenerics>;
    }) | undefined>;
    static executeTask: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>({ client, task, }: {
        client: StreamChat<StreamChatGenerics>;
        task: PendingTask;
    }) => Promise<import("stream-chat").APIResponse & {
        message: import("stream-chat").MessageResponse<StreamChatGenerics>;
    }>;
    static executePendingTasks: <StreamChatGenerics extends DefaultStreamChatGenerics = DefaultStreamChatGenerics>(client: StreamChat<StreamChatGenerics>) => Promise<void>;
    static dropPendingTasks: (conditions: {
        messageId: string;
    }) => void;
}
//# sourceMappingURL=DBSyncManager.d.ts.map