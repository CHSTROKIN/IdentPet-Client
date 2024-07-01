import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableColumnValue } from '../types';
/**
 * Creates a simple delete query for sqlite.
 *
 * @param {string} table Table name
 * @param {Object} whereCondition Where condition for select query.
 *  e.g., { id: 'vishal', cid: ['messaging:id1', 'messaging:id2'] }.
 *  All the conditions will be joined with AND in final query.
 * @returns {string} Final select query
 */
export declare const createDeleteQuery: <T extends keyof Schema>(table: T, whereCondition: Partial<{ [k in keyof Schema[T]]: TableColumnValue | TableColumnValue[]; }>) => PreparedQueries;
//# sourceMappingURL=createDeleteQuery.d.ts.map