var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreOptionsButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _CircleRight = require("../../icons/CircleRight");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/MoreOptionsButton.tsx";
var MoreOptionsButtonWithContext = function MoreOptionsButtonWithContext(props) {
  var disabled = props.disabled,
    handleOnPress = props.handleOnPress;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_blue = _useTheme$theme.colors.accent_blue,
    moreOptionsButton = _useTheme$theme.messageInput.moreOptionsButton;
  return (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TouchableOpacity, {
    disabled: disabled,
    hitSlop: {
      bottom: 15,
      left: 15,
      right: 15,
      top: 15
    },
    onPress: handleOnPress,
    style: [moreOptionsButton],
    testID: "more-options-button",
    children: (0, _jsxRuntime.jsx)(_CircleRight.CircleRight, {
      pathFill: accent_blue
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
    prevHandleOnPress = prevProps.handleOnPress;
  var nextDisabled = nextProps.disabled,
    nextHandleOnPress = nextProps.handleOnPress;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var handleOnPressEqual = prevHandleOnPress === nextHandleOnPress;
  if (!handleOnPressEqual) return false;
  return true;
};
var MemoizedMoreOptionsButton = _react["default"].memo(MoreOptionsButtonWithContext, areEqual);
var MoreOptionsButton = function MoreOptionsButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    _useChannelContext$di = _useChannelContext.disabled,
    disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;
  return (0, _jsxRuntime.jsx)(MemoizedMoreOptionsButton, Object.assign({
    disabled: disabled
  }, props));
};
exports.MoreOptionsButton = MoreOptionsButton;
MoreOptionsButton.displayName = 'MoreOptionsButton{messageInput}';
//# sourceMappingURL=MoreOptionsButton.js.map