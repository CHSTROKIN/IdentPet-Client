var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecordingLockIndicator = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingLockIndicator.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AudioRecordingLockIndicator = function AudioRecordingLockIndicator(_ref) {
  var messageInputHeight = _ref.messageInputHeight,
    micLocked = _ref.micLocked,
    style = _ref.style;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var timeoutRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    timeoutRef.current = setTimeout(function () {
      if (micLocked) {
        setVisible(false);
      }
    }, 2000);
    return function () {
      clearTimeout(timeoutRef.current);
    };
  }, [micLocked]);
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    light_gray = _useTheme$theme$color.light_gray,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecordingLockIndicator,
    arrowUpIcon = _useTheme$theme$messa.arrowUpIcon,
    container = _useTheme$theme$messa.container,
    lockIcon = _useTheme$theme$messa.lockIcon;
  if (!visible) {
    return null;
  }
  return (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
    style: [styles.container, style, {
      backgroundColor: light_gray,
      bottom: messageInputHeight
    }, container],
    children: [(0, _jsxRuntime.jsx)(_icons.Lock, Object.assign({
      color: micLocked ? accent_blue : grey,
      size: 32
    }, lockIcon)), !micLocked && (0, _jsxRuntime.jsx)(_icons.ArrowUp, Object.assign({
      color: grey,
      size: 32
    }, arrowUpIcon))]
  });
};
exports.AudioRecordingLockIndicator = AudioRecordingLockIndicator;
var styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 50,
    margin: 5,
    padding: 8,
    position: 'absolute',
    right: 0,
    zIndex: 1
  }
});
//# sourceMappingURL=AudioRecordingLockIndicator.js.map