Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMembers = void 0;
var _selectMembersForChannels = require("./queries/selectMembersForChannels");
var _mapStorableToMember = require("../mappers/mapStorableToMember");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getMembers = function getMembers(_ref) {
  var channelIds = _ref.channelIds;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getMembers', {
    channelIds: channelIds
  });
  var memberRows = (0, _selectMembersForChannels.selectMembersForChannels)(channelIds);
  var cidVsMembers = {};
  memberRows.forEach(function (member) {
    if (!cidVsMembers[member.cid]) {
      cidVsMembers[member.cid] = [];
    }
    cidVsMembers[member.cid].push((0, _mapStorableToMember.mapStorableToMember)(member));
  });
  return cidVsMembers;
};
exports.getMembers = getMembers;
//# sourceMappingURL=getMembers.js.map