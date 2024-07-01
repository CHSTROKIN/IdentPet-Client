var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMutedStatus = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewMutedStatus.tsx";
var styles = _reactNative.StyleSheet.create({
  iconStyle: {
    marginRight: 8
  }
});
var ChannelPreviewMutedStatus = function ChannelPreviewMutedStatus() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelPreview.mutedStatus,
    height = _useTheme$theme$chann.height,
    iconStyle = _useTheme$theme$chann.iconStyle,
    width = _useTheme$theme$chann.width,
    grey_dark = _useTheme$theme.colors.grey_dark;
  return (0, _jsxRuntime.jsx)(_icons.Mute, {
    height: height,
    pathFill: grey_dark,
    style: [styles.iconStyle, iconStyle],
    width: width
  });
};
exports.ChannelPreviewMutedStatus = ChannelPreviewMutedStatus;
//# sourceMappingURL=ChannelPreviewMutedStatus.js.map