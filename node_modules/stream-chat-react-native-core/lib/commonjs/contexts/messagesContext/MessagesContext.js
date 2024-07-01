var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMessagesContext = exports.useMessagesContext = exports.MessagesProvider = exports.MessagesContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/messagesContext/MessagesContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MessagesContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.MessagesContext = MessagesContext;
var MessagesProvider = function MessagesProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(MessagesContext.Provider, {
    value: value,
    children: children
  });
};
exports.MessagesProvider = MessagesProvider;
var useMessagesContext = function useMessagesContext() {
  var contextValue = (0, _react.useContext)(MessagesContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useMessagesContext hook was called outside of the MessagesContext provider. Make sure you have configured MessageList component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#message-list");
  }
  return contextValue;
};
exports.useMessagesContext = useMessagesContext;
var withMessagesContext = function withMessagesContext(Component) {
  var WithMessagesContextComponent = function WithMessagesContextComponent(props) {
    var messagesContext = useMessagesContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, messagesContext));
  };
  WithMessagesContextComponent.displayName = "WithMessagesContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithMessagesContextComponent;
};
exports.withMessagesContext = withMessagesContext;
//# sourceMappingURL=MessagesContext.js.map