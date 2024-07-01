import { Logger } from 'stream-chat';
import type { PreparedQueries } from './types';
/**
 * QuickSqliteClient takes care of any direct interaction with sqlite.
 * This way usage react-native-quick-sqlite package is scoped to a single class/file.
 *
 */
export declare class QuickSqliteClient {
    static dbVersion: number;
    static dbName: string;
    static dbLocation: string;
    static logger: Logger | undefined;
    static getDbVersion: () => number;
    static setDbVersion: (version: number) => number;
    static openDB: () => void;
    static closeDB: () => void;
    static executeSqlBatch: (queries: PreparedQueries[]) => void;
    static executeSql: (query: string, params?: string[]) => any[];
    static dropTables: () => void;
    static deleteDatabase: () => boolean;
    static initializeDatabase: () => void;
    static updateUserPragmaVersion: (version: number) => void;
    static getUserPragmaVersion: () => number;
    static resetDB: () => void;
}
//# sourceMappingURL=QuickSqliteClient.d.ts.map