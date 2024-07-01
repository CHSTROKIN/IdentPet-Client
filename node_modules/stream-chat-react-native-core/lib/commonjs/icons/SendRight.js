var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendRight = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["size"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/SendRight.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SendRight = function SendRight(_ref) {
  var size = _ref.size,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], Object.assign({
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size
  }, rest, {
    children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, Object.assign({
      cx: size / 2,
      cy: size / 2,
      r: size / 2
    }, rest)), (0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
      clipRule: "evenodd",
      d: "M9.33398 14.6666H16.0007V9.33325L22.6673 15.9999L16.0007 22.6666V17.3333H9.33398V14.6666Z",
      fill: 'white',
      fillRule: "evenodd"
    })]
  }));
};
exports.SendRight = SendRight;
//# sourceMappingURL=SendRight.js.map