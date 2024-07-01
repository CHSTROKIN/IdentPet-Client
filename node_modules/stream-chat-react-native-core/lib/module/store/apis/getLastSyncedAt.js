Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastSyncedAt = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createSelectQuery = require("../sqlite-utils/createSelectQuery");
var getLastSyncedAt = function getLastSyncedAt(_ref) {
  var _result$;
  var currentUserId = _ref.currentUserId;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getLastSyncedAt', {
    currentUserId: currentUserId
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, (0, _createSelectQuery.createSelectQuery)('userSyncStatus', ['*'], {
    userId: currentUserId
  }));
  return (_result$ = result[0]) == null ? void 0 : _result$.lastSyncedAt;
};
exports.getLastSyncedAt = getLastSyncedAt;
//# sourceMappingURL=getLastSyncedAt.js.map