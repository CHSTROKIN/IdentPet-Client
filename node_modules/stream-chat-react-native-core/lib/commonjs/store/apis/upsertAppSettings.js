Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertAppSettings = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertAppSettings = function upsertAppSettings(_ref) {
  var appSettings = _ref.appSettings,
    currentUserId = _ref.currentUserId,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush;
  var storableAppSettings = JSON.stringify(appSettings);
  var query = (0, _createUpsertQuery.createUpsertQuery)('userSyncStatus', {
    appSettings: storableAppSettings,
    userId: currentUserId
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertAppSettings', {
    appSettings: storableAppSettings,
    flush: flush,
    userId: currentUserId
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
};
exports.upsertAppSettings = upsertAppSettings;
//# sourceMappingURL=upsertAppSettings.js.map