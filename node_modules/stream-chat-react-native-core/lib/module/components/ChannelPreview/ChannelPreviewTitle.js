var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewTitle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewTitle.tsx";
var styles = _reactNative.StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '700'
  }
});
var ChannelPreviewTitle = function ChannelPreviewTitle(props) {
  var displayName = props.displayName;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    title = _useTheme$theme.channelPreview.title,
    black = _useTheme$theme.colors.black;
  return (0, _jsxRuntime.jsx)(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.title, {
      color: black
    }, title],
    children: displayName
  });
};
exports.ChannelPreviewTitle = ChannelPreviewTitle;
//# sourceMappingURL=ChannelPreviewTitle.js.map