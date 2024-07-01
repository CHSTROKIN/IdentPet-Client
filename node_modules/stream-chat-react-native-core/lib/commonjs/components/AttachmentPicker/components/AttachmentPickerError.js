var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerError = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _AttachmentPickerContext = require("../../../contexts/attachmentPickerContext/AttachmentPickerContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerError.tsx";
var styles = _reactNative.StyleSheet.create({
  errorButtonText: {
    fontSize: 14,
    fontWeight: '600',
    marginHorizontal: 24,
    marginTop: 16,
    textAlign: 'center'
  },
  errorContainer: {
    alignItems: 'center',
    bottom: 0,
    left: 0,
    paddingTop: 16,
    position: 'absolute',
    right: 0
  },
  errorText: {
    fontSize: 14,
    marginHorizontal: 24,
    marginTop: 16,
    textAlign: 'center'
  }
});
var AttachmentPickerError = function AttachmentPickerError(props) {
  var attachmentPickerBottomSheetHeight = props.attachmentPickerBottomSheetHeight,
    attachmentPickerErrorButtonText = props.attachmentPickerErrorButtonText,
    AttachmentPickerErrorImage = props.AttachmentPickerErrorImage,
    attachmentPickerErrorText = props.attachmentPickerErrorText;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$attac = _useTheme$theme.attachmentPicker,
    errorButtonText = _useTheme$theme$attac.errorButtonText,
    errorContainer = _useTheme$theme$attac.errorContainer,
    errorText = _useTheme$theme$attac.errorText,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    white_smoke = _useTheme$theme$color.white_smoke;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useAttachmentPickerC = (0, _AttachmentPickerContext.useAttachmentPickerContext)(),
    closePicker = _useAttachmentPickerC.closePicker,
    setSelectedPicker = _useAttachmentPickerC.setSelectedPicker;
  var openSettings = function () {
    var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setSelectedPicker(undefined);
            closePicker();
            _context.next = 5;
            return _reactNative.Linking.openSettings();
          case 5:
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function openSettings() {
      return _ref.apply(this, arguments);
    };
  }();
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.errorContainer, {
      backgroundColor: white_smoke,
      height: attachmentPickerBottomSheetHeight != null ? attachmentPickerBottomSheetHeight : 308
    }, errorContainer],
    children: [(0, _jsxRuntime.jsx)(AttachmentPickerErrorImage, {}), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.errorText, {
        color: grey
      }, errorText],
      children: attachmentPickerErrorText || t('Please enable access to your photos and videos so you can share them.')
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      onPress: openSettings,
      style: [styles.errorButtonText, {
        color: accent_blue
      }, errorButtonText],
      suppressHighlighting: true,
      children: attachmentPickerErrorButtonText || t('Allow access to your Gallery')
    })]
  });
};
exports.AttachmentPickerError = AttachmentPickerError;
//# sourceMappingURL=AttachmentPickerError.js.map