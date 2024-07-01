var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageReplies = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageReplies.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8
  },
  curveContainer: {
    flexDirection: 'row'
  },
  leftMessageRepliesCurve: {
    borderBottomLeftRadius: 16,
    borderRightWidth: 0
  },
  messageRepliesCurve: {
    borderTopWidth: 0,
    borderWidth: 1,
    height: 16,
    width: 16
  },
  messageRepliesText: {
    fontSize: 12,
    fontWeight: '700',
    paddingBottom: 5,
    paddingHorizontal: 8
  },
  rightMessageRepliesCurve: {
    borderBottomRightRadius: 16,
    borderLeftWidth: 0
  }
});
var MessageRepliesWithContext = function MessageRepliesWithContext(props) {
  var alignment = props.alignment,
    message = props.message,
    MessageRepliesAvatars = props.MessageRepliesAvatars,
    noBorder = props.noBorder,
    _onLongPress = props.onLongPress,
    onOpenThread = props.onOpenThread,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    repliesCurveColor = props.repliesCurveColor,
    t = props.t,
    threadList = props.threadList;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_blue = _useTheme$theme.colors.accent_blue,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.replies,
    container = _useTheme$theme$messa.container,
    leftCurve = _useTheme$theme$messa.leftCurve,
    messageRepliesText = _useTheme$theme$messa.messageRepliesText,
    rightCurve = _useTheme$theme$messa.rightCurve;
  if (threadList || !message.reply_count) return null;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.curveContainer,
    children: [alignment === 'left' && (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.curveContainer,
      testID: "message-replies-left",
      children: [!noBorder && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [{
          borderColor: repliesCurveColor
        }, styles.messageRepliesCurve, styles.leftMessageRepliesCurve, leftCurve]
      }), (0, _jsxRuntime.jsx)(MessageRepliesAvatars, {
        alignment: alignment,
        message: message
      })]
    }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      disabled: preventPress,
      onLongPress: function onLongPress(event) {
        if (_onLongPress) {
          _onLongPress({
            emitter: 'messageReplies',
            event: event
          });
        }
      },
      onPress: function onPress(event) {
        if (_onPress) {
          _onPress({
            defaultHandler: onOpenThread,
            emitter: 'messageReplies',
            event: event
          });
        }
      },
      onPressIn: function onPressIn(event) {
        if (_onPressIn) {
          _onPressIn({
            defaultHandler: onOpenThread,
            emitter: 'messageReplies',
            event: event
          });
        }
      },
      style: [styles.container, container],
      testID: "message-replies",
      children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.messageRepliesText, {
          color: accent_blue
        }, messageRepliesText],
        children: message.reply_count === 1 ? t('1 Thread Reply') : t('{{ replyCount }} Thread Replies', {
          replyCount: message.reply_count
        })
      })
    }), alignment === 'right' && (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: styles.curveContainer,
      testID: "message-replies-right",
      children: [(0, _jsxRuntime.jsx)(MessageRepliesAvatars, {
        alignment: alignment,
        message: message
      }), !noBorder && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [{
          borderColor: repliesCurveColor
        }, styles.messageRepliesCurve, styles.rightMessageRepliesCurve, rightCurve]
      })]
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message,
    prevNoBorder = prevProps.noBorder,
    prevOnOpenThread = prevProps.onOpenThread,
    prevT = prevProps.t,
    prevThreadList = prevProps.threadList;
  var nextMessage = nextProps.message,
    nextNoBorder = nextProps.noBorder,
    nextOnOpenThread = nextProps.onOpenThread,
    nextT = nextProps.t,
    nextThreadList = nextProps.threadList;
  var threadListEqual = prevThreadList === nextThreadList;
  if (!threadListEqual) return false;
  var messageReplyCountEqual = prevMessage.reply_count === nextMessage.reply_count;
  if (!messageReplyCountEqual) return false;
  var noBorderEqual = prevNoBorder === nextNoBorder;
  if (!noBorderEqual) return false;
  var tEqual = prevT === nextT;
  if (!tEqual) return false;
  var onOpenThreadEqual = prevOnOpenThread === nextOnOpenThread;
  if (!onOpenThreadEqual) return false;
  return true;
};
var MemoizedMessageReplies = _react["default"].memo(MessageRepliesWithContext, areEqual);
var MessageReplies = function MessageReplies(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    message = _useMessageContext.message,
    onLongPress = _useMessageContext.onLongPress,
    onOpenThread = _useMessageContext.onOpenThread,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    preventPress = _useMessageContext.preventPress,
    threadList = _useMessageContext.threadList;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    MessageRepliesAvatars = _useMessagesContext.MessageRepliesAvatars;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsx)(MemoizedMessageReplies, Object.assign({
    alignment: alignment,
    message: message,
    MessageRepliesAvatars: MessageRepliesAvatars,
    onLongPress: onLongPress,
    onOpenThread: onOpenThread,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    t: t,
    threadList: threadList
  }, props));
};
exports.MessageReplies = MessageReplies;
MessageReplies.displayName = 'MessageReplies{messageSimple{replies}}';
//# sourceMappingURL=MessageReplies.js.map