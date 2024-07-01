var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayAvatar = exports.getChannelPreviewDisplayAvatar = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var getChannelPreviewDisplayAvatar = function getChannelPreviewDisplayAvatar(channel, client) {
  var _client$user;
  var currentUserId = client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id;
  var channelId = channel == null ? void 0 : channel.id;
  var channelData = channel == null ? void 0 : channel.data;
  var channelName = channelData == null ? void 0 : channelData.name;
  var channelImage = channelData == null ? void 0 : channelData.image;
  if (channelImage) {
    return {
      id: channelId,
      image: channelImage,
      name: channelName
    };
  } else if (currentUserId) {
    var _channel$state;
    var members = Object.values((_channel$state = channel.state) == null ? void 0 : _channel$state.members);
    var otherMembers = members.filter(function (member) {
      var _member$user;
      return ((_member$user = member.user) == null ? void 0 : _member$user.id) !== currentUserId;
    });
    if (otherMembers.length === 1) {
      var _otherMembers$0$user, _otherMembers$0$user2, _otherMembers$0$user3;
      return {
        id: (_otherMembers$0$user = otherMembers[0].user) == null ? void 0 : _otherMembers$0$user.id,
        image: (_otherMembers$0$user2 = otherMembers[0].user) == null ? void 0 : _otherMembers$0$user2.image,
        name: channelName || ((_otherMembers$0$user3 = otherMembers[0].user) == null ? void 0 : _otherMembers$0$user3.name)
      };
    }
    return {
      ids: otherMembers.slice(0, 4).map(function (member) {
        var _member$user2;
        return ((_member$user2 = member.user) == null ? void 0 : _member$user2.id) || '';
      }),
      images: otherMembers.slice(0, 4).map(function (member) {
        var _member$user3;
        return ((_member$user3 = member.user) == null ? void 0 : _member$user3.image) || '';
      }),
      names: otherMembers.slice(0, 4).map(function (member) {
        var _member$user4;
        return ((_member$user4 = member.user) == null ? void 0 : _member$user4.name) || '';
      })
    };
  }
  return {
    id: channelId,
    name: channelName
  };
};
exports.getChannelPreviewDisplayAvatar = getChannelPreviewDisplayAvatar;
var useChannelPreviewDisplayAvatar = function useChannelPreviewDisplayAvatar(channel) {
  var _client$user2;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var channelData = channel == null ? void 0 : channel.data;
  var image = channelData == null ? void 0 : channelData.image;
  var name = channelData == null ? void 0 : channelData.name;
  var id = client == null ? void 0 : (_client$user2 = client.user) == null ? void 0 : _client$user2.id;
  var _useState = (0, _react.useState)(getChannelPreviewDisplayAvatar(channel, client)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayAvatar = _useState2[0],
    setDisplayAvatar = _useState2[1];
  (0, _react.useEffect)(function () {
    setDisplayAvatar(getChannelPreviewDisplayAvatar(channel, client));
  }, [id, image, name]);
  return displayAvatar;
};
exports.useChannelPreviewDisplayAvatar = useChannelPreviewDisplayAvatar;
//# sourceMappingURL=useChannelPreviewDisplayAvatar.js.map