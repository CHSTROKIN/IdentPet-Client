Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectChannels = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _createSelectQuery = require("../../sqlite-utils/createSelectQuery");
var selectChannels = function selectChannels() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    channelIds = _ref.channelIds;
  var query = (0, _createSelectQuery.createSelectQuery)('channels', ['*'], channelIds ? {
    cid: channelIds
  } : undefined);
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectChannels', {
    channelIds: channelIds
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  if (channelIds) {
    return result.sort(function (a, b) {
      return channelIds.indexOf(a.cid) - channelIds.indexOf(b.cid);
    });
  } else {
    return result;
  }
};
exports.selectChannels = selectChannels;
//# sourceMappingURL=selectChannels.js.map