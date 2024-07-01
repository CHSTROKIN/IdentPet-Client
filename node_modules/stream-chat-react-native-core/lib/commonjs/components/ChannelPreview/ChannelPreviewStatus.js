var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewStatus = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useLatestMessagePreview = require("./hooks/useLatestMessagePreview");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewStatus.tsx";
var styles = _reactNative.StyleSheet.create({
  date: {
    fontSize: 12,
    marginLeft: 2,
    textAlign: 'right'
  },
  flexRow: {
    flexDirection: 'row'
  }
});
var ChannelPreviewStatus = function ChannelPreviewStatus(props) {
  var _latestMessagePreview;
  var formatLatestMessageDate = props.formatLatestMessageDate,
    latestMessagePreview = props.latestMessagePreview;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelPreview,
    checkAllIcon = _useTheme$theme$chann.checkAllIcon,
    checkIcon = _useTheme$theme$chann.checkIcon,
    date = _useTheme$theme$chann.date,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey;
  var created_at = (_latestMessagePreview = latestMessagePreview.messageObject) == null ? void 0 : _latestMessagePreview.created_at;
  var latestMessageDate = created_at ? new Date(created_at) : new Date();
  var status = latestMessagePreview.status;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.flexRow,
    children: [status === _useLatestMessagePreview.MessageReadStatus.READ ? (0, _jsxRuntime.jsx)(_icons.CheckAll, Object.assign({
      pathFill: accent_blue
    }, checkAllIcon)) : status === _useLatestMessagePreview.MessageReadStatus.UNREAD ? (0, _jsxRuntime.jsx)(_icons.Check, Object.assign({
      pathFill: grey
    }, checkIcon)) : null, (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.date, {
        color: grey
      }, date],
      children: formatLatestMessageDate && latestMessageDate ? formatLatestMessageDate(latestMessageDate).toString() : latestMessagePreview.created_at.toString()
    })]
  });
};
exports.ChannelPreviewStatus = ChannelPreviewStatus;
//# sourceMappingURL=ChannelPreviewStatus.js.map