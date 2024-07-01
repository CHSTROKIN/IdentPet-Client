var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebugContext = exports.DebugContextProvider = exports.DebugContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/debugContext/DebugContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var DebugContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.DebugContext = DebugContext;
var DebugContextProvider = function DebugContextProvider(_ref) {
  var children = _ref.children,
    useFlipper = _ref.useFlipper;
  var debugRef = (0, _react.useRef)({
    eventType: undefined,
    sendEventParams: undefined
  });
  var _useFlipper = useFlipper(),
    updateData = _useFlipper.updateData;
  var ref = (0, _react.useRef)({
    setEventType: function setEventType(data) {
      debugRef.current.eventType = data;
      updateData(debugRef);
    },
    setSendEventParams: function setSendEventParams(data) {
      debugRef.current.sendEventParams = data;
      updateData(debugRef);
    }
  });
  return (0, _jsxRuntime.jsx)(DebugContext.Provider, {
    value: ref,
    children: children
  });
};
exports.DebugContextProvider = DebugContextProvider;
var useDebugContext = function useDebugContext() {
  var contextValue = (0, _react.useContext)(DebugContext);
  return contextValue;
};
exports.useDebugContext = useDebugContext;
//# sourceMappingURL=DebugContext.js.map