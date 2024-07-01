var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayPresence = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var getChannelPreviewDisplayPresence = function getChannelPreviewDisplayPresence(channel, client) {
  var currentUserId = client.userID;
  if (currentUserId) {
    var members = Object.values(channel.state.members);
    var otherMembers = members.filter(function (member) {
      var _member$user;
      return ((_member$user = member.user) == null ? void 0 : _member$user.id) !== currentUserId;
    });
    if (otherMembers.length === 1) {
      var _otherMembers$0$user;
      return !!((_otherMembers$0$user = otherMembers[0].user) != null && _otherMembers$0$user.online);
    }
  }
  return false;
};
var useChannelPreviewDisplayPresence = function useChannelPreviewDisplayPresence(channel) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var currentUserId = client.userID;
  var members = Object.values(channel.state.members).filter(function (member) {
    var _member$user2, _member$user3;
    return !!((_member$user2 = member.user) != null && _member$user2.id) && !!currentUserId && ((_member$user3 = member.user) == null ? void 0 : _member$user3.id) !== currentUserId;
  });
  var channelMemberOnline = members.some(function (member) {
    var _member$user4;
    return (_member$user4 = member.user) == null ? void 0 : _member$user4.online;
  });
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayPresence = _useState2[0],
    setDisplayPresence = _useState2[1];
  (0, _react.useEffect)(function () {
    setDisplayPresence(getChannelPreviewDisplayPresence(channel, client));
  }, [channelMemberOnline]);
  return displayPresence;
};
exports.useChannelPreviewDisplayPresence = useChannelPreviewDisplayPresence;
//# sourceMappingURL=useChannelPreviewDisplayPresence.js.map