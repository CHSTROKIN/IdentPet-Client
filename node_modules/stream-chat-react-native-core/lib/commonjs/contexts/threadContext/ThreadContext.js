var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withThreadContext = exports.useThreadContext = exports.ThreadProvider = exports.ThreadContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/threadContext/ThreadContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ThreadContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.ThreadContext = ThreadContext;
var ThreadProvider = function ThreadProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(ThreadContext.Provider, {
    value: value,
    children: children
  });
};
exports.ThreadProvider = ThreadProvider;
var useThreadContext = function useThreadContext() {
  var contextValue = (0, _react.useContext)(ThreadContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useThreadContext hook was called outside of the ThreadContext provider. Make sure you have configured Channel component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel");
  }
  return contextValue;
};
exports.useThreadContext = useThreadContext;
var withThreadContext = function withThreadContext(Component) {
  var WithThreadContextComponent = function WithThreadContextComponent(props) {
    var threadContext = useThreadContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, threadContext));
  };
  WithThreadContextComponent.displayName = "WithThreadContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithThreadContextComponent;
};
exports.withThreadContext = withThreadContext;
//# sourceMappingURL=ThreadContext.js.map