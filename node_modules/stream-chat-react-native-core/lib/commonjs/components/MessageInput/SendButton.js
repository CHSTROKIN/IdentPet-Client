var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Search = require("../../icons/Search");
var _SendRight = require("../../icons/SendRight");
var _SendUp = require("../../icons/SendUp");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/SendButton.tsx";
var SendButtonWithContext = function SendButtonWithContext(props) {
  var _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    giphyActive = props.giphyActive,
    sendMessage = props.sendMessage;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    _useTheme$theme$messa = _useTheme$theme.messageInput,
    searchIcon = _useTheme$theme$messa.searchIcon,
    sendButton = _useTheme$theme$messa.sendButton,
    sendRightIcon = _useTheme$theme$messa.sendRightIcon,
    sendUpIcon = _useTheme$theme$messa.sendUpIcon;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    disabled: disabled,
    onPress: disabled ? function () {
      return null;
    } : function () {
      return sendMessage();
    },
    style: [sendButton],
    testID: "send-button",
    children: giphyActive ? (0, _jsxRuntime.jsx)(_Search.Search, Object.assign({
      pathFill: disabled ? grey_gainsboro : accent_blue
    }, searchIcon)) : disabled ? (0, _jsxRuntime.jsx)(_SendRight.SendRight, Object.assign({
      fill: grey_gainsboro,
      size: 32
    }, sendRightIcon)) : (0, _jsxRuntime.jsx)(_SendUp.SendUp, Object.assign({
      fill: accent_blue,
      size: 32
    }, sendUpIcon))
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
    prevGiphyActive = prevProps.giphyActive,
    prevSendMessage = prevProps.sendMessage;
  var nextDisabled = nextProps.disabled,
    nextGiphyActive = nextProps.giphyActive,
    nextSendMessage = nextProps.sendMessage;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var giphyActiveEqual = prevGiphyActive === nextGiphyActive;
  if (!giphyActiveEqual) return false;
  var sendMessageEqual = prevSendMessage === nextSendMessage;
  if (!sendMessageEqual) return false;
  return true;
};
var MemoizedSendButton = _react["default"].memo(SendButtonWithContext, areEqual);
var SendButton = function SendButton(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    giphyActive = _useMessageInputConte.giphyActive,
    sendMessage = _useMessageInputConte.sendMessage;
  return (0, _jsxRuntime.jsx)(MemoizedSendButton, Object.assign({
    giphyActive: giphyActive,
    sendMessage: sendMessage
  }, props, {
    disabled: props.disabled || false
  }));
};
exports.SendButton = SendButton;
SendButton.displayName = 'SendButton{messageInput}';
//# sourceMappingURL=SendButton.js.map