var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelPreviewDisplayName = exports.getChannelPreviewDisplayName = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _useViewport2 = require("../../../hooks/useViewport");
var ELLIPSIS = "...";
var getMemberName = function getMemberName(member) {
  var _member$user, _member$user2;
  return ((_member$user = member.user) == null ? void 0 : _member$user.name) || ((_member$user2 = member.user) == null ? void 0 : _member$user2.id) || 'Unknown User';
};
var getChannelPreviewDisplayName = function getChannelPreviewDisplayName(_ref) {
  var channelName = _ref.channelName,
    characterLimit = _ref.characterLimit,
    currentUserId = _ref.currentUserId,
    members = _ref.members;
  if (channelName) return channelName;
  var channelMembers = Object.values(members || {});
  var otherMembers = channelMembers.filter(function (member) {
    var _member$user3;
    return ((_member$user3 = member.user) == null ? void 0 : _member$user3.id) !== currentUserId;
  });
  otherMembers.sort(function (prevUser, nextUser) {
    var _prevUser$user$name, _prevUser$user, _nextUser$user$name, _nextUser$user;
    return ((_prevUser$user$name = prevUser == null ? void 0 : (_prevUser$user = prevUser.user) == null ? void 0 : _prevUser$user.name) != null ? _prevUser$user$name : '').toLowerCase().localeCompare(((_nextUser$user$name = nextUser == null ? void 0 : (_nextUser$user = nextUser.user) == null ? void 0 : _nextUser$user.name) != null ? _nextUser$user$name : '').toLocaleUpperCase());
  });
  var createChannelNameSuffix = function createChannelNameSuffix(remainingNumberOfMembers) {
    return remainingNumberOfMembers <= 1 ? "".concat(ELLIPSIS) : ",".concat(ELLIPSIS, "+").concat(remainingNumberOfMembers);
  };
  if (otherMembers.length === 1) {
    var _name = getMemberName(otherMembers[0]);
    return _name.length > characterLimit ? "".concat(_name.slice(0, characterLimit - ELLIPSIS.length)).concat(ELLIPSIS) : _name;
  }
  var name = otherMembers.reduce(function (result, currentMember, index, originalArray) {
    if (result.length >= characterLimit) {
      return result;
    }
    var currentMemberName = getMemberName(currentMember);
    var resultHasSpaceForCurrentMemberName = result.length + (currentMemberName.length + ELLIPSIS.length) < characterLimit;
    if (resultHasSpaceForCurrentMemberName) {
      return result.length > 0 ? "".concat(result, ", ").concat(currentMemberName) : "".concat(currentMemberName);
    } else {
      var remainingNumberOfMembers = originalArray.length - index;
      var truncateLimit = characterLimit - (ELLIPSIS.length + result.length);
      var tuncatedCurrentMemberName = ", ".concat(currentMemberName.slice(0, truncateLimit));
      var channelNameSuffix = createChannelNameSuffix(remainingNumberOfMembers);
      return "".concat(result).concat(tuncatedCurrentMemberName).concat(channelNameSuffix);
    }
  }, '');
  return name;
};
exports.getChannelPreviewDisplayName = getChannelPreviewDisplayName;
var useChannelPreviewDisplayName = function useChannelPreviewDisplayName(channel, characterLength) {
  var _channel$state, _channel$data;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var DEFAULT_MAX_CHARACTER_LENGTH = (vw(100) - 16) / 6;
  var currentUserId = client == null ? void 0 : client.userID;
  var members = channel == null ? void 0 : (_channel$state = channel.state) == null ? void 0 : _channel$state.members;
  var numOfMembers = Object.keys(members || {}).length;
  var channelName = channel == null ? void 0 : (_channel$data = channel.data) == null ? void 0 : _channel$data.name;
  var characterLimit = characterLength || DEFAULT_MAX_CHARACTER_LENGTH;
  var _useState = (0, _react.useState)(getChannelPreviewDisplayName({
      channelName: channelName,
      characterLimit: characterLimit,
      currentUserId: currentUserId,
      members: members
    })),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    displayName = _useState2[0],
    setDisplayName = _useState2[1];
  (0, _react.useEffect)(function () {
    setDisplayName(getChannelPreviewDisplayName({
      channelName: channelName,
      characterLimit: characterLimit,
      currentUserId: currentUserId,
      members: members
    }));
  }, [channelName, currentUserId, characterLimit, numOfMembers]);
  return displayName;
};
exports.useChannelPreviewDisplayName = useChannelPreviewDisplayName;
//# sourceMappingURL=useChannelPreviewDisplayName.js.map