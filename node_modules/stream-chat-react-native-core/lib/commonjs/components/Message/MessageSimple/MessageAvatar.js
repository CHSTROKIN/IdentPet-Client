var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageAvatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _Avatar = require("../../Avatar/Avatar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageAvatar.tsx";
var MessageAvatarWithContext = function MessageAvatarWithContext(props) {
  var _message$user, _message$user2, _message$user3;
  var alignment = props.alignment,
    ImageComponent = props.ImageComponent,
    lastGroupMessage = props.lastGroupMessage,
    message = props.message,
    showAvatar = props.showAvatar,
    size = props.size;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    BASE_AVATAR_SIZE = _useTheme$theme.avatar.BASE_AVATAR_SIZE,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.avatarWrapper,
    container = _useTheme$theme$messa.container,
    leftAlign = _useTheme$theme$messa.leftAlign,
    rightAlign = _useTheme$theme$messa.rightAlign,
    spacer = _useTheme$theme$messa.spacer;
  var visible = typeof showAvatar === 'boolean' ? showAvatar : lastGroupMessage;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [alignment === 'left' ? leftAlign : rightAlign, container],
    testID: "message-avatar",
    children: visible ? (0, _jsxRuntime.jsx)(_Avatar.Avatar, {
      image: (_message$user = message.user) == null ? void 0 : _message$user.image,
      ImageComponent: ImageComponent,
      name: ((_message$user2 = message.user) == null ? void 0 : _message$user2.name) || ((_message$user3 = message.user) == null ? void 0 : _message$user3.id),
      size: size || BASE_AVATAR_SIZE
    }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: spacer,
      testID: "spacer"
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevMessage$user, _nextMessage$user, _prevMessage$user2, _nextMessage$user2, _prevMessage$user3, _nextMessage$user3;
  var prevLastGroupMessage = prevProps.lastGroupMessage,
    prevMessage = prevProps.message;
  var nextLastGroupMessage = nextProps.lastGroupMessage,
    nextMessage = nextProps.message;
  var lastGroupMessageEqual = prevLastGroupMessage === nextLastGroupMessage;
  if (!lastGroupMessageEqual) return false;
  var userEqual = ((_prevMessage$user = prevMessage.user) == null ? void 0 : _prevMessage$user.image) === ((_nextMessage$user = nextMessage.user) == null ? void 0 : _nextMessage$user.image) && ((_prevMessage$user2 = prevMessage.user) == null ? void 0 : _prevMessage$user2.name) === ((_nextMessage$user2 = nextMessage.user) == null ? void 0 : _nextMessage$user2.name) && ((_prevMessage$user3 = prevMessage.user) == null ? void 0 : _prevMessage$user3.id) === ((_nextMessage$user3 = nextMessage.user) == null ? void 0 : _nextMessage$user3.id);
  if (!userEqual) return false;
  return true;
};
var MemoizedMessageAvatar = _react["default"].memo(MessageAvatarWithContext, areEqual);
var MessageAvatar = function MessageAvatar(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    lastGroupMessage = _useMessageContext.lastGroupMessage,
    message = _useMessageContext.message,
    showAvatar = _useMessageContext.showAvatar;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  return (0, _jsxRuntime.jsx)(MemoizedMessageAvatar, Object.assign({
    alignment: alignment,
    ImageComponent: ImageComponent,
    lastGroupMessage: lastGroupMessage,
    message: message,
    showAvatar: showAvatar
  }, props));
};
exports.MessageAvatar = MessageAvatar;
MessageAvatar.displayName = 'MessageAvatar{messageSimple{avatarWrapper}}';
//# sourceMappingURL=MessageAvatar.js.map