var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCreateTableQuery = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _schema = require("../schema");
var createCreateTableQuery = function createCreateTableQuery(tableName) {
  var _tables$tableName$for, _tables$tableName$ind;
  var columnsWithDescriptors = Object.entries(_schema.tables[tableName].columns).map(function (entry) {
    var _entry = (0, _slicedToArray2["default"])(entry, 2),
      key = _entry[0],
      value = _entry[1];
    return "".concat(key, " ").concat(value);
  });
  var primaryKeyConstraints = (_schema.tables[tableName].primaryKey || []).length > 0 ? ["PRIMARY KEY (".concat((_schema.tables[tableName].primaryKey || []).join(', '), ")")] : [];
  var foreignKeysConstraints = ((_tables$tableName$for = _schema.tables[tableName].foreignKeys) == null ? void 0 : _tables$tableName$for.map(function (k) {
    return "FOREIGN KEY (".concat(k.column, ") REFERENCES ").concat(k.referenceTable, "(").concat(k.referenceTableColumn, ") ON DELETE ").concat(k.onDeleteAction || 'NO ACTION');
  })) || [];
  var indexQueries = ((_tables$tableName$ind = _schema.tables[tableName].indexes) == null ? void 0 : _tables$tableName$ind.map(function (index) {
    return ["CREATE ".concat(index.unique ? 'UNIQUE' : '', " INDEX IF NOT EXISTS ").concat(index.name, " ON ").concat(tableName, "(").concat(index.columns.join(','), ")")];
  })) || [];
  return [["CREATE TABLE IF NOT EXISTS ".concat(tableName, "(\n          ").concat([].concat((0, _toConsumableArray2["default"])(columnsWithDescriptors), primaryKeyConstraints, (0, _toConsumableArray2["default"])(foreignKeysConstraints)).join(',\n'), "\n        );")]].concat((0, _toConsumableArray2["default"])(indexQueries));
};
exports.createCreateTableQuery = createCreateTableQuery;
//# sourceMappingURL=createCreateTableQuery.js.map