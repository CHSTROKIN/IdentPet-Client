var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineUnreadIndicator = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _useViewport2 = require("../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/InlineUnreadIndicator.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  text: {
    fontSize: 12
  }
});
var InlineUnreadIndicator = function InlineUnreadIndicator() {
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    bg_gradient_end = _useTheme$theme$color.bg_gradient_end,
    bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
    grey = _useTheme$theme$color.grey,
    _useTheme$theme$messa = _useTheme$theme.messageList.inlineUnreadIndicator,
    container = _useTheme$theme$messa.container,
    text = _useTheme$theme$messa.text;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container],
    children: [(0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], {
      height: 24,
      style: {
        position: 'absolute'
      },
      width: vw(100),
      children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Rect, {
        fill: "url(#gradient)",
        height: 24,
        width: vw(100),
        x: 0,
        y: 0
      }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
        children: (0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
          gradientUnits: "userSpaceOnUse",
          id: "gradient",
          x1: 0,
          x2: 0,
          y1: 24,
          y2: 0,
          children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
            offset: 1,
            stopColor: bg_gradient_end,
            stopOpacity: 1
          }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
            offset: 0,
            stopColor: bg_gradient_start,
            stopOpacity: 1
          })]
        })
      })]
    }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.text, {
        color: grey
      }, text],
      children: t('Unread Messages')
    })]
  });
};
exports.InlineUnreadIndicator = InlineUnreadIndicator;
//# sourceMappingURL=InlineUnreadIndicator.js.map