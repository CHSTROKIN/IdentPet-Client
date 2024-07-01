var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayBackdrop = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayBackdrop.tsx";
var OverlayBackdrop = function OverlayBackdrop(props) {
  var _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    overlay = _useTheme.theme.colors.overlay;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [{
      backgroundColor: overlay
    }, style]
  });
};
exports.OverlayBackdrop = OverlayBackdrop;
//# sourceMappingURL=OverlayBackdrop.js.map