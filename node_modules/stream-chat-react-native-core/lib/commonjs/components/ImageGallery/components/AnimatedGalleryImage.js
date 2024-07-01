var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedGalleryImage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _useViewport2 = require("../../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageGallery/components/AnimatedGalleryImage.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var oneEighth = 1 / 8;
var AnimatedGalleryImage = _react["default"].memo(function (props) {
  var accessibilityLabel = props.accessibilityLabel,
    index = props.index,
    offsetScale = props.offsetScale,
    photo = props.photo,
    previous = props.previous,
    scale = props.scale,
    screenHeight = props.screenHeight,
    selected = props.selected,
    shouldRender = props.shouldRender,
    style = props.style,
    translateX = props.translateX,
    translateY = props.translateY;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var screenWidth = vw(100);
  var halfScreenWidth = vw(50);
  var AnimatedGalleryImageStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var xScaleOffset = -7 * screenWidth * (0.5 + index);
    var yScaleOffset = -screenHeight * 3.5;
    return {
      transform: [{
        translateX: selected ? translateX.value + xScaleOffset : scale.value < 1 || scale.value !== offsetScale.value ? xScaleOffset : previous ? translateX.value - halfScreenWidth * (scale.value - 1) + xScaleOffset : translateX.value + halfScreenWidth * (scale.value - 1) + xScaleOffset
      }, {
        translateY: selected ? translateY.value + yScaleOffset : yScaleOffset
      }, {
        scale: selected ? scale.value / 8 : oneEighth
      }, {
        scaleX: -1
      }]
    };
  }, [previous, selected]);
  if (!shouldRender) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [style, {
        transform: [{
          scale: oneEighth
        }]
      }]
    });
  }
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].Image, {
    accessibilityLabel: accessibilityLabel,
    resizeMode: 'contain',
    source: {
      uri: photo.uri
    },
    style: [style, AnimatedGalleryImageStyle, {
      transform: [{
        scaleX: -1
      }, {
        translateY: -screenHeight * 3.5
      }, {
        translateX: -translateX.value + 7 * screenWidth * (0.5 + index)
      }, {
        scale: oneEighth
      }]
    }]
  });
}, function (prevProps, nextProps) {
  if (prevProps.selected === nextProps.selected && prevProps.shouldRender === nextProps.shouldRender && prevProps.photo.uri === nextProps.photo.uri && prevProps.previous === nextProps.previous && prevProps.index === nextProps.index && prevProps.screenHeight === nextProps.screenHeight) {
    return true;
  }
  return false;
});
exports.AnimatedGalleryImage = AnimatedGalleryImage;
AnimatedGalleryImage.displayName = 'AnimatedGalleryImage';
//# sourceMappingURL=AnimatedGalleryImage.js.map