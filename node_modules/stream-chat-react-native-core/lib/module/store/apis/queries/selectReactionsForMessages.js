Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectReactionsForMessages = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _schema = require("../../schema");
var selectReactionsForMessages = function selectReactionsForMessages(messageIds) {
  var questionMarks = Array(messageIds.length).fill('?').join(',');
  var reactionsColumnNames = Object.keys(_schema.tables.reactions.columns).map(function (name) {
    return "'".concat(name, "', a.").concat(name);
  }).join(', ');
  var userColumnNames = Object.keys(_schema.tables.users.columns).map(function (name) {
    return "'".concat(name, "', b.").concat(name);
  }).join(', ');
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectReactionsForMessages', {
    messageIds: messageIds
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql("SELECT\n      json_object(\n        'user', json_object(\n          ".concat(userColumnNames, "\n        ),\n        ").concat(reactionsColumnNames, "\n      ) as value\n    FROM reactions a\n    LEFT JOIN\n      users b\n    ON b.id = a.userId \n    WHERE a.messageId in (").concat(questionMarks, ")"), messageIds);
  return result.map(function (r) {
    return JSON.parse(r.value);
  });
};
exports.selectReactionsForMessages = selectReactionsForMessages;
//# sourceMappingURL=selectReactionsForMessages.js.map