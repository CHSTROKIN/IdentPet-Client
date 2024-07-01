var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageDeleted = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _merge = _interopRequireDefault(require("lodash/merge"));
var _MessageTextContainer = require("./MessageTextContainer");
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/MessageDeleted.tsx";
var styles = _reactNative.StyleSheet.create({
  containerInner: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    overflow: 'hidden'
  },
  leftAlignItems: {
    alignItems: 'flex-start'
  },
  rightAlignItems: {
    alignItems: 'flex-end'
  }
});
var MessageDeletedWithContext = function MessageDeletedWithContext(props) {
  var alignment = props.alignment,
    date = props.date,
    groupStyle = props.groupStyle,
    message = props.message,
    MessageFooter = props.MessageFooter,
    noBorder = props.noBorder,
    onLayout = props.onLayout;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    grey = _useTheme$theme$color.grey,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.content,
    _useTheme$theme$messa2 = _useTheme$theme$messa.container,
    borderRadiusL = _useTheme$theme$messa2.borderRadiusL,
    borderRadiusS = _useTheme$theme$messa2.borderRadiusS,
    deletedContainer = _useTheme$theme$messa.deletedContainer,
    deletedContainerInner = _useTheme$theme$messa.deletedContainerInner,
    deletedText = _useTheme$theme$messa.deletedText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    onLayout: onLayout,
    style: [alignment === 'left' ? styles.leftAlignItems : styles.rightAlignItems, deletedContainer],
    children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.containerInner, {
        backgroundColor: grey_whisper,
        borderBottomLeftRadius: groupStyle === 'left_bottom' || groupStyle === 'left_single' ? borderRadiusS : borderRadiusL,
        borderBottomRightRadius: groupStyle === 'right_bottom' || groupStyle === 'right_single' ? borderRadiusS : borderRadiusL,
        borderColor: grey_whisper
      }, noBorder ? {
        borderWidth: 0
      } : {}, deletedContainerInner],
      testID: "message-content-wrapper",
      children: (0, _jsxRuntime.jsx)(_MessageTextContainer.MessageTextContainer, {
        markdownStyles: (0, _merge["default"])({
          em: {
            color: grey
          }
        }, deletedText),
        message: Object.assign({}, message, {
          text: "_".concat(t('Message deleted'), "_")
        })
      })
    }), (0, _jsxRuntime.jsx)(MessageFooter, {
      date: date,
      isDeleted: true
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
    prevDate = prevProps.date,
    prevMessage = prevProps.message;
  var nextAlignment = nextProps.alignment,
    nextDate = nextProps.date,
    nextMessage = nextProps.message;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var isPrevMessageTypeDeleted = prevMessage.type === 'deleted';
  var isNextMessageTypeDeleted = nextMessage.type === 'deleted';
  var messageEqual = isPrevMessageTypeDeleted === isNextMessageTypeDeleted && prevMessage.reply_count === nextMessage.reply_count && prevMessage.status === nextMessage.status && prevMessage.type === nextMessage.type && prevMessage.text === nextMessage.text && prevMessage.pinned === nextMessage.pinned;
  if (!messageEqual) return false;
  var dateEqual = prevDate === nextDate;
  if (!dateEqual) return false;
  return true;
};
var MemoizedMessageDeleted = _react["default"].memo(MessageDeletedWithContext, areEqual);
var MessageDeleted = function MessageDeleted(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    message = _useMessageContext.message;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    MessageFooter = _useMessagesContext.MessageFooter;
  return (0, _jsxRuntime.jsx)(MemoizedMessageDeleted, Object.assign({
    alignment: alignment,
    message: message,
    MessageFooter: MessageFooter
  }, props));
};
exports.MessageDeleted = MessageDeleted;
MessageDeleted.displayName = 'MessageDeleted{messageSimple{content}}';
//# sourceMappingURL=MessageDeleted.js.map