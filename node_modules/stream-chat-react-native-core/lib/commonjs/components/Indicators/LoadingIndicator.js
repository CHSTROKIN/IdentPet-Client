var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _Spinner = require("../Spinner/Spinner");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  loadingText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20
  }
});
var LoadingIndicatorWrapper = function LoadingIndicatorWrapper(_ref) {
  var text = _ref.text;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    white_snow = _useTheme$theme$color.white_snow,
    _useTheme$theme$loadi = _useTheme$theme.loadingIndicator,
    container = _useTheme$theme$loadi.container,
    loadingText = _useTheme$theme$loadi.loadingText;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: white_snow
    }, container],
    children: [(0, _jsxRuntime.jsx)(_Spinner.Spinner, {
      height: 20,
      width: 20
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.loadingText, {
        color: black
      }, loadingText],
      testID: "loading",
      children: text
    })]
  });
};
var LoadingIndicator = function LoadingIndicator(props) {
  var listType = props.listType,
    loadingText = props.loadingText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  if (loadingText) {
    return (0, _jsxRuntime.jsx)(LoadingIndicatorWrapper, {
      text: loadingText
    });
  }
  switch (listType) {
    case 'channel':
      return (0, _jsxRuntime.jsx)(LoadingIndicatorWrapper, {
        text: t('Loading channels...')
      });
    case 'message':
      return (0, _jsxRuntime.jsx)(LoadingIndicatorWrapper, {
        text: t('Loading messages...')
      });
    default:
      return (0, _jsxRuntime.jsx)(LoadingIndicatorWrapper, {
        text: t('Loading...')
      });
  }
};
exports.LoadingIndicator = LoadingIndicator;
LoadingIndicator.displayName = 'LoadingIndicator{loadingIndicator}';
//# sourceMappingURL=LoadingIndicator.js.map