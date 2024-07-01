var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CooldownTimer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/CooldownTimer.tsx";
var CONTAINER_SIZE = 24;
var CONTAINER_HORIZONTAL_PADDING = 6;
var EXTRA_CHARACTER_PADDING = CONTAINER_SIZE - CONTAINER_HORIZONTAL_PADDING * 2;
var normalizeWidth = function normalizeWidth(seconds) {
  return CONTAINER_SIZE + EXTRA_CHARACTER_PADDING * ("".concat(seconds).length - 1);
};
var CooldownTimer = function CooldownTimer(props) {
  var seconds = props.seconds;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    _useTheme$theme$messa = _useTheme$theme.messageInput.cooldownTimer,
    container = _useTheme$theme$messa.container,
    text = _useTheme$theme$messa.text;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: grey_gainsboro,
      width: normalizeWidth(seconds)
    }, container],
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: black
      }, text],
      testID: "cooldown-seconds",
      children: seconds
    })
  });
};
exports.CooldownTimer = CooldownTimer;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: CONTAINER_SIZE / 2,
    height: CONTAINER_SIZE,
    justifyContent: 'center',
    minWidth: CONTAINER_SIZE,
    paddingHorizontal: CONTAINER_HORIZONTAL_PADDING
  },
  text: {
    fontSize: 16,
    fontWeight: '600'
  }
});
//# sourceMappingURL=CooldownTimer.js.map