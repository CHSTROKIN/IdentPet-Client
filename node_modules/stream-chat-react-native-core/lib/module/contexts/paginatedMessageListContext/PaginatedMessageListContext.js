var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPaginatedMessageListContext = exports.usePaginatedMessageListContext = exports.PaginatedMessageListProvider = exports.PaginatedMessageListContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/paginatedMessageListContext/PaginatedMessageListContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var PaginatedMessageListContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.PaginatedMessageListContext = PaginatedMessageListContext;
var PaginatedMessageListProvider = function PaginatedMessageListProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(PaginatedMessageListContext.Provider, {
    value: value,
    children: children
  });
};
exports.PaginatedMessageListProvider = PaginatedMessageListProvider;
var usePaginatedMessageListContext = function usePaginatedMessageListContext() {
  var contextValue = (0, _react.useContext)(PaginatedMessageListContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The usePaginatedMessageListContext hook was called outside of the PaginatedMessageList provider. Make sure you have configured Channel component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel");
  }
  return contextValue;
};
exports.usePaginatedMessageListContext = usePaginatedMessageListContext;
var withPaginatedMessageListContext = function withPaginatedMessageListContext(Component) {
  var WithPaginatedMessageListContextComponent = function WithPaginatedMessageListContextComponent(props) {
    var paginatedMessageListContext = usePaginatedMessageListContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, paginatedMessageListContext));
  };
  WithPaginatedMessageListContextComponent.displayName = "WithPaginatedMessageListContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithPaginatedMessageListContextComponent;
};
exports.withPaginatedMessageListContext = withPaginatedMessageListContext;
//# sourceMappingURL=PaginatedMessageListContext.js.map