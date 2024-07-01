import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableColumnValue, TableRow } from '../types';
/**
 * Creates a simple update query for sqlite.
 *
 * @param {string} table Table name
 * @param {Object} set Set conditions for update query.
 * @param {Object} whereCondition Where condition for select query.
 *  e.g., { id: 'vishal', cid: ['messaging:id1', 'messaging:id2'] }.
 *  All the conditions will be joined with AND in final query.
 * @returns {string} Final update query for sqlite
 */
export declare const createUpdateQuery: <T extends keyof Schema>(table: T, set: Partial<TableRow<T>>, whereCondition: Partial<{ [k in keyof Schema[T]]: TableColumnValue | TableColumnValue[]; }>) => PreparedQueries;
//# sourceMappingURL=createUpdateQuery.d.ts.map