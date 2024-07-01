var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSuggestionsContext = exports.useSuggestionsContext = exports.isSuggestionUser = exports.isSuggestionEmoji = exports.isSuggestionCommand = exports.SuggestionsProvider = exports.SuggestionsContext = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/suggestionsContext/SuggestionsContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var isSuggestionCommand = function isSuggestionCommand(suggestion) {
  return 'args' in suggestion;
};
exports.isSuggestionCommand = isSuggestionCommand;
var isSuggestionEmoji = function isSuggestionEmoji(suggestion) {
  return 'unicode' in suggestion;
};
exports.isSuggestionEmoji = isSuggestionEmoji;
var isSuggestionUser = function isSuggestionUser(suggestion) {
  return 'id' in suggestion;
};
exports.isSuggestionUser = isSuggestionUser;
var SuggestionsContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.SuggestionsContext = SuggestionsContext;
var SuggestionsProvider = function SuggestionsProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    triggerType = _useState2[0],
    setTriggerType = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    suggestions = _useState4[0],
    setSuggestions = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    suggestionsViewActive = _useState6[0],
    setSuggestionsViewActive = _useState6[1];
  var openSuggestions = function openSuggestions(component) {
    setTriggerType(component);
    setSuggestionsViewActive(true);
  };
  var updateSuggestions = function updateSuggestions(newSuggestions) {
    setSuggestions(newSuggestions);
    setSuggestionsViewActive(!!triggerType);
  };
  var closeSuggestions = function closeSuggestions() {
    setTriggerType(null);
    setSuggestions(undefined);
    setSuggestionsViewActive(false);
  };
  var suggestionsContext = Object.assign({}, value, {
    closeSuggestions: closeSuggestions,
    openSuggestions: openSuggestions,
    suggestions: suggestions,
    suggestionsViewActive: suggestionsViewActive,
    triggerType: triggerType,
    updateSuggestions: updateSuggestions
  });
  return (0, _jsxRuntime.jsx)(SuggestionsContext.Provider, {
    value: suggestionsContext,
    children: children
  });
};
exports.SuggestionsProvider = SuggestionsProvider;
var useSuggestionsContext = function useSuggestionsContext() {
  var contextValue = (0, _react.useContext)(SuggestionsContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useSuggestionsContext hook was called outside of the SuggestionsContext provider. Make sure you have configured Channel component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#channel");
  }
  return contextValue;
};
exports.useSuggestionsContext = useSuggestionsContext;
var withSuggestionsContext = function withSuggestionsContext(Component) {
  var WithSuggestionsContextComponent = function WithSuggestionsContextComponent(props) {
    var suggestionsContext = useSuggestionsContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, suggestionsContext));
  };
  WithSuggestionsContextComponent.displayName = "WithSuggestionsContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithSuggestionsContextComponent;
};
exports.withSuggestionsContext = withSuggestionsContext;
//# sourceMappingURL=SuggestionsContext.js.map