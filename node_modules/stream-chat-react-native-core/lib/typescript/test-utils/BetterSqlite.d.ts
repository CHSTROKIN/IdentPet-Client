export class BetterSqlite {
    static openDB: () => void;
    static closeDB: () => void;
    static getTables: () => unknown;
    static dropAllTables: () => void;
    static selectFromTable: (table: any) => unknown[];
    db: null;
}
//# sourceMappingURL=BetterSqlite.d.ts.map