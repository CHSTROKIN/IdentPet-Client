var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSelectorIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/FileSelectorIcon.tsx";
var FileSelectorIcon = function FileSelectorIcon() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    grey = _useTheme.theme.colors.grey;
  return (0, _jsxRuntime.jsx)(_icons.Folder, {
    pathFill: grey
  });
};
exports.FileSelectorIcon = FileSelectorIcon;
//# sourceMappingURL=FileSelectorIcon.js.map