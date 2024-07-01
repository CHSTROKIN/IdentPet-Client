var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageBackground = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "ImageComponent", "imageStyle", "importantForAccessibility", "style"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ImageBackground.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ImageBackground = function ImageBackground(props) {
  var children = props.children,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    imageStyle = props.imageStyle,
    importantForAccessibility = props.importantForAccessibility,
    style = props.style,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var flattenedStyle = _reactNative.StyleSheet.flatten(style);
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    accessibilityIgnoresInvertColors: true,
    importantForAccessibility: importantForAccessibility,
    style: style,
    children: [(0, _jsxRuntime.jsx)(ImageComponent, Object.assign({}, rest, {
      importantForAccessibility: importantForAccessibility,
      style: [_reactNative.StyleSheet.absoluteFill, {
        height: flattenedStyle == null ? void 0 : flattenedStyle.height,
        width: flattenedStyle == null ? void 0 : flattenedStyle.width
      }, imageStyle]
    })), children]
  });
};
exports.ImageBackground = ImageBackground;
//# sourceMappingURL=ImageBackground.js.map