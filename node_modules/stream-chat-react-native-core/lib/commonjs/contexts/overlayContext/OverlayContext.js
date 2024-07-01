var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withOverlayContext = exports.useOverlayContext = exports.OverlayContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/overlayContext/OverlayContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var OverlayContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.OverlayContext = OverlayContext;
var useOverlayContext = function useOverlayContext() {
  var contextValue = (0, _react.useContext)(OverlayContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useOverlayContext hook was called outside the OverlayContext Provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return contextValue;
};
exports.useOverlayContext = useOverlayContext;
var withOverlayContext = function withOverlayContext(Component) {
  var WithOverlayContextComponent = function WithOverlayContextComponent(props) {
    var overlayContext = useOverlayContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, overlayContext));
  };
  WithOverlayContextComponent.displayName = "WithOverlayContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithOverlayContextComponent;
};
exports.withOverlayContext = withOverlayContext;
//# sourceMappingURL=OverlayContext.js.map