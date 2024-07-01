var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreThreadIndicatorWithContext = exports.InlineLoadingMoreThreadIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreThreadIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});
var InlineLoadingMoreThreadIndicatorWithContext = function InlineLoadingMoreThreadIndicatorWithContext(_ref) {
  var threadLoadingMore = _ref.threadLoadingMore;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var accent_blue = theme.colors.accent_blue;
  if (!threadLoadingMore) {
    return null;
  }
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.activityIndicatorContainer,
    children: (0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      color: accent_blue,
      size: "small"
    })
  });
};
exports.InlineLoadingMoreThreadIndicatorWithContext = InlineLoadingMoreThreadIndicatorWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevThreadLoadingMore = prevProps.threadLoadingMore;
  var nextThreadLoadingMore = nextProps.threadLoadingMore;
  var threadLoadingMoreEqual = prevThreadLoadingMore === nextThreadLoadingMore;
  if (!threadLoadingMoreEqual) return false;
  return true;
};
var MemoizedInlineLoadingMoreThreadIndicator = _react["default"].memo(InlineLoadingMoreThreadIndicatorWithContext, areEqual);
var InlineLoadingMoreThreadIndicator = function InlineLoadingMoreThreadIndicator() {
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    threadLoadingMore = _useThreadContext.threadLoadingMore;
  return (0, _jsxRuntime.jsx)(MemoizedInlineLoadingMoreThreadIndicator, {
    threadLoadingMore: threadLoadingMore
  });
};
exports.InlineLoadingMoreThreadIndicator = InlineLoadingMoreThreadIndicator;
//# sourceMappingURL=InlineLoadingMoreThreadIndicator.js.map