var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachmentPickerBottomSheetHandle = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/AttachmentPicker/components/AttachmentPickerBottomSheetHandle.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 20,
    justifyContent: 'center'
  },
  handle: {
    borderRadius: 2,
    height: 4,
    width: 40
  }
});
var AttachmentPickerBottomSheetHandle = function AttachmentPickerBottomSheetHandle(_ref) {
  var animatedIndex = _ref.animatedIndex;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$color = _useTheme.theme.colors,
    black = _useTheme$theme$color.black,
    white = _useTheme$theme$color.white;
  var style = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      borderTopLeftRadius: animatedIndex.value > 0 ? 16 - animatedIndex.value * 16 : 16,
      borderTopRightRadius: animatedIndex.value > 0 ? 16 - animatedIndex.value * 16 : 16
    };
  });
  return (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
    style: [styles.container, {
      backgroundColor: white
    }, style],
    children: (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.handle, {
        backgroundColor: "".concat(black, "1A")
      }]
    })
  });
};
exports.AttachmentPickerBottomSheetHandle = AttachmentPickerBottomSheetHandle;
//# sourceMappingURL=AttachmentPickerBottomSheetHandle.js.map