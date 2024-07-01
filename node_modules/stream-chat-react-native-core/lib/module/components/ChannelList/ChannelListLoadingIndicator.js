var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListLoadingIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListLoadingIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});
var ChannelListLoadingIndicator = function ChannelListLoadingIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    container = _useTheme$theme.channelListLoadingIndicator.container,
    white_snow = _useTheme$theme.colors.white_snow;
  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
    numberOfSkeletons = _useChannelsContext.numberOfSkeletons,
    Skeleton = _useChannelsContext.Skeleton;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white_snow
    }, container],
    testID: "channel-list-loading-indicator",
    children: Array.from(Array(numberOfSkeletons)).map(function (_, index) {
      return (0, _jsxRuntime.jsx)(Skeleton, {}, "skeleton_".concat(index));
    })
  });
};
exports.ChannelListLoadingIndicator = ChannelListLoadingIndicator;
//# sourceMappingURL=ChannelListLoadingIndicator.js.map