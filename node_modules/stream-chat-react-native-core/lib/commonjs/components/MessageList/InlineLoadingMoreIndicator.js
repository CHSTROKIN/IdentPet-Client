var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreIndicatorWithContext = exports.InlineLoadingMoreIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});
var InlineLoadingMoreIndicatorWithContext = function InlineLoadingMoreIndicatorWithContext(_ref) {
  var loadingMore = _ref.loadingMore;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var accent_blue = theme.colors.accent_blue;
  if (!loadingMore) {
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
exports.InlineLoadingMoreIndicatorWithContext = InlineLoadingMoreIndicatorWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevLoadingMore = prevProps.loadingMore;
  var nextLoadingMore = nextProps.loadingMore;
  var loadingMoreEqual = prevLoadingMore === nextLoadingMore;
  if (!loadingMoreEqual) return false;
  return true;
};
var MemoizedInlineLoadingMoreIndicator = _react["default"].memo(InlineLoadingMoreIndicatorWithContext, areEqual);
var InlineLoadingMoreIndicator = function InlineLoadingMoreIndicator() {
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
    loadingMore = _usePaginatedMessageL.loadingMore;
  return (0, _jsxRuntime.jsx)(MemoizedInlineLoadingMoreIndicator, {
    loadingMore: loadingMore
  });
};
exports.InlineLoadingMoreIndicator = InlineLoadingMoreIndicator;
//# sourceMappingURL=InlineLoadingMoreIndicator.js.map