var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLoadingIndicator = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/ImageLoadingIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
});
var ImageLoadingIndicator = function ImageLoadingIndicator(props) {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    container = _useTheme.theme.messageSimple.loadingIndicator.container;
  var style = props.style,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({}, rest, {
    accessibilityHint: "image-loading",
    style: [styles.container, container, style],
    children: (0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {})
  }));
};
exports.ImageLoadingIndicator = ImageLoadingIndicator;
//# sourceMappingURL=ImageLoadingIndicator.js.map