Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMessagesForChannels = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _schema = require("../../schema");
var selectMessagesForChannels = function selectMessagesForChannels(cids) {
  var questionMarks = Array(cids.length).fill('?').join(',');
  var messagesColumnNames = Object.keys(_schema.tables.messages.columns).map(function (name) {
    return "'".concat(name, "', a.").concat(name);
  }).join(', ');
  var userColumnNames = Object.keys(_schema.tables.users.columns).map(function (name) {
    return "'".concat(name, "', b.").concat(name);
  }).join(', ');
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectMessagesForChannels', {
    cids: cids
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql("SELECT\n      json_object(\n        'user', json_object(\n          ".concat(userColumnNames, "\n        ),\n        ").concat(messagesColumnNames, "\n      ) as value\n    FROM (\n      SELECT\n        *,\n        ROW_NUMBER() OVER (\n          PARTITION BY cid\n          ORDER BY datetime(createdAt) DESC\n        ) RowNum\n      FROM messages\n      WHERE cid in (").concat(questionMarks, ")\n    ) a\n    LEFT JOIN\n      users b\n    ON b.id = a.userId \n    WHERE RowNum < 200"), cids);
  return result.map(function (r) {
    return JSON.parse(r.value);
  });
};
exports.selectMessagesForChannels = selectMessagesForChannels;
//# sourceMappingURL=selectMessagesForChannels.js.map