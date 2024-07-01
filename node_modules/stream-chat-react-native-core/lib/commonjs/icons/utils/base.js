var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RootSvg = exports.RootPath = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/utils/base.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var RootSvg = function RootSvg(props) {
  var children = props.children,
    _props$height = props.height,
    height = _props$height === void 0 ? 24 : _props$height,
    _props$viewBox = props.viewBox,
    viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
    _props$width = props.width,
    width = _props$width === void 0 ? 24 : _props$width;
  return (0, _jsxRuntime.jsx)(_reactNativeSvg["default"], Object.assign({
    height: height,
    viewBox: viewBox,
    width: width
  }, props, {
    children: children
  }));
};
exports.RootSvg = RootSvg;
var RootPath = function RootPath(props) {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    black = _useTheme.theme.colors.black;
  var d = props.d,
    _props$pathFill = props.pathFill,
    pathFill = _props$pathFill === void 0 ? black : _props$pathFill,
    pathOpacity = props.pathOpacity;
  return (0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    clipRule: 'evenodd',
    d: d,
    fill: pathFill,
    fillRule: 'evenodd',
    opacity: pathOpacity
  });
};
exports.RootPath = RootPath;
//# sourceMappingURL=base.js.map