var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageError = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageError.tsx";
var MessageError = function MessageError(_ref) {
  var style = _ref.style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_red = _useTheme$theme.colors.accent_red,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.content,
    errorIcon = _useTheme$theme$messa.errorIcon,
    errorIconContainer = _useTheme$theme$messa.errorIconContainer;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, style],
    testID: "message-error",
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: errorIconContainer,
      children: (0, _jsxRuntime.jsx)(_icons.Error, Object.assign({
        pathFill: accent_red
      }, errorIcon))
    })
  });
};
exports.MessageError = MessageError;
//# sourceMappingURL=MessageError.js.map