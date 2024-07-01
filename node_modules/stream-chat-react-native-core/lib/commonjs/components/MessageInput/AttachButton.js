var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AttachmentPickerContext = require("../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Attach = require("../../icons/Attach");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/AttachButton.tsx";
var AttachButtonWithContext = function AttachButtonWithContext(props) {
  var disabled = props.disabled,
    handleOnPress = props.handleOnPress,
    selectedPicker = props.selectedPicker;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    attachButton = _useTheme$theme.messageInput.attachButton;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    disabled: disabled,
    onPress: disabled ? function () {
      return null;
    } : handleOnPress,
    style: [attachButton],
    testID: "attach-button",
    children: (0, _jsxRuntime.jsx)(_Attach.Attach, {
      pathFill: selectedPicker === 'images' ? accent_blue : grey
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevDisabled = prevProps.disabled,
    prevHandleOnPress = prevProps.handleOnPress,
    prevSelectedPicker = prevProps.selectedPicker;
  var nextDisabled = nextProps.disabled,
    nextHandleOnPress = nextProps.handleOnPress,
    nextSelectedPicker = nextProps.selectedPicker;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var handleOnPressEqual = prevHandleOnPress === nextHandleOnPress;
  if (!handleOnPressEqual) return false;
  var selectedPickerEqual = prevSelectedPicker === nextSelectedPicker;
  if (!selectedPickerEqual) return false;
  return true;
};
var MemoizedAttachButton = _react["default"].memo(AttachButtonWithContext, areEqual);
var AttachButton = function AttachButton(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    _useChannelContext$di = _useChannelContext.disabled,
    disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    selectedPicker = _useAttachmentPickerC.selectedPicker;
  return (0, _jsxRuntime.jsx)(MemoizedAttachButton, Object.assign({
    disabled: disabled,
    selectedPicker: selectedPicker
  }, props));
};
exports.AttachButton = AttachButton;
AttachButton.displayName = 'AttachButton{messageInput}';
//# sourceMappingURL=AttachButton.js.map