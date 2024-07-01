var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteSuggestionHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _Lightning = require("../../icons/Lightning");
var _Smile = require("../../icons/Smile");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AutoCompleteInput/AutoCompleteSuggestionHeader.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8
  },
  title: {
    fontSize: 14,
    paddingLeft: 8
  }
});
var AutoCompleteSuggestionHeaderWithContext = function AutoCompleteSuggestionHeaderWithContext(_ref) {
  var queryText = _ref.queryText,
    triggerType = _ref.triggerType;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    _useTheme$theme$messa = _useTheme$theme.messageInput.suggestions.header,
    container = _useTheme$theme$messa.container,
    title = _useTheme$theme$messa.title;
  if (triggerType === 'command') {
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, container],
      children: [(0, _jsxRuntime.jsx)(_Lightning.Lightning, {
        pathFill: accent_blue
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.title, {
          color: grey
        }, title],
        testID: "commands-header-title",
        children: t('Instant Commands')
      })]
    });
  } else if (triggerType === 'emoji') {
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, container],
      children: [(0, _jsxRuntime.jsx)(_Smile.Smile, {
        pathFill: accent_blue
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.title, {
          color: grey
        }, title],
        testID: "emojis-header-title",
        children: t('Emoji matching') + ' "' + queryText + '"'
      })]
    });
  } else if (triggerType === 'mention') {
    return null;
  } else {
    return null;
  }
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevQueryText = prevProps.queryText,
    prevType = prevProps.triggerType;
  var nextQueryText = nextProps.queryText,
    nextType = nextProps.triggerType;
  var typeEqual = prevType === nextType;
  if (!typeEqual) return false;
  var valueEqual = prevQueryText === nextQueryText;
  if (!valueEqual) return false;
  return true;
};
var MemoizedAutoCompleteSuggestionHeader = _react["default"].memo(AutoCompleteSuggestionHeaderWithContext, areEqual);
var AutoCompleteSuggestionHeader = function AutoCompleteSuggestionHeader(props) {
  return (0, _jsxRuntime.jsx)(MemoizedAutoCompleteSuggestionHeader, Object.assign({}, props));
};
exports.AutoCompleteSuggestionHeader = AutoCompleteSuggestionHeader;
AutoCompleteSuggestionHeader.displayName = 'AutoCompleteSuggestionHeader{messageInput{suggestions{Header}}}';
//# sourceMappingURL=AutoCompleteSuggestionHeader.js.map