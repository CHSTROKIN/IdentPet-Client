var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoThumbnail = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/VideoThumbnail.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  roundedView: {
    alignItems: 'center',
    borderRadius: 50,
    display: 'flex',
    elevation: 6,
    height: 36,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: 36
  }
});
var VideoThumbnail = function VideoThumbnail(props) {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    static_black = _useTheme$theme$color.static_black,
    static_white = _useTheme$theme$color.static_white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.videoThumbnail,
    container = _useTheme$theme$messa.container,
    roundedView = _useTheme$theme$messa.roundedView;
  var imageStyle = props.imageStyle,
    style = props.style,
    thumb_url = props.thumb_url;
  return (0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
    accessibilityLabel: "Video Thumbnail",
    imageStyle: imageStyle,
    source: {
      uri: thumb_url
    },
    style: [styles.container, container, style],
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.roundedView, roundedView, {
        backgroundColor: static_white
      }],
      children: (0, _jsxRuntime.jsx)(_icons.Play, {
        fill: static_black,
        height: 32,
        width: 32
      })
    })
  });
};
exports.VideoThumbnail = VideoThumbnail;
//# sourceMappingURL=VideoThumbnail.js.map