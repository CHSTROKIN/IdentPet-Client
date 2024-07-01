var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BetterSqlite = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _betterSqlite = _interopRequireDefault(require("better-sqlite3"));
var _schema = require("../store/schema");
var BetterSqlite = (0, _createClass2["default"])(function BetterSqlite() {
  (0, _classCallCheck2["default"])(this, BetterSqlite);
  this.db = null;
});
exports.BetterSqlite = BetterSqlite;
BetterSqlite.openDB = function () {
  BetterSqlite.db = new _betterSqlite["default"]('foobar.db');
};
BetterSqlite.closeDB = function () {
  BetterSqlite.db.close();
};
BetterSqlite.getTables = function () {
  BetterSqlite.openDB();
  var tablesInDb = BetterSqlite.db.pragma("table_list;");
  BetterSqlite.closeDB();
  return tablesInDb;
};
BetterSqlite.dropAllTables = function () {
  BetterSqlite.openDB();
  var tableNames = Object.keys(_schema.tables);
  tableNames.forEach(function (name) {
    var stmt = BetterSqlite.db.prepare("DROP TABLE IF EXISTS ".concat(name));
    stmt.run();
  });
  BetterSqlite.closeDB();
};
BetterSqlite.selectFromTable = function (table) {
  BetterSqlite.openDB();
  var stmt = BetterSqlite.db.prepare("SELECT * FROM ".concat(table));
  var result = stmt.all();
  BetterSqlite.closeDB();
  return result;
};
//# sourceMappingURL=BetterSqlite.js.map