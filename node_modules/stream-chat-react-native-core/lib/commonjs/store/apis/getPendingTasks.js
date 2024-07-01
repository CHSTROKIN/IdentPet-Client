Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPendingTasks = void 0;
var _mapStorableToTask = require("../mappers/mapStorableToTask");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createSelectQuery = require("../sqlite-utils/createSelectQuery");
var getPendingTasks = function getPendingTasks() {
  var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var query = (0, _createSelectQuery.createSelectQuery)('pendingTasks', ['*'], conditions, {
    createdAt: 1
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getPendingTasks', {
    conditions: conditions
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  return result.map(function (r) {
    return (0, _mapStorableToTask.mapStorableToTask)(r);
  });
};
exports.getPendingTasks = getPendingTasks;
//# sourceMappingURL=getPendingTasks.js.map