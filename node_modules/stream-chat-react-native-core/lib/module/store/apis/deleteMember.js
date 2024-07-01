Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteMember = void 0;
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var deleteMember = function deleteMember(_ref) {
  var cid = _ref.cid,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    member = _ref.member;
  var query = (0, _createDeleteQuery.createDeleteQuery)('members', {
    cid: cid,
    userId: member.user_id
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'deleteMember', {
    cid: cid,
    flush: flush,
    userId: member.user_id
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.deleteMember = deleteMember;
//# sourceMappingURL=deleteMember.js.map