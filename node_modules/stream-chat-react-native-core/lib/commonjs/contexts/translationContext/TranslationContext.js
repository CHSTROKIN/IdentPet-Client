var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslationContext = exports.useTranslationContext = exports.isDayOrMoment = exports.TranslationProvider = exports.TranslationContext = exports.DEFAULT_USER_LANGUAGE = void 0;
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/translationContext/TranslationContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var DEFAULT_USER_LANGUAGE = 'en';
exports.DEFAULT_USER_LANGUAGE = DEFAULT_USER_LANGUAGE;
var isDayOrMoment = function isDayOrMoment(output) {
  return output.isSame != null;
};
exports.isDayOrMoment = isDayOrMoment;
var defaultTranslationContextValue = {
  t: function t(key) {
    return key;
  },
  tDateTimeParser: function tDateTimeParser(input) {
    return (0, _dayjs["default"])(input);
  },
  userLanguage: DEFAULT_USER_LANGUAGE
};
var TranslationContext = _react["default"].createContext(defaultTranslationContextValue);
exports.TranslationContext = TranslationContext;
var TranslationProvider = function TranslationProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  return (0, _jsxRuntime.jsx)(TranslationContext.Provider, {
    value: value,
    children: children
  });
};
exports.TranslationProvider = TranslationProvider;
var useTranslationContext = function useTranslationContext() {
  var contextValue = (0, _react.useContext)(TranslationContext);
  if (contextValue === defaultTranslationContextValue && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useTranslationContext hook was called outside the TranslationContext Provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider)(https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return contextValue;
};
exports.useTranslationContext = useTranslationContext;
var withTranslationContext = function withTranslationContext(Component) {
  var WithTranslationContextComponent = function WithTranslationContextComponent(props) {
    var translationContext = useTranslationContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, translationContext));
  };
  WithTranslationContextComponent.displayName = "WithTranslationContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithTranslationContextComponent;
};
exports.withTranslationContext = withTranslationContext;
//# sourceMappingURL=TranslationContext.js.map