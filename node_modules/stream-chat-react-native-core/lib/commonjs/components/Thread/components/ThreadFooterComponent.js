var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadFooterComponent = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _useViewport2 = require("../../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["backgroundGradientStart", "backgroundGradientStop", "text", "threadHeight"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Thread/components/ThreadFooterComponent.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  absolute: {
    position: 'absolute'
  },
  messagePadding: {
    paddingHorizontal: 8
  },
  newThread: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    marginTop: 8
  },
  text: {
    fontSize: 12,
    textAlign: 'center'
  },
  threadHeaderContainer: {
    marginVertical: 8
  }
});
var ThreadFooterComponentWithContext = function ThreadFooterComponentWithContext(props) {
  var Message = props.Message,
    thread = props.thread;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    bg_gradient_end = _useTheme$theme$color.bg_gradient_end,
    bg_gradient_start = _useTheme$theme$color.bg_gradient_start,
    grey = _useTheme$theme$color.grey,
    _useTheme$theme$threa = _useTheme$theme.thread.newThread,
    backgroundGradientStart = _useTheme$theme$threa.backgroundGradientStart,
    backgroundGradientStop = _useTheme$theme$threa.backgroundGradientStop,
    text = _useTheme$theme$threa.text,
    threadHeight = _useTheme$theme$threa.threadHeight,
    newThread = (0, _objectWithoutProperties2["default"])(_useTheme$theme$threa, _excluded);
  if (!thread) return null;
  var replyCount = thread.reply_count;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: styles.threadHeaderContainer,
    testID: "thread-footer-component",
    children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.messagePadding,
      children: (0, _jsxRuntime.jsx)(Message, {
        groupStyles: ['single'],
        message: thread,
        preventPress: true,
        threadList: true
      })
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.newThread, newThread],
      children: [(0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], {
        height: threadHeight != null ? threadHeight : 24,
        style: styles.absolute,
        width: vw(100),
        children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Rect, {
          fill: "url(#gradient)",
          height: threadHeight != null ? threadHeight : 24,
          width: vw(100),
          x: 0,
          y: 0
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
          children: (0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
            gradientUnits: "userSpaceOnUse",
            id: "gradient",
            x1: 0,
            x2: 0,
            y1: 0,
            y2: threadHeight != null ? threadHeight : 24,
            children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
              offset: 1,
              stopColor: backgroundGradientStart || bg_gradient_end,
              stopOpacity: 1
            }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
              offset: 0,
              stopColor: backgroundGradientStop || bg_gradient_start,
              stopOpacity: 1
            })]
          })
        })]
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.text, {
          color: grey
        }, text],
        children: replyCount === 1 ? t('1 Reply') : t('{{ replyCount }} Replies', {
          replyCount: replyCount
        })
      })]
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevThread = prevProps.thread;
  var nextThread = nextProps.thread;
  var threadEqual = (prevThread == null ? void 0 : prevThread.id) === (nextThread == null ? void 0 : nextThread.id) && (prevThread == null ? void 0 : prevThread.text) === (nextThread == null ? void 0 : nextThread.text) && (prevThread == null ? void 0 : prevThread.reply_count) === (nextThread == null ? void 0 : nextThread.reply_count);
  if (!threadEqual) return false;
  var latestReactionsEqual = prevThread && nextThread && Array.isArray(prevThread.latest_reactions) && Array.isArray(nextThread.latest_reactions) ? prevThread.latest_reactions.length === nextThread.latest_reactions.length && prevThread.latest_reactions.every(function (_ref, index) {
    var _nextThread$latest_re;
    var type = _ref.type;
    return type === ((_nextThread$latest_re = nextThread.latest_reactions) == null ? void 0 : _nextThread$latest_re[index].type);
  }) : (prevThread == null ? void 0 : prevThread.latest_reactions) === (nextThread == null ? void 0 : nextThread.latest_reactions);
  if (!latestReactionsEqual) return false;
  return true;
};
var MemoizedThreadFooter = _react["default"].memo(ThreadFooterComponentWithContext, areEqual);
var ThreadFooterComponent = function ThreadFooterComponent() {
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    Message = _useMessagesContext.Message;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    thread = _useThreadContext.thread;
  return (0, _jsxRuntime.jsx)(MemoizedThreadFooter, {
    Message: Message,
    thread: thread
  });
};
exports.ThreadFooterComponent = ThreadFooterComponent;
//# sourceMappingURL=ThreadFooterComponent.js.map