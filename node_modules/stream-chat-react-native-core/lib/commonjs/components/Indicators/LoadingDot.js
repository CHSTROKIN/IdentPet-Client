var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingDot = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingDot.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var LoadingDot = function LoadingDot(props) {
  var _props$diameter = props.diameter,
    diameter = _props$diameter === void 0 ? 4 : _props$diameter,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 1500 : _props$duration,
    _props$offset = props.offset,
    offset = _props$offset === void 0 ? 0 : _props$offset,
    style = props.style;
  var halfDuration = duration / 2;
  var startingOffset = halfDuration - offset;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    black = _useTheme$theme.colors.black,
    loadingDot = _useTheme$theme.loadingDots.loadingDot;
  var opacity = (0, _reactNativeReanimated.useSharedValue)(startingOffset / halfDuration);
  (0, _react.useEffect)(function () {
    opacity.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withTiming)(0, {
      duration: startingOffset,
      easing: _reactNativeReanimated.Easing.linear
    }), (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withTiming)(1, {
      duration: halfDuration,
      easing: _reactNativeReanimated.Easing.linear
    }), (0, _reactNativeReanimated.withTiming)(0, {
      duration: halfDuration,
      easing: _reactNativeReanimated.Easing.linear
    })), -1));
  }, []);
  var dotStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value
    };
  }, []);
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
    style: [{
      backgroundColor: black,
      borderRadius: diameter / 2,
      height: diameter,
      width: diameter
    }, style, loadingDot, dotStyle]
  });
};
exports.LoadingDot = LoadingDot;
//# sourceMappingURL=LoadingDot.js.map