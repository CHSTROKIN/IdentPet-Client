var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressControl = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ProgressControl/ProgressControl.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var height = 2;
var ProgressControlThumb = function ProgressControlThumb() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    black = _useTheme$theme$color.black,
    grey_dark = _useTheme$theme$color.grey_dark,
    static_white = _useTheme$theme$color.static_white;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.progressControlThumbStyle, {
      backgroundColor: static_white,
      borderColor: grey_dark,
      shadowColor: black
    }]
  });
};
var ProgressControl = _react["default"].memo(function (props) {
  var duration = props.duration,
    filledColorFromProp = props.filledColor,
    onPlayPause = props.onPlayPause,
    onProgressDrag = props.onProgressDrag,
    progress = props.progress,
    testID = props.testID,
    width = props.width;
  var _Dimensions$get = _reactNative.Dimensions.get('screen'),
    windowWidth = _Dimensions$get.width;
  var widthInNumbers = width ? typeof width === 'string' ? windowWidth * Number(width == null ? void 0 : width.substring(0, width.length - 1)) / 100 : width : 0;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    grey_dark = _useTheme2$theme.colors.grey_dark,
    _useTheme2$theme$prog = _useTheme2$theme.progressControl,
    container = _useTheme2$theme$prog.container,
    filledColorFromTheme = _useTheme2$theme$prog.filledColor,
    filledStyles = _useTheme2$theme$prog.filledStyles,
    thumb = _useTheme2$theme$prog.thumb;
  var state = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateX = (0, _reactNativeReanimated.useSharedValue)(0);
  var filledColor = filledColorFromProp || filledColorFromTheme;
  (0, _react.useEffect)(function () {
    if (progress <= 1) {
      state.value = progress * widthInNumbers;
      translateX.value = progress * widthInNumbers;
    }
  }, [progress, widthInNumbers]);
  var animatedStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      backgroundColor: filledColor,
      width: state.value
    };
  });
  var thumbStyles = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateX: state.value
      }]
    };
  });
  var onGestureEvent = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(event) {
      state.value = translateX.value + event.translationX;
      if (state.value > widthInNumbers) state.value = widthInNumbers;else if (state.value < 0) state.value = 0;
    },
    onFinish: function onFinish() {
      translateX.value = state.value;
      var dragFinishLocationInSeconds = state.value / widthInNumbers * duration;
      if (onProgressDrag) (0, _reactNativeReanimated.runOnJS)(onProgressDrag)(dragFinishLocationInSeconds);
      if (onPlayPause) (0, _reactNativeReanimated.runOnJS)(onPlayPause)(false);
    },
    onStart: function onStart() {
      if (onPlayPause) (0, _reactNativeReanimated.runOnJS)(onPlayPause)(true);
      (0, _reactNativeReanimated.cancelAnimation)(translateX);
      state.value = translateX.value;
    }
  }, [duration, widthInNumbers]);
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: grey_dark,
      width: widthInNumbers
    }, container],
    children: [(0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
      style: [styles.filledStyle, animatedStyles, filledStyles]
    }), (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler, {
      maxPointers: 1,
      onGestureEvent: onProgressDrag ? onGestureEvent : undefined,
      testID: testID,
      children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        style: [thumbStyles, thumb],
        children: onProgressDrag && (0, _jsxRuntime.jsx)(ProgressControlThumb, {})
      })
    })]
  });
}, function (prevProps, nextProps) {
  if (prevProps.duration === nextProps.duration && prevProps.progress === nextProps.progress && prevProps.width === nextProps.width) return true;else return false;
});
exports.ProgressControl = ProgressControl;
var styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 50,
    height: height
  },
  filledStyle: {
    height: height
  },
  progressControlThumbStyle: {
    borderRadius: 5,
    borderWidth: 0.2,
    elevation: 6,
    height: 20,
    shadowOffset: {
      height: 3,
      width: 0
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    top: -11,
    width: 5
  }
});
ProgressControl.displayName = 'ProgressControl';
//# sourceMappingURL=ProgressControl.js.map