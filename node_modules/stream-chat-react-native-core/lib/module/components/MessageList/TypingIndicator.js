var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useTypingString = require("./hooks/useTypingString");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _LoadingDots = require("../Indicators/LoadingDots");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/TypingIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 24,
    justifyContent: 'flex-start'
  },
  loadingDots: {
    marginLeft: 8
  },
  typingText: {
    marginLeft: 8
  }
});
var TypingIndicator = function TypingIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    grey = _useTheme$theme$color.grey,
    white_snow = _useTheme$theme$color.white_snow,
    _useTheme$theme$typin = _useTheme$theme.typingIndicator,
    container = _useTheme$theme$typin.container,
    text = _useTheme$theme$typin.text;
  var typingString = (0, _useTypingString.useTypingString)();
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: "".concat(white_snow, "E6")
    }, container],
    testID: "typing-indicator",
    children: [(0, _jsxRuntime.jsx)(_LoadingDots.LoadingDots, {
      style: styles.loadingDots
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.typingText, {
        color: grey
      }, text],
      children: typingString
    })]
  });
};
exports.TypingIndicator = TypingIndicator;
TypingIndicator.displayName = 'TypingIndicator{typingIndicator}';
//# sourceMappingURL=TypingIndicator.js.map