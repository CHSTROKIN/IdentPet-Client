var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputReplyStateHeaderWithContext = exports.InputReplyStateHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _MessageInputContext = require("../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/InputReplyStateHeader.tsx";
var styles = _reactNative.StyleSheet.create({
  replyBoxHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  replyBoxHeaderTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});
var InputReplyStateHeaderWithContext = function InputReplyStateHeaderWithContext(_ref) {
  var clearQuotedMessageState = _ref.clearQuotedMessageState,
    disabled = _ref.disabled,
    resetInput = _ref.resetInput;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    _useTheme$theme$messa = _useTheme$theme.messageInput.editingStateHeader,
    editingBoxHeader = _useTheme$theme$messa.editingBoxHeader,
    editingBoxHeaderTitle = _useTheme$theme$messa.editingBoxHeaderTitle;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.replyBoxHeader, editingBoxHeader],
    children: [(0, _jsxRuntime.jsx)(_icons.CurveLineLeftUp, {
      pathFill: grey_gainsboro
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.replyBoxHeaderTitle, {
        color: black
      }, editingBoxHeaderTitle],
      children: t('Reply to Message')
    }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
      disabled: disabled,
      onPress: function onPress() {
        resetInput();
        clearQuotedMessageState();
      },
      testID: "close-button",
      children: (0, _jsxRuntime.jsx)(_icons.CircleClose, {
        pathFill: grey
      })
    })]
  });
};
exports.InputReplyStateHeaderWithContext = InputReplyStateHeaderWithContext;
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled;
  var nextDisabled = nextProps.disabled;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  return true;
};
var MemoizedInputReplyStateHeader = _react["default"].memo(InputReplyStateHeaderWithContext, areEqual);
var InputReplyStateHeader = function InputReplyStateHeader(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    clearQuotedMessageState = _useMessageInputConte.clearQuotedMessageState,
    resetInput = _useMessageInputConte.resetInput;
  return (0, _jsxRuntime.jsx)(MemoizedInputReplyStateHeader, Object.assign({
    clearQuotedMessageState: clearQuotedMessageState,
    resetInput: resetInput
  }, props));
};
exports.InputReplyStateHeader = InputReplyStateHeader;
InputReplyStateHeader.displayName = 'ReplyStateHeader{messageInput}';
//# sourceMappingURL=InputReplyStateHeader.js.map