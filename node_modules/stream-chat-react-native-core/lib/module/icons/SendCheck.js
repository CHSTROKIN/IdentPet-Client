var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendCheck = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["size"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/SendCheck.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var SendCheck = function SendCheck(_ref) {
  var size = _ref.size,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _jsxRuntime.jsx)(_reactNativeSvg["default"], Object.assign({
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size
  }, rest, {
    children: (0, _jsxRuntime.jsx)(_reactNativeSvg.Path, Object.assign({
      d: "M16 32C7.24879 32 0 24.7667 0 16C0 7.24879 7.2333 0 15.9845 0C24.7512 0 32 7.24879 32 16C32 24.7667 24.7512 32 16 32ZM14.2807 23.6515C14.8538 23.6515 15.3495 23.3572 15.7057 22.8306L22.9545 11.5237C23.1713 11.183 23.3572 10.7957 23.3572 10.4395C23.3572 9.63408 22.6602 9.09197 21.8858 9.09197C21.3901 9.09197 20.9564 9.35528 20.6312 9.89739L14.2188 20.151L11.2294 16.3562C10.8422 15.8606 10.4705 15.6747 9.99032 15.6747C9.1849 15.6747 8.56534 16.3253 8.56534 17.1152C8.56534 17.5024 8.70474 17.8742 8.98354 18.2149L12.7783 22.8306C13.212 23.3882 13.6922 23.6515 14.2807 23.6515Z"
    }, rest))
  }));
};
exports.SendCheck = SendCheck;
//# sourceMappingURL=SendCheck.js.map