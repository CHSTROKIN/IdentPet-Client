var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadProgressIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/UploadProgressIndicator.tsx";
var REFRESH_ICON_SIZE = 18;
var UploadProgressIndicator = function UploadProgressIndicator(props) {
  var action = props.action,
    children = props.children,
    style = props.style,
    type = props.type;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    overlayColor = _useTheme$theme.colors.overlay,
    container = _useTheme$theme.messageInput.uploadProgressIndicator.container;
  return type === _utils.ProgressIndicatorTypes.INACTIVE ? (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.overflowHidden, style],
    testID: "inactive-upload-progress-indicator",
    children: children
  }) : (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.overflowHidden, style],
    testID: "active-upload-progress-indicator",
    children: [children, (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [type === _utils.ProgressIndicatorTypes.NOT_SUPPORTED ? styles.overflowHidden : styles.container, {
        backgroundColor: overlayColor
      }, container],
      testID: "not-supported-upload-progress-indicator",
      children: [type === _utils.ProgressIndicatorTypes.IN_PROGRESS && (0, _jsxRuntime.jsx)(InProgressIndicator, {}), type === _utils.ProgressIndicatorTypes.RETRY && (0, _jsxRuntime.jsx)(RetryIndicator, {
        action: action
      })]
    })]
  });
};
exports.UploadProgressIndicator = UploadProgressIndicator;
var InProgressIndicator = function InProgressIndicator() {
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    white_smoke = _useTheme2$theme.colors.white_smoke,
    indicatorColor = _useTheme2$theme.messageInput.uploadProgressIndicator.indicatorColor;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: styles.activityIndicatorContainer,
    children: (0, _jsxRuntime.jsx)(_reactNative.ActivityIndicator, {
      color: indicatorColor || white_smoke,
      testID: "upload-progress-indicator"
    })
  });
};
var RetryIndicator = function RetryIndicator(_ref) {
  var action = _ref.action;
  var _useTheme3 = (0, _ThemeContext.useTheme)(),
    _useTheme3$theme = _useTheme3.theme,
    white_smoke = _useTheme3$theme.colors.white_smoke,
    indicatorColor = _useTheme3$theme.messageInput.uploadProgressIndicator.indicatorColor;
  return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    onPress: action,
    style: styles.retryButtonContainer,
    children: (0, _jsxRuntime.jsx)(_icons.Refresh, {
      height: REFRESH_ICON_SIZE,
      pathFill: indicatorColor || white_smoke,
      testID: "retry-upload-progress-indicator",
      width: REFRESH_ICON_SIZE
    })
  });
};
var styles = _reactNative.StyleSheet.create({
  activityIndicatorContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%'
  },
  overflowHidden: {
    overflow: 'hidden'
  },
  overlay: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    opacity: 0,
    position: 'absolute',
    width: '100%'
  },
  retryButtonContainer: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});
UploadProgressIndicator.displayName = 'UploadProgressIndicator{messageInput{uploadProgressIndicator}}';
//# sourceMappingURL=UploadProgressIndicator.js.map