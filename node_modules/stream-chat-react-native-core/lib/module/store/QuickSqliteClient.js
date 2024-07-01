var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickSqliteClient = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _constants = require("./constants");
var _schema = require("./schema");
var _createCreateTableQuery = require("./sqlite-utils/createCreateTableQuery");
var sqlite;
try {
  sqlite = require('react-native-quick-sqlite').QuickSQLite;
} catch (e) {
  var isRemoteDebuggerError = e instanceof Error && e.message.includes('Failed to install');
  if (isRemoteDebuggerError) {
    throw e;
  }
}
var QuickSqliteClient = (0, _createClass2["default"])(function QuickSqliteClient() {
  (0, _classCallCheck2["default"])(this, QuickSqliteClient);
});
exports.QuickSqliteClient = QuickSqliteClient;
QuickSqliteClient.dbVersion = 3;
QuickSqliteClient.dbName = _constants.DB_NAME;
QuickSqliteClient.dbLocation = _constants.DB_LOCATION;
QuickSqliteClient.getDbVersion = function () {
  return QuickSqliteClient.dbVersion;
};
QuickSqliteClient.setDbVersion = function (version) {
  return QuickSqliteClient.dbVersion = version;
};
QuickSqliteClient.openDB = function () {
  try {
    sqlite.open(QuickSqliteClient.dbName, QuickSqliteClient.dbLocation);
    sqlite.execute(QuickSqliteClient.dbName, "PRAGMA foreign_keys = ON", []);
  } catch (e) {
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('error', "Error opening database ".concat(QuickSqliteClient.dbName), {
      error: e
    });
    console.error("Error opening database ".concat(QuickSqliteClient.dbName, ": ").concat(e));
  }
};
QuickSqliteClient.closeDB = function () {
  try {
    sqlite.close(QuickSqliteClient.dbName);
  } catch (e) {
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('error', "Error closing database ".concat(QuickSqliteClient.dbName), {
      error: e
    });
    console.error("Error closing database ".concat(QuickSqliteClient.dbName, ": ").concat(e));
  }
};
QuickSqliteClient.executeSqlBatch = function (queries) {
  if (!queries || !queries.length) return;
  QuickSqliteClient.openDB();
  try {
    sqlite.executeBatch(_constants.DB_NAME, queries);
    QuickSqliteClient.closeDB();
  } catch (e) {
    QuickSqliteClient.closeDB();
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('error', "SqlBatch queries failed", {
      error: e,
      queries: queries
    });
    throw new Error("Queries failed: ".concat(e));
  }
};
QuickSqliteClient.executeSql = function (query, params) {
  try {
    QuickSqliteClient.openDB();
    var _sqlite$execute = sqlite.execute(_constants.DB_NAME, query, params),
      rows = _sqlite$execute.rows;
    QuickSqliteClient.closeDB();
    return rows ? rows._array : [];
  } catch (e) {
    QuickSqliteClient.closeDB();
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('error', "Sql single query failed", {
      error: e,
      query: query
    });
    throw new Error("Query failed: ".concat(e, ": "));
  }
};
QuickSqliteClient.dropTables = function () {
  var queries = Object.keys(_schema.tables).map(function (table) {
    return ["DROP TABLE IF EXISTS ".concat(table), []];
  });
  QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "Dropping tables", {
    tables: Object.keys(_schema.tables)
  });
  QuickSqliteClient.executeSqlBatch(queries);
};
QuickSqliteClient.deleteDatabase = function () {
  QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "deleteDatabase", {
    dbLocation: QuickSqliteClient.dbLocation,
    dbname: QuickSqliteClient.dbName
  });
  try {
    sqlite["delete"](QuickSqliteClient.dbName, QuickSqliteClient.dbLocation);
  } catch (e) {
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('error', "Error deleting DB", {
      dbLocation: QuickSqliteClient.dbLocation,
      dbname: QuickSqliteClient.dbName,
      error: e
    });
    throw new Error("Error deleting DB: ".concat(e));
  }
  return true;
};
QuickSqliteClient.initializeDatabase = function () {
  if (sqlite === undefined) {
    throw new Error('Please install "react-native-quick-sqlite" package to enable offline support');
  }
  var version = QuickSqliteClient.getUserPragmaVersion();
  if (version !== QuickSqliteClient.dbVersion) {
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "DB version mismatch");
    QuickSqliteClient.dropTables();
    QuickSqliteClient.updateUserPragmaVersion(QuickSqliteClient.dbVersion);
  }
  QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "create tables if not exists", {
    tables: Object.keys(_schema.tables)
  });
  var q = Object.keys(_schema.tables).reduce(function (queriesSoFar, tableName) {
    queriesSoFar.push.apply(queriesSoFar, (0, _toConsumableArray2["default"])((0, _createCreateTableQuery.createCreateTableQuery)(tableName)));
    return queriesSoFar;
  }, []);
  QuickSqliteClient.executeSqlBatch(q);
};
QuickSqliteClient.updateUserPragmaVersion = function (version) {
  QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "updateUserPragmaVersion to ".concat(version));
  QuickSqliteClient.openDB();
  sqlite.execute(_constants.DB_NAME, "PRAGMA user_version = ".concat(version), []);
  QuickSqliteClient.closeDB();
};
QuickSqliteClient.getUserPragmaVersion = function () {
  QuickSqliteClient.openDB();
  try {
    var _sqlite$execute2 = sqlite.execute(_constants.DB_NAME, "PRAGMA user_version", []),
      rows = _sqlite$execute2.rows;
    var result = rows ? rows._array : [];
    QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "getUserPragmaVersion", {
      result: result
    });
    QuickSqliteClient.closeDB();
    return result[0].user_version;
  } catch (e) {
    QuickSqliteClient.closeDB();
    throw new Error("Querying for user_version failed: ".concat(e));
  }
};
QuickSqliteClient.resetDB = function () {
  QuickSqliteClient.logger == null ? void 0 : QuickSqliteClient.logger('info', "resetDB");
  QuickSqliteClient.dropTables();
  QuickSqliteClient.initializeDatabase();
};
//# sourceMappingURL=QuickSqliteClient.js.map