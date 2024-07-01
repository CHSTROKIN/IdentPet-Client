var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.mergeThemes = exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _theme = require("./utils/theme");
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/themeContext/ThemeContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var mergeThemes = function mergeThemes(params) {
  var style = params.style,
    theme = params.theme;
  var finalTheme = !theme || Object.keys(theme).length === 0 ? JSON.parse(JSON.stringify(_theme.defaultTheme)) : JSON.parse(JSON.stringify(theme));
  if (style) {
    (0, _merge["default"])(finalTheme, style);
  }
  return finalTheme;
};
exports.mergeThemes = mergeThemes;
var ThemeContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.ThemeContext = ThemeContext;
var ThemeProvider = function ThemeProvider(props) {
  var children = props.children,
    mergedStyle = props.mergedStyle,
    style = props.style,
    theme = props.theme;
  var modifiedTheme = (0, _react.useMemo)(function () {
    if (mergedStyle) {
      return mergedStyle;
    }
    return mergeThemes({
      style: style,
      theme: theme
    });
  }, [mergedStyle, style, theme]);
  return (0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: modifiedTheme,
    children: children
  });
};
exports.ThemeProvider = ThemeProvider;
var useTheme = function useTheme() {
  var theme = (0, _react.useContext)(ThemeContext);
  if (theme === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useThemeContext hook was called outside the ThemeContext Provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return {
    theme: theme
  };
};
exports.useTheme = useTheme;
//# sourceMappingURL=ThemeContext.js.map