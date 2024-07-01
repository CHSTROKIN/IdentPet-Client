import type { MessageLabel, Role } from 'stream-chat';
import type { PendingTaskTypes } from './types';
import type { ValueOf } from '../types/types';
type Tables = {
    [P in keyof Schema]: {
        columns: {
            [K in keyof Schema[P]]: string;
        };
        foreignKeys?: Array<{
            column: `${Exclude<keyof Schema[P], symbol>}`;
            referenceTable: `${keyof Schema}`;
            referenceTableColumn: string;
            onDeleteAction?: 'NO ACTION' | 'RESTRICT' | 'SET NULL' | 'SET DEFAULT' | 'CASCADE';
        }>;
        indexes?: Array<{
            columns: Array<keyof Schema[P]>;
            name: string;
            unique: boolean;
        }>;
        primaryKey?: Array<keyof Schema[P]>;
    };
};
export declare const tables: Tables;
export type Schema = {
    channelQueries: {
        cids: string;
        id: string;
    };
    channels: {
        cid: string;
        extraData: string;
        id: string;
        type: string;
        autoTranslationEnabled?: boolean;
        autoTranslationLanguage?: string;
        config?: string;
        cooldown?: number;
        createdAt?: string;
        createdById?: string;
        deletedAt?: string;
        disabled?: boolean;
        frozen?: boolean;
        hidden?: boolean;
        invites?: string;
        lastMessageAt?: string;
        memberCount?: number;
        muted?: boolean;
        ownCapabilities?: string;
        team?: string;
        truncatedAt?: string;
        truncatedBy?: string;
        truncatedById?: string;
        updatedAt?: string;
    };
    members: {
        cid: string;
        banned?: boolean;
        channelRole?: Role;
        createdAt?: string;
        inviteAcceptedAt?: string;
        invited?: boolean;
        inviteRejectedAt?: string;
        isModerator?: boolean;
        role?: string;
        shadowBanned?: boolean;
        updatedAt?: string;
        userId?: string;
    };
    messages: {
        attachments: string;
        cid: string;
        createdAt: string;
        deletedAt: string;
        extraData: string;
        id: string;
        reactionCounts: string;
        type: MessageLabel;
        updatedAt: string;
        text?: string;
        userId?: string;
    };
    pendingTasks: {
        channelId: string;
        channelType: string;
        createdAt: string;
        id: number;
        messageId: string;
        payload: string;
        type: ValueOf<PendingTaskTypes>;
    };
    reactions: {
        createdAt: string;
        messageId: string;
        type: string;
        updatedAt: string;
        extraData?: string;
        score?: number;
        userId?: string;
    };
    reads: {
        cid: string;
        lastRead: string;
        unreadMessages?: number;
        userId?: string;
    };
    users: {
        id: string;
        banned?: boolean;
        createdAt?: string;
        extraData?: string;
        lastActive?: string;
        online?: boolean;
        role?: string;
        updatedAt?: string;
    };
    userSyncStatus: {
        appSettings: string;
        lastSyncedAt: string;
        userId: string;
    };
};
export {};
//# sourceMappingURL=schema.d.ts.map