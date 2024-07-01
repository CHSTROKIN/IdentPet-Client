var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageRepliesAvatarsWithContext = exports.MessageRepliesAvatars = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _Avatar = require("../../Avatar/Avatar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageRepliesAvatars.tsx";
var styles = _reactNative.StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2
  },
  topAvatar: {
    paddingTop: 2,
    position: 'absolute'
  }
});
var MessageRepliesAvatarsWithContext = function MessageRepliesAvatarsWithContext(props) {
  var _message$thread_parti;
  var alignment = props.alignment,
    ImageComponent = props.ImageComponent,
    message = props.message;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    white_snow = _useTheme$theme.colors.white_snow,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.replies,
    avatar = _useTheme$theme$messa.avatar,
    avatarContainerMultiple = _useTheme$theme$messa.avatarContainerMultiple,
    avatarContainerSingle = _useTheme$theme$messa.avatarContainerSingle,
    avatarSize = _useTheme$theme$messa.avatarSize,
    leftAvatarsContainer = _useTheme$theme$messa.leftAvatarsContainer,
    rightAvatarsContainer = _useTheme$theme$messa.rightAvatarsContainer;
  var avatars = ((_message$thread_parti = message.thread_participants) == null ? void 0 : _message$thread_parti.slice(-2)) || [];
  var hasMoreThanOneReply = avatars.length > 1;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.avatarContainer, alignment === 'right' ? rightAvatarsContainer : leftAvatarsContainer],
    children: avatars.map(function (user, i) {
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: i === 1 ? Object.assign({}, styles.topAvatar, avatarContainerSingle) : Object.assign({
          paddingLeft: hasMoreThanOneReply ? 8 : 0
        }, avatarContainerMultiple),
        children: (0, _jsxRuntime.jsx)(_Avatar.Avatar, {
          containerStyle: [i === 1 && {
            borderColor: white_snow,
            borderWidth: 1
          }, avatar],
          image: user.image,
          ImageComponent: ImageComponent,
          name: user.name,
          size: avatarSize ? avatarSize : i === 1 ? 18 : 16
        })
      }, user.id);
    })
  });
};
exports.MessageRepliesAvatarsWithContext = MessageRepliesAvatarsWithContext;
var MessageRepliesAvatars = function MessageRepliesAvatars(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  return (0, _jsxRuntime.jsx)(MessageRepliesAvatarsWithContext, Object.assign({}, props, {
    ImageComponent: ImageComponent
  }));
};
exports.MessageRepliesAvatars = MessageRepliesAvatars;
//# sourceMappingURL=MessageRepliesAvatars.js.map