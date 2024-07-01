var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Skeleton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeSvg = require("react-native-svg");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/Skeleton.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var paddingLarge = 16;
var paddingMedium = 12;
var paddingSmall = 8;
var styles = _reactNative.StyleSheet.create({
  background: {
    height: 64,
    position: 'absolute',
    width: '100%'
  },
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row'
  }
});
var Skeleton = function Skeleton() {
  var width = (0, _reactNative.useWindowDimensions)().width;
  var startOffset = (0, _reactNativeReanimated.useSharedValue)(-width);
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelListSkeleton,
    _useTheme$theme$chann2 = _useTheme$theme$chann.animationTime,
    animationTime = _useTheme$theme$chann2 === void 0 ? 1800 : _useTheme$theme$chann2,
    background = _useTheme$theme$chann.background,
    container = _useTheme$theme$chann.container,
    gradientStart = _useTheme$theme$chann.gradientStart,
    gradientStop = _useTheme$theme$chann.gradientStop,
    _useTheme$theme$chann3 = _useTheme$theme$chann.height,
    height = _useTheme$theme$chann3 === void 0 ? 64 : _useTheme$theme$chann3,
    maskFillColor = _useTheme$theme$chann.maskFillColor,
    _useTheme$theme$color = _useTheme$theme.colors,
    border = _useTheme$theme$color.border,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    white_snow = _useTheme$theme$color.white_snow;
  (0, _react.useEffect)(function () {
    startOffset.value = (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(width, {
      duration: animationTime,
      easing: _reactNativeReanimated.Easing.linear
    }), -1);
  }, []);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateX: startOffset.value
      }]
    };
  }, []);
  var d = (0, _reactNativeReanimated.useDerivedValue)(function () {
    var useableHeight = height - paddingMedium * 2;
    var boneHeight = (useableHeight - 8) / 2;
    var boneRadius = boneHeight / 2;
    var circleRadius = useableHeight / 2;
    var avatarBoneWidth = circleRadius * 2 + paddingSmall * 2;
    var detailsBonesWidth = width - avatarBoneWidth;
    return "M0 0 h".concat(width, " v").concat(height, " h-").concat(width, "z M").concat(paddingSmall, " ").concat(height / 2, " a").concat(circleRadius, " ").concat(circleRadius, " 0 1 0 ").concat(circleRadius * 2, " 0 a").concat(circleRadius, " ").concat(circleRadius, " 0 1 0 -").concat(circleRadius * 2, " 0z M").concat(avatarBoneWidth + boneRadius, " ").concat(paddingMedium, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 ").concat(boneHeight, "z M").concat(avatarBoneWidth - boneRadius + detailsBonesWidth * 0.25, " ").concat(paddingMedium, " h-").concat(detailsBonesWidth * 0.25 - boneRadius * 2, " v").concat(boneHeight, " h").concat(detailsBonesWidth * 0.25 - boneRadius * 2, "z M").concat(avatarBoneWidth - boneRadius + detailsBonesWidth * 0.25, " ").concat(paddingMedium + boneHeight, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 -").concat(boneHeight, "z M").concat(avatarBoneWidth + boneRadius, " ").concat(paddingMedium + boneHeight + paddingSmall, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 ").concat(boneHeight, "z M").concat(avatarBoneWidth + detailsBonesWidth * 0.8 - boneRadius, " ").concat(paddingMedium + boneHeight + paddingSmall, " h-").concat(detailsBonesWidth * 0.8 - boneRadius * 2, " v").concat(boneHeight, " h").concat(detailsBonesWidth * 0.8 - boneRadius * 2, "z M").concat(avatarBoneWidth + detailsBonesWidth * 0.8 - boneRadius, " ").concat(height - paddingMedium, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 -").concat(boneHeight, "z M").concat(avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge, " ").concat(paddingMedium + boneHeight + paddingSmall, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 ").concat(boneHeight, "z M").concat(width - paddingSmall - boneRadius, " ").concat(paddingMedium + boneHeight + paddingSmall, " h-").concat(width - paddingSmall - boneRadius - (avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge), " v").concat(boneHeight, " h").concat(width - paddingSmall - boneRadius - (avatarBoneWidth + detailsBonesWidth * 0.8 + boneRadius + paddingLarge), "z M").concat(width - paddingSmall * 2, " ").concat(height - paddingMedium, " a").concat(boneRadius, " ").concat(boneRadius, " 0 1 0 0 -").concat(boneHeight, "z");
  }, []);
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      borderBottomColor: border
    }, container],
    testID: "channel-preview-skeleton",
    children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.background, {
        backgroundColor: white_snow
      }, background]
    }), (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
      style: [animatedStyle, styles.background],
      children: (0, _jsxRuntime.jsxs)(_reactNativeSvg.Svg, {
        height: height,
        width: width,
        children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Rect, {
          fill: "url(#gradient)",
          height: height,
          width: width,
          x: 0,
          y: 0
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
          children: (0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
            gradientUnits: "userSpaceOnUse",
            id: "gradient",
            x1: 0,
            x2: width,
            y1: 0,
            y2: 0,
            children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, Object.assign({
              offset: 1,
              stopColor: grey_gainsboro
            }, gradientStart)), (0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, Object.assign({
              offset: 0.5,
              stopColor: grey_gainsboro
            }, gradientStop)), (0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, Object.assign({
              offset: 0,
              stopColor: grey_gainsboro
            }, gradientStart))]
          })
        })]
      })
    }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Svg, {
      height: height,
      width: width,
      children: (0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
        d: d.value,
        fill: maskFillColor || white_snow
      })
    })]
  });
};
exports.Skeleton = Skeleton;
Skeleton.displayName = 'Skeleton{channelListSkeleton}';
//# sourceMappingURL=Skeleton.js.map