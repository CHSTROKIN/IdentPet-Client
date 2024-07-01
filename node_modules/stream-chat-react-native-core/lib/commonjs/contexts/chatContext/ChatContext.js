var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChatContext = exports.useChatContext = exports.ChatProvider = exports.ChatContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/chatContext/ChatContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ChatContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.ChatContext = ChatContext;
var ChatProvider = function ChatProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(ChatContext.Provider, {
    value: value,
    children: children
  });
};
exports.ChatProvider = ChatProvider;
var useChatContext = function useChatContext() {
  var contextValue = (0, _react.useContext)(ChatContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useChatContext hook was called outside the ChatContext Provider. Make sure you have configured Chat component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#chat");
  }
  return contextValue;
};
exports.useChatContext = useChatContext;
var withChatContext = function withChatContext(Component) {
  var WithChatContextComponent = function WithChatContextComponent(props) {
    var chatContext = useChatContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, chatContext));
  };
  WithChatContextComponent.displayName = "WithChatContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithChatContextComponent;
};
exports.withChatContext = withChatContext;
//# sourceMappingURL=ChatContext.js.map