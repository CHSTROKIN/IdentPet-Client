var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLoadingFailedIndicator = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/ImageLoadingFailedIndicator.tsx";
var WARNING_ICON_SIZE = 14;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  errorText: {
    fontSize: 8,
    justifyContent: 'center',
    paddingHorizontal: 8
  },
  warningIconStyle: {
    borderRadius: 24,
    marginLeft: 4,
    marginTop: 6
  }
});
var ImageLoadingFailedIndicator = function ImageLoadingFailedIndicator(props) {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    accent_red = _useTheme$theme$color.accent_red,
    overlay = _useTheme$theme$color.overlay,
    white = _useTheme$theme$color.white;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var style = props.style,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return (0, _jsxRuntime.jsx)(_reactNative.View, Object.assign({}, rest, {
    accessibilityHint: "image-loading-error",
    style: [style],
    children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, {
        backgroundColor: overlay
      }],
      children: [(0, _jsxRuntime.jsx)(_icons.Warning, {
        height: WARNING_ICON_SIZE,
        pathFill: accent_red,
        style: styles.warningIconStyle,
        width: WARNING_ICON_SIZE
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.errorText, {
          color: white
        }],
        children: t('Error loading')
      })]
    })
  }));
};
exports.ImageLoadingFailedIndicator = ImageLoadingFailedIndicator;
//# sourceMappingURL=ImageLoadingFailedIndicator.js.map