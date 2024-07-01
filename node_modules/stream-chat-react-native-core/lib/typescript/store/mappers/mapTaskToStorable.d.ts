import type { PendingTask } from '../types';
export declare const mapTaskToStorable: (task: PendingTask) => {
    createdAt: string;
    payload: string;
    channelId: string;
    channelType: string;
    messageId: string;
    id?: number | undefined;
    type: "send-reaction";
} | {
    createdAt: string;
    payload: string;
    channelId: string;
    channelType: string;
    messageId: string;
    id?: number | undefined;
    type: "delete-message";
} | {
    createdAt: string;
    payload: string;
    channelId: string;
    channelType: string;
    messageId: string;
    id?: number | undefined;
    type: "delete-reaction";
};
//# sourceMappingURL=mapTaskToStorable.d.ts.map