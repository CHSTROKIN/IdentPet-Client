var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowThreadMessageInChannelButtonWithContext = exports.ShowThreadMessageInChannelButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/ShowThreadMessageInChannelButton.tsx";
var styles = _reactNative.StyleSheet.create({
  checkBox: {
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 2,
    height: 16,
    justifyContent: 'center',
    width: 16
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 2,
    marginTop: 8
  },
  innerContainer: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 13,
    marginLeft: 12
  }
});
var ShowThreadMessageInChannelButtonWithContext = function ShowThreadMessageInChannelButtonWithContext(props) {
  var allowThreadMessagesInChannel = props.allowThreadMessagesInChannel,
    sendThreadMessageInChannel = props.sendThreadMessageInChannel,
    setSendThreadMessageInChannel = props.setSendThreadMessageInChannel,
    t = props.t,
    threadList = props.threadList;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageInput.showThreadMessageInChannelButton,
    check = _useTheme$theme$messa.check,
    checkBoxActive = _useTheme$theme$messa.checkBoxActive,
    checkBoxInactive = _useTheme$theme$messa.checkBoxInactive,
    container = _useTheme$theme$messa.container,
    innerContainer = _useTheme$theme$messa.innerContainer,
    text = _useTheme$theme$messa.text;
  if (!threadList || !allowThreadMessagesInChannel) {
    return null;
  }
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container],
    testID: "show-thread-message-in-channel-button",
    children: (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      onPress: function onPress() {
        return setSendThreadMessageInChannel(function (prevSendInChannel) {
          return !prevSendInChannel;
        });
      },
      children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.innerContainer, innerContainer],
        children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.checkBox, sendThreadMessageInChannel ? Object.assign({
            backgroundColor: accent_blue,
            borderColor: accent_blue
          }, checkBoxActive) : Object.assign({
            borderColor: grey
          }, checkBoxInactive)],
          children: sendThreadMessageInChannel && (0, _jsxRuntime.jsx)(_icons.Check, Object.assign({
            height: 16,
            pathFill: white,
            width: 16
          }, check))
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.text, {
            color: grey
          }, text],
          children: t('Also send to channel')
        })]
      })
    })
  });
};
exports.ShowThreadMessageInChannelButtonWithContext = ShowThreadMessageInChannelButtonWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAllowThreadMessagesInChannel = prevProps.allowThreadMessagesInChannel,
    prevSendThreadMessageInChannel = prevProps.sendThreadMessageInChannel,
    prevT = prevProps.t,
    prevThreadList = prevProps.threadList;
  var nextAllowThreadMessagesInChannel = nextProps.allowThreadMessagesInChannel,
    nexSendThreadMessageInChannel = nextProps.sendThreadMessageInChannel,
    nextT = nextProps.t,
    nextThreadList = nextProps.threadList;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var sendThreadMessageInChannelEqual = prevSendThreadMessageInChannel === nexSendThreadMessageInChannel;
  if (!sendThreadMessageInChannelEqual) return false;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  var allowThreadMessagesInChannelEqual = prevAllowThreadMessagesInChannel === nextAllowThreadMessagesInChannel;
  if (!allowThreadMessagesInChannelEqual) return false;
  return true;
};
var MemoizedShowThreadMessageInChannelButton = _react["default"].memo(ShowThreadMessageInChannelButtonWithContext, areEqual);
var ShowThreadMessageInChannelButton = function ShowThreadMessageInChannelButton(props) {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    allowThreadMessagesInChannel = _useThreadContext.allowThreadMessagesInChannel;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    sendThreadMessageInChannel = _useMessageInputConte.sendThreadMessageInChannel,
    setSendThreadMessageInChannel = _useMessageInputConte.setSendThreadMessageInChannel;
  return (0, _jsxRuntime.jsx)(MemoizedShowThreadMessageInChannelButton, Object.assign({
    allowThreadMessagesInChannel: allowThreadMessagesInChannel,
    sendThreadMessageInChannel: sendThreadMessageInChannel,
    setSendThreadMessageInChannel: setSendThreadMessageInChannel,
    t: t
  }, props));
};
exports.ShowThreadMessageInChannelButton = ShowThreadMessageInChannelButton;
ShowThreadMessageInChannelButton.displayName = 'ShowThreadMessageInChannelButton{messageInput{showThreadMessageInChannelButton}}';
//# sourceMappingURL=ShowThreadMessageInChannelButton.js.map