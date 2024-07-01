var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOwnCapabilitiesContext = exports.allOwnCapabilities = exports.OwnCapabilitiesProvider = exports.OwnCapabilitiesContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/ownCapabilitiesContext/OwnCapabilitiesContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var allOwnCapabilities = {
  banChannelMembers: 'ban-channel-members',
  deleteAnyMessage: 'delete-any-message',
  deleteOwnMessage: 'delete-own-message',
  flagMessage: 'flag-message',
  pinMessage: 'pin-message',
  quoteMessage: 'quote-message',
  readEvents: 'read-events',
  sendLinks: 'send-links',
  sendMessage: 'send-message',
  sendReaction: 'send-reaction',
  sendReply: 'send-reply',
  sendTypingEvents: 'send-typing-events',
  updateAnyMessage: 'update-any-message',
  updateOwnMessage: 'update-own-message',
  uploadFile: 'upload-file'
};
exports.allOwnCapabilities = allOwnCapabilities;
var OwnCapabilitiesContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.OwnCapabilitiesContext = OwnCapabilitiesContext;
var OwnCapabilitiesProvider = function OwnCapabilitiesProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(OwnCapabilitiesContext.Provider, {
    value: value,
    children: children
  });
};
exports.OwnCapabilitiesProvider = OwnCapabilitiesProvider;
var useOwnCapabilitiesContext = function useOwnCapabilitiesContext() {
  var contextValue = (0, _react.useContext)(OwnCapabilitiesContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useOwnCapabilitiesContext hook was called outside the Channel Component. Make sure you have configured Channel component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel");
  }
  return contextValue;
};
exports.useOwnCapabilitiesContext = useOwnCapabilitiesContext;
//# sourceMappingURL=OwnCapabilitiesContext.js.map