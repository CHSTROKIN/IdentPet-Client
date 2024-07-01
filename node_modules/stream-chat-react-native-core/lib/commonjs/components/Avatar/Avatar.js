var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useLoadingImage2 = require("../../hooks/useLoadingImage");
var _getResizedImageUrl = require("../../utils/getResizedImageUrl");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Avatar/Avatar.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var randomImageBaseUrl = 'https://getstream.io/random_png/';
var randomSvgBaseUrl = 'https://getstream.io/random_svg/';
var streamCDN = 'stream-io-cdn.com';
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  presenceIndicatorContainer: {
    height: 12,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 12
  }
});
var getInitials = function getInitials(fullName) {
  return fullName.split(' ').slice(0, 2).map(function (name) {
    return name.charAt(0);
  }).join(' ');
};
var Avatar = function Avatar(props) {
  var containerStyle = props.containerStyle,
    imageProp = props.image,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    imageStyle = props.imageStyle,
    name = props.name,
    online = props.online,
    presenceIndicatorProp = props.presenceIndicator,
    presenceIndicatorContainerStyle = props.presenceIndicatorContainerStyle,
    size = props.size,
    testID = props.testID;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$avata = _useTheme$theme.avatar,
    container = _useTheme$theme$avata.container,
    image = _useTheme$theme$avata.image,
    presenceIndicator = _useTheme$theme$avata.presenceIndicator,
    presenceIndicatorContainer = _useTheme$theme$avata.presenceIndicatorContainer,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_green = _useTheme$theme$color.accent_green,
    white = _useTheme$theme$color.white;
  var _useLoadingImage = (0, _useLoadingImage2.useLoadingImage)(),
    isLoadingImageError = _useLoadingImage.isLoadingImageError,
    setLoadingImageError = _useLoadingImage.setLoadingImageError;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.container, {
        borderRadius: size / 2,
        height: size,
        width: size
      }, container, containerStyle],
      children: isLoadingImageError ? (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          backgroundColor: '#ececec',
          borderRadius: size / 2,
          height: size,
          width: size
        }
      }) : (0, _jsxRuntime.jsx)(ImageComponent, {
        accessibilityLabel: testID || 'Avatar Image',
        onError: function onError() {
          return setLoadingImageError(true);
        },
        source: {
          uri: !imageProp || imageProp.includes(randomImageBaseUrl) || imageProp.includes(randomSvgBaseUrl) ? imageProp != null && imageProp.includes(streamCDN) ? imageProp : "".concat(randomImageBaseUrl).concat(name ? "?name=".concat(getInitials(name), "&size=").concat(size) : '') : (0, _getResizedImageUrl.getResizedImageUrl)({
            height: size,
            url: imageProp,
            width: size
          })
        },
        style: [image, size ? {
          backgroundColor: '#ececec',
          borderRadius: size / 2,
          height: size,
          width: size
        } : {}, imageStyle],
        testID: testID || 'avatar-image'
      })
    }), online && (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.presenceIndicatorContainer, presenceIndicatorContainer, presenceIndicatorContainerStyle],
      children: (0, _jsxRuntime.jsx)(_reactNativeSvg["default"], {
        children: (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, Object.assign({
          fill: accent_green,
          stroke: white
        }, presenceIndicator, presenceIndicatorProp))
      })
    })]
  });
};
exports.Avatar = Avatar;
Avatar.displayName = 'Avatar{avatar}';
//# sourceMappingURL=Avatar.js.map