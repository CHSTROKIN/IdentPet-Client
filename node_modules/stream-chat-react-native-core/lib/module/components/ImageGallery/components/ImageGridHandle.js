var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageGridHandle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _bottomSheet = require("@gorhom/bottom-sheet");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _icons = require("../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/ImageGridHandle.tsx";
var styles = _reactNative.StyleSheet.create({
  closeButton: {
    marginRight: 16
  },
  handle: {
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center'
  },
  leftContainer: {
    marginLeft: 16,
    width: 24
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
});
var ImageGridHandle = function ImageGridHandle(props) {
  var centerComponent = props.centerComponent,
    closeGridView = props.closeGridView,
    leftComponent = props.leftComponent,
    rightComponent = props.rightComponent;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    white = _useTheme$theme$color.white,
    _useTheme$theme$image = _useTheme$theme.imageGallery.grid,
    handle = _useTheme$theme$image.handle,
    handleText = _useTheme$theme$image.handleText;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    accessibilityLabel: "Image Grid Handle",
    style: [styles.handle, {
      backgroundColor: white
    }, handle],
    children: [leftComponent ? leftComponent({
      closeGridView: closeGridView
    }) : (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.leftContainer
    }), centerComponent ? centerComponent({
      closeGridView: closeGridView
    }) : (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: black
      }, handleText],
      children: t('Photos and Videos')
    }), rightComponent ? rightComponent({
      closeGridView: closeGridView
    }) : (0, _jsxRuntime.jsx)(_bottomSheet.TouchableOpacity, {
      onPress: closeGridView,
      children: (0, _jsxRuntime.jsx)(_icons.Close, {
        style: styles.closeButton
      })
    })]
  });
};
exports.ImageGridHandle = ImageGridHandle;
ImageGridHandle.displayName = 'ImageGridHandle{imageGallery{grid{handle}}}';
//# sourceMappingURL=ImageGridHandle.js.map