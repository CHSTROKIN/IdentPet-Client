var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewMessage.tsx";
var styles = _reactNative.StyleSheet.create({
  bold: {
    fontWeight: '600'
  },
  message: {
    flexShrink: 1,
    fontSize: 12
  }
});
var ChannelPreviewMessage = function ChannelPreviewMessage(props) {
  var _latestMessagePreview;
  var latestMessagePreview = props.latestMessagePreview;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    message = _useTheme$theme.channelPreview.message,
    grey = _useTheme$theme.colors.grey;
  return (0, _jsxRuntime.jsx)(_reactNative.Text, {
    numberOfLines: 1,
    style: [styles.message, {
      color: grey
    }, message],
    children: latestMessagePreview == null ? void 0 : (_latestMessagePreview = latestMessagePreview.previews) == null ? void 0 : _latestMessagePreview.map(function (preview, index) {
      return preview.text && (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [{
          color: grey
        }, preview.bold ? styles.bold : {}, message],
        children: preview.text
      }, "".concat(preview.text, "_").concat(index));
    })
  });
};
exports.ChannelPreviewMessage = ChannelPreviewMessage;
//# sourceMappingURL=ChannelPreviewMessage.js.map