var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListFooterLoadingIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Spinner = require("../Spinner/Spinner");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListFooterLoadingIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});
var ChannelListFooterLoadingIndicator = function ChannelListFooterLoadingIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    container = _useTheme.theme.channelListFooterLoadingIndicator.container;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container],
    testID: "channel-list-footer-loading-indicator",
    children: (0, _jsxRuntime.jsx)(_Spinner.Spinner, {
      height: 20,
      width: 20
    })
  });
};
exports.ChannelListFooterLoadingIndicator = ChannelListFooterLoadingIndicator;
ChannelListFooterLoadingIndicator.displayName = 'ChannelListFooterLoadingIndicator{channelListFooterLoadingIndicator}';
//# sourceMappingURL=ChannelListFooterLoadingIndicator.js.map