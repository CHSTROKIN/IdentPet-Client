var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagePinnedHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessagePinnedHeader.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  label: {}
});
var MessagePinnedHeaderWithContext = function MessagePinnedHeaderWithContext(props) {
  var _message$pinned_by, _client$user, _message$pinned_by2;
  var alignment = props.alignment,
    message = props.message;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey = _useTheme$theme.colors.grey,
    pinnedHeader = _useTheme$theme.messageSimple.pinnedHeader;
  var container = pinnedHeader.container,
    label = pinnedHeader.label;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      justifyContent: alignment === 'left' ? 'flex-start' : 'flex-end'
    }, container],
    testID: "message-pinned",
    children: [(0, _jsxRuntime.jsx)(_icons.PinHeader, {
      pathFill: grey
    }), (0, _jsxRuntime.jsxs)(_reactNative.Text, {
      style: [{
        color: grey
      }, styles.label, label],
      children: [t('Pinned by'), ' ', (message == null ? void 0 : (_message$pinned_by = message.pinned_by) == null ? void 0 : _message$pinned_by.id) === (client == null ? void 0 : (_client$user = client.user) == null ? void 0 : _client$user.id) ? t('You') : message == null ? void 0 : (_message$pinned_by2 = message.pinned_by) == null ? void 0 : _message$pinned_by2.name]
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message;
  var nextMessage = nextProps.message;
  var messageEqual = prevMessage.deleted_at === nextMessage.deleted_at && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.pinned === nextMessage.pinned;
  if (!messageEqual) return false;
  return true;
};
var MemoizedMessagePinnedHeader = _react["default"].memo(MessagePinnedHeaderWithContext, areEqual);
var MessagePinnedHeader = function MessagePinnedHeader(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    lastGroupMessage = _useMessageContext.lastGroupMessage,
    message = _useMessageContext.message;
  return (0, _jsxRuntime.jsx)(MemoizedMessagePinnedHeader, Object.assign({
    alignment: alignment,
    lastGroupMessage: lastGroupMessage,
    message: message
  }, props));
};
exports.MessagePinnedHeader = MessagePinnedHeader;
MessagePinnedHeader.displayName = 'MessagePinnedHeader{messageSimple{pinned}}';
//# sourceMappingURL=MessagePinnedHeader.js.map