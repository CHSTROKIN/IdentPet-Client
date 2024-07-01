var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageBounceWithContext = exports.MessageBounce = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageBounce.tsx";
var MessageBounceWithContext = function MessageBounceWithContext(props) {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var message = props.message,
    removeMessage = props.removeMessage,
    retrySendMessage = props.retrySendMessage,
    setEditingState = props.setEditingState,
    setIsBounceDialogOpen = props.setIsBounceDialogOpen;
  var handleEditMessage = function handleEditMessage() {
    setEditingState(message);
    if (setIsBounceDialogOpen) {
      setIsBounceDialogOpen(false);
    }
  };
  var handleResend = function handleResend() {
    retrySendMessage(message);
    if (setIsBounceDialogOpen) {
      setIsBounceDialogOpen(false);
    }
  };
  var handleRemoveMessage = function handleRemoveMessage() {
    removeMessage(message);
    if (setIsBounceDialogOpen) {
      setIsBounceDialogOpen(false);
    }
  };
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: _reactNative.Alert.alert(t('Are you sure?'), t('Consider how your comment might make others feel and be sure to follow our Community Guidelines'), [{
      onPress: handleResend,
      text: t('Send Anyway')
    }, {
      onPress: handleEditMessage,
      text: t('Edit Message')
    }, {
      onPress: handleRemoveMessage,
      text: t('Delete Message')
    }], {
      cancelable: true
    })
  });
};
exports.MessageBounceWithContext = MessageBounceWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message;
  var nextMessage = nextProps.message;
  var messageEqual = prevMessage.cid === nextMessage.cid && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text;
  if (!messageEqual) return false;
  return true;
};
var MemoizedMessageBounce = _react["default"].memo(MessageBounceWithContext, areEqual);
var MessageBounce = function MessageBounce(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    message = _useMessageContext.message;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    removeMessage = _useMessagesContext.removeMessage,
    retrySendMessage = _useMessagesContext.retrySendMessage,
    setEditingState = _useMessagesContext.setEditingState;
  return (0, _jsxRuntime.jsx)(MemoizedMessageBounce, Object.assign({
    message: message,
    removeMessage: removeMessage,
    retrySendMessage: retrySendMessage,
    setEditingState: setEditingState
  }, props));
};
exports.MessageBounce = MessageBounce;
//# sourceMappingURL=MessageBounce.js.map