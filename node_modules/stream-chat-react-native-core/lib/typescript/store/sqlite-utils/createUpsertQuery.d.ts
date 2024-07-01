import { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableRow } from '../types';
/**
 * Creates a simple upsert query for sqlite.
 *
 * @param {string} table Table name
 * @param {Object} row Table row to insert or update.
 * @param {Array} conflictCheckKeys Custom list of columns to check conflicts for - https://www.sqlite.org/lang_UPSERT.html. By default conflicts are checked on primary keys.
 * @returns {string} Final upsert query for sqlite
 */
export declare const createUpsertQuery: <T extends keyof Schema>(table: T, row: Partial<TableRow<T>>, conflictCheckKeys?: (keyof Schema[T])[] | undefined) => PreparedQueries;
//# sourceMappingURL=createUpsertQuery.d.ts.map