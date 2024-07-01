Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannels = void 0;
var _getChannelMessages = require("./getChannelMessages");
var _getMembers = require("./getMembers");
var _getReads = require("./getReads");
var _selectChannels = require("./queries/selectChannels");
var _mapStorableToChannel = require("../mappers/mapStorableToChannel");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getChannels = function getChannels(_ref) {
  var channelIds = _ref.channelIds,
    currentUserId = _ref.currentUserId;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getChannels', {
    channelIds: channelIds,
    currentUserId: currentUserId
  });
  var channels = (0, _selectChannels.selectChannels)({
    channelIds: channelIds
  });
  var cidVsMembers = (0, _getMembers.getMembers)({
    channelIds: channelIds
  });
  var cidVsReads = (0, _getReads.getReads)({
    channelIds: channelIds
  });
  var cidVsMessages = (0, _getChannelMessages.getChannelMessages)({
    channelIds: channelIds,
    currentUserId: currentUserId
  });
  return channels.map(function (c) {
    return Object.assign({}, (0, _mapStorableToChannel.mapStorableToChannel)(c), {
      members: cidVsMembers[c.cid],
      messages: cidVsMessages[c.cid],
      pinned_messages: [],
      read: cidVsReads[c.cid]
    });
  });
};
exports.getChannels = getChannels;
//# sourceMappingURL=getChannels.js.map