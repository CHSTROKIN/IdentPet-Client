var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageActionList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _MessageActionListItem = require("./MessageActionListItem");
var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/MessageActionList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MessageActionListWithContext = function MessageActionListWithContext(props) {
  var alignment = props.alignment,
    error = props.error,
    isMyMessage = props.isMyMessage,
    isThreadMessage = props.isThreadMessage,
    message = props.message,
    _props$MessageActionL = props.MessageActionListItem,
    MessageActionListItem = _props$MessageActionL === void 0 ? _MessageActionListItem.MessageActionListItem : _props$MessageActionL,
    messageActions = props.messageActions,
    messageReactions = props.messageReactions,
    showScreen = props.showScreen;
  var messageActionProps = {
    error: error,
    isMyMessage: isMyMessage,
    isThreadMessage: isThreadMessage,
    message: message,
    messageReactions: messageReactions
  };
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    white_snow = _useTheme.theme.colors.white_snow;
  var height = (0, _reactNativeReanimated.useSharedValue)(0);
  var width = (0, _reactNativeReanimated.useSharedValue)(0);
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-height.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -width.value / 2 : width.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [alignment]);
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
    onLayout: function onLayout(_ref) {
      var layout = _ref.nativeEvent.layout;
      width.value = layout.width;
      height.value = layout.height;
    },
    style: [styles.container, {
      backgroundColor: white_snow,
      minWidth: vw(65)
    }, showScreenStyle],
    testID: "message-action-list",
    children: messageActions == null ? void 0 : messageActions.map(function (messageAction, index) {
      return (0, _jsxRuntime.jsx)(MessageActionListItem, Object.assign({}, messageActionProps, Object.assign({}, messageAction, {
        index: index,
        length: messageActions.length
      })), messageAction.title);
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
    prevMessageActions = prevProps.messageActions;
  var nextAlignment = nextProps.alignment,
    nextMessageActions = nextProps.messageActions;
  var messageActionsEqual = (prevMessageActions == null ? void 0 : prevMessageActions.length) === (nextMessageActions == null ? void 0 : nextMessageActions.length);
  if (!messageActionsEqual) return false;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  return true;
};
var MemoizedMessageActionList = _react["default"].memo(MessageActionListWithContext, areEqual);
var MessageActionList = function MessageActionList(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
    data = _useMessageOverlayCon.data;
  var _ref2 = data || {},
    alignment = _ref2.alignment,
    messageActions = _ref2.messageActions;
  return (0, _jsxRuntime.jsx)(MemoizedMessageActionList, Object.assign({
    alignment: alignment,
    messageActions: messageActions
  }, props));
};
exports.MessageActionList = MessageActionList;
var styles = _reactNative.StyleSheet.create({
  bottomBorder: {
    borderBottomWidth: 1
  },
  container: {
    borderRadius: 16,
    marginTop: 8,
    overflow: 'hidden'
  },
  titleStyle: {
    paddingLeft: 20
  }
});
//# sourceMappingURL=MessageActionList.js.map