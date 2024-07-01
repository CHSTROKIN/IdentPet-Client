var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSelectorIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/ImageSelectorIcon.tsx";
var ImageSelectorIcon = function ImageSelectorIcon(_ref) {
  var selectedPicker = _ref.selectedPicker;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey;
  return (0, _jsxRuntime.jsx)(_icons.Picture, {
    pathFill: selectedPicker === 'images' ? accent_blue : grey
  });
};
exports.ImageSelectorIcon = ImageSelectorIcon;
//# sourceMappingURL=ImageSelectorIcon.js.map