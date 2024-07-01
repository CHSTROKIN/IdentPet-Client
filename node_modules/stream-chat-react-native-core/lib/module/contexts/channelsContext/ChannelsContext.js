var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withChannelsContext = exports.useChannelsContext = exports.ChannelsProvider = exports.ChannelsContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/channelsContext/ChannelsContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ChannelsContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.ChannelsContext = ChannelsContext;
var ChannelsProvider = function ChannelsProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(ChannelsContext.Provider, {
    value: value,
    children: children
  });
};
exports.ChannelsProvider = ChannelsProvider;
var useChannelsContext = function useChannelsContext() {
  var contextValue = (0, _react.useContext)(ChannelsContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useChannelsContext hook was called outside of the ChannelsContext provider. Make sure you have configured ChannelList component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel-list");
  }
  return contextValue;
};
exports.useChannelsContext = useChannelsContext;
var withChannelsContext = function withChannelsContext(Component) {
  var WithChannelsContextComponent = function WithChannelsContextComponent(props) {
    var channelsContext = useChannelsContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, channelsContext));
  };
  WithChannelsContextComponent.displayName = "WithChannelsContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithChannelsContextComponent;
};
exports.withChannelsContext = withChannelsContext;
//# sourceMappingURL=ChannelsContext.js.map