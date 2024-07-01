var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Loading = require("../../icons/Loading");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Spinner/Spinner.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  spinner: {
    height: 16,
    justifyContent: 'center',
    margin: 5,
    width: 16
  }
});
var Spinner = function Spinner(props) {
  var rotation = (0, _reactNativeReanimated.useSharedValue)(0);
  var height = props.height,
    style = props.style,
    width = props.width;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_blue = _useTheme$theme.colors.accent_blue,
    spinner = _useTheme$theme.spinner;
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        rotate: "".concat(rotation.value, "deg")
      }]
    };
  });
  (0, _react.useEffect)(function () {
    rotation.value = (0, _reactNativeReanimated.withRepeat)((0, _reactNativeReanimated.withTiming)(360, {
      duration: 800,
      easing: _reactNativeReanimated.Easing.linear
    }), -1);
  }, []);
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
    style: [style, styles.spinner, animatedStyle, spinner, {
      height: height,
      width: width
    }],
    children: (0, _jsxRuntime.jsx)(_Loading.Loading, {
      height: height,
      stopColor: accent_blue,
      width: width
    })
  });
};
exports.Spinner = Spinner;
Spinner.displayName = 'Spinner{spinner}';
//# sourceMappingURL=Spinner.js.map