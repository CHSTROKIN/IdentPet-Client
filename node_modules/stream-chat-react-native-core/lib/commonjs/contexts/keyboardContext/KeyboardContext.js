var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withKeyboardContext = exports.useKeyboardContext = exports.KeyboardProvider = exports.KeyboardContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _getDisplayName = require("../utils/getDisplayName");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/keyboardContext/KeyboardContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var KeyboardContext = _react["default"].createContext({
  dismissKeyboard: _reactNative.Keyboard.dismiss
});
exports.KeyboardContext = KeyboardContext;
var KeyboardProvider = function KeyboardProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(KeyboardContext.Provider, {
    value: value,
    children: children
  });
};
exports.KeyboardProvider = KeyboardProvider;
var useKeyboardContext = function useKeyboardContext() {
  return (0, _react.useContext)(KeyboardContext);
};
exports.useKeyboardContext = useKeyboardContext;
var withKeyboardContext = function withKeyboardContext(Component) {
  var WithKeyboardContextComponent = function WithKeyboardContextComponent(props) {
    var keyboardContext = useKeyboardContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, keyboardContext));
  };
  WithKeyboardContextComponent.displayName = "WithKeyboardContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithKeyboardContextComponent;
};
exports.withKeyboardContext = withKeyboardContext;
//# sourceMappingURL=KeyboardContext.js.map