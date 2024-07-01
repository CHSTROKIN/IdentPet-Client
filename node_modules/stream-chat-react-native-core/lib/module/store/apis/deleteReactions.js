Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReactionsForMessage = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteReactionsForMessage = function deleteReactionsForMessage(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    messageId = _ref.messageId;
  var query = (0, _createDeleteQuery.createDeleteQuery)('reactions', {
    messageId: messageId
  });
  console.log('deleteReactionsForMessage', {
    flush: flush,
    messageId: messageId
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteReactionsForMessage = deleteReactionsForMessage;
//# sourceMappingURL=deleteReactions.js.map