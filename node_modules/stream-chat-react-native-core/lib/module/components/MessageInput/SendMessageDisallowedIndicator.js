var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendMessageDisallowedIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/SendMessageDisallowedIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopWidth: 1,
    height: 50,
    justifyContent: 'center'
  },
  text: {
    fontSize: 17,
    fontWeight: '400'
  }
});
var SendMessageDisallowedIndicator = function SendMessageDisallowedIndicator() {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    border = _useTheme$theme$color.border,
    grey_dark = _useTheme$theme$color.grey_dark,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageInput.sendMessageDisallowedIndicator,
    container = _useTheme$theme$messa.container,
    text = _useTheme$theme$messa.text;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white,
      borderTopColor: border,
      height: 50
    }, container],
    testID: "send-message-disallowed-indicator",
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: grey_dark
      }, text],
      children: t("You can't send messages in this channel")
    })
  });
};
exports.SendMessageDisallowedIndicator = SendMessageDisallowedIndicator;
//# sourceMappingURL=SendMessageDisallowedIndicator.js.map