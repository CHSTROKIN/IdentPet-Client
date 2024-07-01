var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessageContext = exports.useMessageContext = exports.MessageProvider = exports.MessageContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messageContext/MessageContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MessageContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.MessageContext = MessageContext;
var MessageProvider = function MessageProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(MessageContext.Provider, {
    value: value,
    children: children
  });
};
exports.MessageProvider = MessageProvider;
var useMessageContext = function useMessageContext() {
  var contextValue = (0, _react.useContext)(MessageContext);
  return contextValue;
};
exports.useMessageContext = useMessageContext;
var withMessageContext = function withMessageContext(Component) {
  var WithMessageContextComponent = function WithMessageContextComponent(props) {
    var messageContext = useMessageContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, messageContext));
  };
  WithMessageContextComponent.displayName = "WithMessageContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithMessageContextComponent;
};
exports.withMessageContext = withMessageContext;
//# sourceMappingURL=MessageContext.js.map