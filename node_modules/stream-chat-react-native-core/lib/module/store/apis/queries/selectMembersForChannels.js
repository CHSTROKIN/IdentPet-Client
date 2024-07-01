Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMembersForChannels = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _schema = require("../../schema");
var selectMembersForChannels = function selectMembersForChannels(cids) {
  var questionMarks = Array(cids.length).fill('?').join(',');
  var membersColumnNames = Object.keys(_schema.tables.members.columns).map(function (name) {
    return "'".concat(name, "', a.").concat(name);
  }).join(', ');
  var userColumnNames = Object.keys(_schema.tables.users.columns).map(function (name) {
    return "'".concat(name, "', b.").concat(name);
  }).join(', ');
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectMembersForChannels', {
    cids: cids
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql("SELECT\n      json_object(\n        'user', json_object(\n          ".concat(userColumnNames, "\n        ),\n        ").concat(membersColumnNames, "\n      ) as value\n    FROM members a\n    LEFT JOIN\n      users b\n    ON b.id = a.userId\n    WHERE cid in (").concat(questionMarks, ") ORDER BY datetime(a.createdAt) DESC"), cids);
  return result.map(function (r) {
    return JSON.parse(r.value);
  });
};
exports.selectMembersForChannels = selectMembersForChannels;
//# sourceMappingURL=selectMembersForChannels.js.map