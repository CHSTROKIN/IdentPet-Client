var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerIOSSelectMorePhotos = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _native = require("../../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerIOSSelectMorePhotos.tsx";
var AttachmentPickerIOSSelectMorePhotos = function AttachmentPickerIOSSelectMorePhotos() {
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    white = _useTheme$theme$color.white;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    onPress: _native.iOS14RefreshGallerySelection,
    style: [styles.container, {
      backgroundColor: white
    }],
    children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: accent_blue
      }],
      children: t('Select More Photos')
    })
  });
};
exports.AttachmentPickerIOSSelectMorePhotos = AttachmentPickerIOSSelectMorePhotos;
var styles = _reactNative.StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'center'
  }
});
//# sourceMappingURL=AttachmentPickerIOSSelectMorePhotos.js.map