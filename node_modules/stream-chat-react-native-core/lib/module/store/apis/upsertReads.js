var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertReads = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _mapReadToStorable = require("../mappers/mapReadToStorable");
var _mapUserToStorable = require("../mappers/mapUserToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertReads = function upsertReads(_ref) {
  var cid = _ref.cid,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    reads = _ref.reads;
  var queries = [];
  var storableReads = [];
  var storableUsers = [];
  reads == null ? void 0 : reads.forEach(function (read) {
    if (read.user) {
      storableUsers.push((0, _mapUserToStorable.mapUserToStorable)(read.user));
    }
    storableReads.push((0, _mapReadToStorable.mapReadToStorable)({
      cid: cid,
      read: read
    }));
  });
  queries.push.apply(queries, (0, _toConsumableArray2["default"])(storableUsers.map(function (storableUser) {
    return (0, _createUpsertQuery.createUpsertQuery)('users', storableUser);
  })));
  queries.push.apply(queries, (0, _toConsumableArray2["default"])(storableReads.map(function (storableRead) {
    return (0, _createUpsertQuery.createUpsertQuery)('reads', storableRead);
  })));
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertReads', {
    flush: flush,
    reads: storableReads,
    users: storableUsers
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
  }
  return queries;
};
exports.upsertReads = upsertReads;
//# sourceMappingURL=upsertReads.js.map