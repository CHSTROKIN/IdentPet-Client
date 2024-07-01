var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageActionListItem = exports.MemoizedMessageActionListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _useMessageActionAnimation = require("./hooks/useMessageActionAnimation");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/MessageActionListItem.tsx";
var MessageActionListItemWithContext = function MessageActionListItemWithContext(props) {
  var action = props.action,
    actionType = props.actionType,
    icon = props.icon,
    index = props.index,
    length = props.length,
    title = props.title,
    titleStyle = props.titleStyle;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    border = _useTheme$theme$color.border,
    messageActions = _useTheme$theme.overlay.messageActions;
  var _useMessageActionAnim = (0, _useMessageActionAnimation.useMessageActionAnimation)({
      action: action
    }),
    animatedStyle = _useMessageActionAnim.animatedStyle,
    onTap = _useMessageActionAnim.onTap;
  return (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TapGestureHandler, {
    onHandlerStateChange: onTap,
    children: (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
      style: [styles.row, {
        minWidth: vw(65)
      }, index !== length - 1 ? Object.assign({}, styles.bottomBorder, {
        borderBottomColor: border
      }) : {}, animatedStyle, messageActions.actionContainer],
      testID: "".concat(actionType, "-list-item"),
      children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: messageActions.icon,
        children: icon
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.titleStyle, {
          color: black
        }, titleStyle, messageActions.title],
        children: title
      })]
    })
  });
};
var messageActionIsEqual = function messageActionIsEqual(prevProps, nextProps) {
  return prevProps.length === nextProps.length;
};
var MemoizedMessageActionListItem = _react["default"].memo(MessageActionListItemWithContext, messageActionIsEqual);
exports.MemoizedMessageActionListItem = MemoizedMessageActionListItem;
var MessageActionListItem = function MessageActionListItem(props) {
  return (0, _jsxRuntime.jsx)(MemoizedMessageActionListItem, Object.assign({}, props));
};
exports.MessageActionListItem = MessageActionListItem;
var styles = _reactNative.StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 1
  },
  container: {
    borderRadius: 16,
    marginTop: 8,
    maxWidth: 275
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  titleStyle: {
    paddingLeft: 20
  }
});
//# sourceMappingURL=MessageActionListItem.js.map