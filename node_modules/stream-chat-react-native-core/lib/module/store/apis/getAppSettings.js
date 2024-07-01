Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppSettings = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createSelectQuery = require("../sqlite-utils/createSelectQuery");
var getAppSettings = function getAppSettings(_ref) {
  var _result$;
  var currentUserId = _ref.currentUserId;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getAppSettings', {
    currentUserId: currentUserId
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, (0, _createSelectQuery.createSelectQuery)('userSyncStatus', ['*'], {
    userId: currentUserId
  }));
  return (_result$ = result[0]) != null && _result$.appSettings ? JSON.parse(result[0].appSettings) : null;
};
exports.getAppSettings = getAppSettings;
//# sourceMappingURL=getAppSettings.js.map