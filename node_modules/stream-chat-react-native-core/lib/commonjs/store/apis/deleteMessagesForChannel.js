Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessagesForChannel = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteMessagesForChannel = function deleteMessagesForChannel(_ref) {
  var cid = _ref.cid,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush;
  var query = (0, _createDeleteQuery.createDeleteQuery)('messages', {
    cid: cid
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deleteMessagesForChannel', {
    cid: cid,
    flush: flush
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteMessagesForChannel = deleteMessagesForChannel;
//# sourceMappingURL=deleteMessagesForChannel.js.map