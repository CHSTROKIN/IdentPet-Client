import type { Schema } from '../schema';
import type { PreparedQueries, TableColumnNames, TableColumnValue } from '../types';
/**
 * Creates a simple select query for sqlite.
 *
 * @param {string} table Table name
 * @param {Array} fields Array of columns which need to be selected e.g., ['*'] or ['id', 'name']
 * @param {Object} whereCondition Where condition for select query.
 *  e.g., { id: 'vishal', cid: ['messaging:id1', 'messaging:id2'] }.
 *  All the conditions will be joined with AND in final query.
 * @returns {string} Final select query
 */
export declare const createSelectQuery: <T extends keyof Schema>(table: T, fields?: "*"[] | (keyof Schema[T])[], whereCondition?: Partial<{ [k in keyof Schema[T]]: TableColumnValue | TableColumnValue[]; }> | undefined, orderBy?: Partial<{ [k_1 in keyof Schema[T]]: 1 | -1; }> | undefined) => PreparedQueries;
//# sourceMappingURL=createSelectQuery.d.ts.map