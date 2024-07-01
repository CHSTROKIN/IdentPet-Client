var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageStatus = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _Check = require("../../../icons/Check");
var _CheckAll = require("../../../icons/CheckAll");
var _Time = require("../../../icons/Time");
var _utils = require("../../../utils/utils");
var _useMessageList = require("../../MessageList/hooks/useMessageList");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageStatus.tsx";
var styles = _reactNative.StyleSheet.create({
  readByCount: {
    fontSize: 11,
    fontWeight: '700',
    paddingRight: 3
  },
  statusContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 3
  }
});
var MessageStatusWithContext = function MessageStatusWithContext(props) {
  var message = props.message,
    threadList = props.threadList;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey_dark = _useTheme$theme$color.grey_dark,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.status,
    checkAllIcon = _useTheme$theme$messa.checkAllIcon,
    checkIcon = _useTheme$theme$messa.checkIcon,
    readByCount = _useTheme$theme$messa.readByCount,
    statusContainer = _useTheme$theme$messa.statusContainer,
    timeIcon = _useTheme$theme$messa.timeIcon;
  if (message.status === _utils.MessageStatusTypes.SENDING) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      testID: "sending-container",
      children: (0, _jsxRuntime.jsx)(_Time.Time, Object.assign({}, timeIcon))
    });
  }
  if (threadList || message.status === _utils.MessageStatusTypes.FAILED) return null;
  if ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(message)) {
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      children: [typeof message.readBy === 'number' ? (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.readByCount, {
          color: accent_blue
        }, readByCount],
        testID: "read-by-container",
        children: message.readBy
      }) : null, message.type !== 'error' ? typeof message.readBy === 'number' || message.readBy === true ? (0, _jsxRuntime.jsx)(_CheckAll.CheckAll, Object.assign({
        pathFill: accent_blue
      }, checkAllIcon)) : (0, _jsxRuntime.jsx)(_Check.Check, Object.assign({
        pathFill: grey_dark
      }, checkIcon)) : null]
    });
  }
  if (message.status === _utils.MessageStatusTypes.RECEIVED && message.type !== 'ephemeral') {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.statusContainer, statusContainer],
      testID: "delivered-container",
      children: (0, _jsxRuntime.jsx)(_Check.Check, Object.assign({
        pathFill: grey_dark
      }, checkIcon))
    });
  }
  return null;
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message,
    prevThreadList = prevProps.threadList;
  var nextMessage = nextProps.message,
    nextThreadList = nextProps.threadList;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  var messageEqual = prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(prevMessage) && prevMessage.readBy) === ((0, _useMessageList.isMessageWithStylesReadByAndDateSeparator)(nextMessage) && nextMessage.readBy);
  if (!messageEqual) return false;
  return true;
};
var MemoizedMessageStatus = _react["default"].memo(MessageStatusWithContext, areEqual);
var MessageStatus = function MessageStatus(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    message = _useMessageContext.message,
    threadList = _useMessageContext.threadList;
  return (0, _jsxRuntime.jsx)(MemoizedMessageStatus, Object.assign({
    message: message,
    threadList: threadList
  }, props));
};
exports.MessageStatus = MessageStatus;
MessageStatus.displayName = 'MessageStatus{messageSimple{status}}';
//# sourceMappingURL=MessageStatus.js.map