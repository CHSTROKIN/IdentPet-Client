Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectReadsForChannels = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _schema = require("../../schema");
var selectReadsForChannels = function selectReadsForChannels(cids) {
  var questionMarks = Array(cids.length).fill('?').join(',');
  var readsColumnNames = Object.keys(_schema.tables.reads.columns).map(function (name) {
    return "'".concat(name, "', a.").concat(name);
  }).join(', ');
  var userColumnNames = Object.keys(_schema.tables.users.columns).map(function (name) {
    return "'".concat(name, "', b.").concat(name);
  }).join(', ');
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectReadsForChannels', {
    cids: cids
  });
  var result = _QuickSqliteClient.QuickSqliteClient.executeSql("SELECT\n      json_object(\n        'user', json_object(\n          ".concat(userColumnNames, "\n        ),\n        ").concat(readsColumnNames, "\n      ) as value\n    FROM reads a\n    LEFT JOIN\n      users b\n    ON b.id = a.userId \n    WHERE a.cid in (").concat(questionMarks, ")"), cids);
  return result.map(function (r) {
    return JSON.parse(r.value);
  });
};
exports.selectReadsForChannels = selectReadsForChannels;
//# sourceMappingURL=selectReadsForChannels.js.map