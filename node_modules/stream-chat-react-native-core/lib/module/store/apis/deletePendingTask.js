Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePendingTask = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deletePendingTask = function deletePendingTask(_ref) {
  var id = _ref.id;
  var query = (0, _createDeleteQuery.createDeleteQuery)('pendingTasks', {
    id: id
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deletePendingTask', {
    id: id
  });
  _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  return [query];
};
exports.deletePendingTask = deletePendingTask;
//# sourceMappingURL=deletePendingTask.js.map