Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteReaction = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteReaction = function deleteReaction(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    messageId = _ref.messageId,
    reactionType = _ref.reactionType,
    userId = _ref.userId;
  var query = (0, _createDeleteQuery.createDeleteQuery)('reactions', {
    messageId: messageId,
    type: reactionType,
    userId: userId
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deleteReaction', {
    messageId: messageId,
    type: reactionType,
    userId: userId
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteReaction = deleteReaction;
//# sourceMappingURL=deleteReaction.js.map