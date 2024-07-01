var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLoadingMoreRecentIndicatorWithContext = exports.InlineLoadingMoreRecentIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _PaginatedMessageListContext = require("../../contexts/paginatedMessageListContext/PaginatedMessageListContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineLoadingMoreRecentIndicator.tsx";
var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    padding: 10,
    width: '100%'
  }
});
var InlineLoadingMoreRecentIndicatorWithContext = function InlineLoadingMoreRecentIndicatorWithContext(_ref) {
  var loadingMoreRecent = _ref.loadingMoreRecent;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var accent_blue = theme.colors.accent_blue;
  if (!loadingMoreRecent) {
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
exports.InlineLoadingMoreRecentIndicatorWithContext = InlineLoadingMoreRecentIndicatorWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevLoadingMoreRecent = prevProps.loadingMoreRecent;
  var nextLoadingMoreRecent = nextProps.loadingMoreRecent;
  var loadingMoreRecentEqual = prevLoadingMoreRecent === nextLoadingMoreRecent;
  if (!loadingMoreRecentEqual) return false;
  return true;
};
var MemoizedInlineLoadingMoreRecentIndicator = _react["default"].memo(InlineLoadingMoreRecentIndicatorWithContext, areEqual);
var InlineLoadingMoreRecentIndicator = function InlineLoadingMoreRecentIndicator() {
  var _usePaginatedMessageL = (0, _PaginatedMessageListContext.usePaginatedMessageListContext)(),
    loadingMoreRecent = _usePaginatedMessageL.loadingMoreRecent;
  return (0, _jsxRuntime.jsx)(MemoizedInlineLoadingMoreRecentIndicator, {
    loadingMoreRecent: loadingMoreRecent
  });
};
exports.InlineLoadingMoreRecentIndicator = InlineLoadingMoreRecentIndicator;
//# sourceMappingURL=InlineLoadingMoreRecentIndicator.js.map