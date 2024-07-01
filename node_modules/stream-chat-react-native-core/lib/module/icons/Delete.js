var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delete = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["size"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/Delete.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Delete = function Delete(_ref) {
  var size = _ref.size,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], Object.assign({
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size
  }, rest, {
    children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, Object.assign({
      d: "M8 3a1 1 0 011-1h6a1 1 0 011 1v1h3a1 1 0 110 2H5a1 1 0 110-2h3V3zM6 7a1 1 0 011 1v11a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 112 0v11a3 3 0 01-3 3H8a3 3 0 01-3-3V8a1 1 0 011-1z"
    }, rest)), (0, _jsxRuntime.jsx)(_reactNativeSvg.Path, Object.assign({
      d: "M10 8a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1zM14 8a1 1 0 011 1v8a1 1 0 11-2 0V9a1 1 0 011-1z"
    }, rest))]
  }));
};
exports.Delete = Delete;
//# sourceMappingURL=Delete.js.map