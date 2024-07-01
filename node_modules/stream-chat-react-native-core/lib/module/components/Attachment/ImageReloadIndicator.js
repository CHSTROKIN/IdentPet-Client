var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageReloadIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/ImageReloadIndicator.tsx";
var REFRESH_ICON_SIZE = 24;
var ImageReloadIndicator = function ImageReloadIndicator(_ref) {
  var onReloadImage = _ref.onReloadImage,
    style = _ref.style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    grey_dark = _useTheme.theme.colors.grey_dark;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    onPress: onReloadImage,
    style: style,
    children: (0, _jsxRuntime.jsx)(_icons.Refresh, {
      height: REFRESH_ICON_SIZE,
      pathFill: grey_dark,
      width: REFRESH_ICON_SIZE
    })
  });
};
exports.ImageReloadIndicator = ImageReloadIndicator;
//# sourceMappingURL=ImageReloadIndicator.js.map