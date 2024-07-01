Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertUserSyncStatus = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertUserSyncStatus = function upsertUserSyncStatus(_ref) {
  var currentUserId = _ref.currentUserId,
    lastSyncedAt = _ref.lastSyncedAt;
  var query = (0, _createUpsertQuery.createUpsertQuery)('userSyncStatus', {
    lastSyncedAt: lastSyncedAt,
    userId: currentUserId
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertUserSyncStatus', {
    lastSyncedAt: lastSyncedAt,
    userId: currentUserId
  });
  _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
};
exports.upsertUserSyncStatus = upsertUserSyncStatus;
//# sourceMappingURL=upsertUserSyncStatus.js.map