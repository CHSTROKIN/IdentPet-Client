Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMessage = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteMessage = function deleteMessage(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    id = _ref.id;
  var query = (0, _createDeleteQuery.createDeleteQuery)('messages', {
    id: id
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deleteMessage', {
    flush: flush,
    id: id
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=deleteMessage.js.map