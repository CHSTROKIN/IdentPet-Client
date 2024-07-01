var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingErrorIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingErrorIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  errorText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20
  },
  retryText: {
    fontSize: 30,
    fontWeight: '600'
  }
});
var LoadingErrorWrapper = function LoadingErrorWrapper(props) {
  var children = props.children,
    onPress = props.onPress,
    text = props.text;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_red = _useTheme$theme.colors.accent_red,
    _useTheme$theme$loadi = _useTheme$theme.loadingErrorIndicator,
    container = _useTheme$theme$loadi.container,
    errorText = _useTheme$theme$loadi.errorText;
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, {
    onPress: onPress,
    style: [styles.container, container],
    children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.errorText, {
        color: accent_red
      }, errorText],
      testID: "loading-error",
      children: text
    }), children]
  });
};
var LoadingErrorIndicator = function LoadingErrorIndicator(props) {
  var listType = props.listType,
    _props$retry = props.retry,
    retry = _props$retry === void 0 ? function () {
      return null;
    } : _props$retry;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    black = _useTheme2$theme.colors.black,
    retryText = _useTheme2$theme.loadingErrorIndicator.retryText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  switch (listType) {
    case 'channel':
      return (0, _jsxRuntime.jsx)(LoadingErrorWrapper, {
        onPress: retry,
        text: t('Error loading channel list...'),
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.retryText, {
            color: black
          }, retryText],
          children: "\u27F3"
        })
      });
    case 'message':
      return (0, _jsxRuntime.jsx)(LoadingErrorWrapper, {
        onPress: retry,
        text: t('Error loading messages for this channel...')
      });
    default:
      return (0, _jsxRuntime.jsx)(LoadingErrorWrapper, {
        text: t('Error loading')
      });
  }
};
exports.LoadingErrorIndicator = LoadingErrorIndicator;
LoadingErrorIndicator.displayName = 'LoadingErrorIndicator{loadingErrorIndicator}';
//# sourceMappingURL=LoadingErrorIndicator.js.map