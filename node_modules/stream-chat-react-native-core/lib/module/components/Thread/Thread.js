var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thread = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireWildcard(require("react"));
var _ThreadFooterComponent = require("./components/ThreadFooterComponent");
var _ChannelContext = require("../../contexts/channelContext/ChannelContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _MessageInput = require("../MessageInput/MessageInput");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Thread/Thread.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ThreadWithContext = function ThreadWithContext(props) {
  var additionalMessageInputProps = props.additionalMessageInputProps,
    additionalMessageListProps = props.additionalMessageListProps,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    closeThread = props.closeThread,
    _props$closeThreadOnD = props.closeThreadOnDismount,
    closeThreadOnDismount = _props$closeThreadOnD === void 0 ? true : _props$closeThreadOnD,
    disabled = props.disabled,
    loadMoreThread = props.loadMoreThread,
    _props$MessageInput = props.MessageInput,
    MessageInput = _props$MessageInput === void 0 ? _MessageInput.MessageInput : _props$MessageInput,
    MessageList = props.MessageList,
    onThreadDismount = props.onThreadDismount,
    thread = props.thread;
  (0, _react.useEffect)(function () {
    var loadMoreThreadAsync = function () {
      var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return loadMoreThread();
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function loadMoreThreadAsync() {
        return _ref.apply(this, arguments);
      };
    }();
    if (thread != null && thread.id && thread.reply_count) {
      loadMoreThreadAsync();
    }
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (closeThreadOnDismount) {
        closeThread();
      }
      if (onThreadDismount) {
        onThreadDismount();
      }
    };
  }, []);
  if (!thread) return null;
  return (0, _jsxRuntime.jsxs)(_react["default"].Fragment, {
    children: [(0, _jsxRuntime.jsx)(MessageList, Object.assign({
      FooterComponent: _ThreadFooterComponent.ThreadFooterComponent,
      threadList: true
    }, additionalMessageListProps)), (0, _jsxRuntime.jsx)(MessageInput, Object.assign({
      additionalTextInputProps: {
        autoFocus: autoFocus,
        editable: !disabled
      },
      threadList: true
    }, additionalMessageInputProps))]
  }, "thread-".concat(thread.id));
};
var Thread = function Thread(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    threadList = _useChannelContext.threadList;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    MessageList = _useMessagesContext.MessageList;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    closeThread = _useThreadContext.closeThread,
    loadMoreThread = _useThreadContext.loadMoreThread,
    reloadThread = _useThreadContext.reloadThread,
    thread = _useThreadContext.thread;
  if (thread != null && thread.id && !threadList) {
    throw new Error('Please add a threadList prop to your Channel component when rendering a thread list. Check our Channel documentation for more info: https://getstream.io/chat/docs/sdk/reactnative/core-components/channel/#threadlist');
  }
  return (0, _jsxRuntime.jsx)(ThreadWithContext, Object.assign({
    client: client,
    closeThread: closeThread,
    loadMoreThread: loadMoreThread,
    MessageList: MessageList,
    reloadThread: reloadThread,
    thread: thread
  }, props));
};
exports.Thread = Thread;
//# sourceMappingURL=Thread.js.map