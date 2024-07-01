var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendUp = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["size"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/SendUp.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SendUp = function SendUp(_ref) {
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
      d: "M14.6673 16V22.6667H17.334V16H22.6673L16.0007 9.33337L9.33398 16H14.6673Z",
      fill: 'white',
      fillRule: "evenodd"
    })]
  }));
};
exports.SendUp = SendUp;
//# sourceMappingURL=SendUp.js.map