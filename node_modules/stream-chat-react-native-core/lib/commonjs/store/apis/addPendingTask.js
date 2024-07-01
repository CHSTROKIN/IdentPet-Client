Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPendingTask = void 0;
var _mapTaskToStorable = require("../mappers/mapTaskToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var addPendingTask = function addPendingTask(task) {
  var storable = (0, _mapTaskToStorable.mapTaskToStorable)(task);
  var channelId = storable.channelId,
    channelType = storable.channelType,
    payload = storable.payload,
    type = storable.type;
  var query = (0, _createUpsertQuery.createUpsertQuery)('pendingTasks', storable);
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'addPendingTask', {
    channelId: channelId,
    channelType: channelType,
    id: task.id,
    type: type
  });
  _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  return function () {
    _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deletePendingTaskAfterAddition', {
      channelId: channelId,
      channelType: channelType,
      id: task.id,
      type: type
    });
    var query = (0, _createDeleteQuery.createDeleteQuery)('pendingTasks', {
      channelId: channelId,
      channelType: channelType,
      payload: payload,
      type: type
    });
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  };
};
exports.addPendingTask = addPendingTask;
//# sourceMappingURL=addPendingTask.js.map