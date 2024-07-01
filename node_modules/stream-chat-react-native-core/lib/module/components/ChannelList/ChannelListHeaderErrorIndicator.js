var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListHeaderErrorIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListHeaderErrorIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    width: '100%'
  },
  errorText: {
    fontSize: 12,
    padding: 3
  }
});
var ChannelListHeaderErrorIndicator = function ChannelListHeaderErrorIndicator(_ref) {
  var _ref$onPress = _ref.onPress,
    onPress = _ref$onPress === void 0 ? function () {
      return null;
    } : _ref$onPress;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelListHeaderErrorIndicator,
    container = _useTheme$theme$chann.container,
    errorText = _useTheme$theme$chann.errorText,
    _useTheme$theme$color = _useTheme$theme.colors,
    grey_dark = _useTheme$theme$color.grey_dark,
    white = _useTheme$theme$color.white;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    onPress: onPress,
    style: [styles.container, {
      backgroundColor: "".concat(grey_dark, "E6")
    }, container],
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.errorText, {
        color: white
      }, errorText],
      testID: "channel-loading-error",
      children: t('Error while loading, please reload/refresh')
    })
  });
};
exports.ChannelListHeaderErrorIndicator = ChannelListHeaderErrorIndicator;
ChannelListHeaderErrorIndicator.displayName = 'ChannelListHeaderErrorIndicator{channelListHeaderErrorIndicator}';
//# sourceMappingURL=ChannelListHeaderErrorIndicator.js.map