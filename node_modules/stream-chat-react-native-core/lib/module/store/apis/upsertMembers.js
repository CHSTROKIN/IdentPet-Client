Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertMembers = void 0;
var _mapMemberToStorable = require("../mappers/mapMemberToStorable");
var _mapUserToStorable = require("../mappers/mapUserToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertMembers = function upsertMembers(_ref) {
  var cid = _ref.cid,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    members = _ref.members;
  var queries = [];
  var storableUsers = [];
  var storableMembers = [];
  members == null ? void 0 : members.forEach(function (member) {
    if (member.user) {
      var storableUser = (0, _mapUserToStorable.mapUserToStorable)(member.user);
      storableUsers.push(storableUser);
      queries.push((0, _createUpsertQuery.createUpsertQuery)('users', storableUser));
    }
    var storableMember = (0, _mapMemberToStorable.mapMemberToStorable)({
      cid: cid,
      member: member
    });
    storableMembers.push(storableMember);
    queries.push((0, _createUpsertQuery.createUpsertQuery)('members', storableMember));
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertMembers', {
    cid: cid,
    flush: flush,
    storableMembers: storableMembers,
    storableUsers: storableUsers
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
  }
  return queries;
};
exports.upsertMembers = upsertMembers;
//# sourceMappingURL=upsertMembers.js.map