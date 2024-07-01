Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteChannel = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteChannel = function deleteChannel(_ref) {
  var cid = _ref.cid,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush;
  var query = (0, _createDeleteQuery.createDeleteQuery)('channels', {
    cid: cid
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deleteChannel', {
    cid: cid,
    flush: flush
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteChannel = deleteChannel;
//# sourceMappingURL=deleteChannel.js.map