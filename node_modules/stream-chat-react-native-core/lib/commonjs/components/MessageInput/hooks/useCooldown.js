var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCooldown = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _streamChat = require("stream-chat");
var _ChannelContext = require("../../../contexts/channelContext/ChannelContext");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _date = require("../../../utils/date");
var useCooldown = function useCooldown() {
  var _client$user, _channel$state$member;
  var _useState = (0, _react.useState)(new Date()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    endsAt = _useState2[0],
    setEndsAt = _useState2[1];
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    channel = _useChannelContext.channel;
  var _ref = (channel == null ? void 0 : channel.data) || {},
    cooldown = _ref.cooldown;
  var interval = cooldown != null ? cooldown : 0;
  var disabledRoles = [_streamChat.BuiltinRoles.Admin, _streamChat.BuiltinRoles.ChannelModerator];
  var userClientRole = (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.role) || '';
  var userChannelRole = (channel == null ? void 0 : (_channel$state$member = channel.state.members[client.userID || '']) == null ? void 0 : _channel$state$member.role) || '';
  var disabledFor = function disabledFor(roles) {
    return disabledRoles.some(function (roleToSkip) {
      return roles.includes(roleToSkip);
    });
  };
  var enabled = interval > 0 && !disabledFor([userClientRole, userChannelRole]);
  var start = function start() {
    if (enabled) {
      setEndsAt(new Date(Date.now() + interval * _date.ONE_SECOND_IN_MS));
    }
  };
  return {
    endsAt: endsAt,
    start: start
  };
};
exports.useCooldown = useCooldown;
//# sourceMappingURL=useCooldown.js.map