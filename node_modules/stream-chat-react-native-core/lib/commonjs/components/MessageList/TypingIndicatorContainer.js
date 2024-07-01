var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypingIndicatorContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _filterTypingUsers = require("./utils/filterTypingUsers");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ThreadContext = require("../../contexts/threadContext/ThreadContext");
var _TypingContext = require("../../contexts/typingContext/TypingContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/TypingIndicatorContainer.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    width: '100%'
  }
});
var TypingIndicatorContainerWithContext = function TypingIndicatorContainerWithContext(props) {
  var children = props.children,
    client = props.client,
    thread = props.thread,
    typing = props.typing;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    typingIndicatorContainer = _useTheme.theme.messageList.typingIndicatorContainer;
  var typingUsers = (0, _filterTypingUsers.filterTypingUsers)({
    client: client,
    thread: thread,
    typing: typing
  });
  if (!typingUsers.length) {
    return null;
  }
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, typingIndicatorContainer],
    testID: "typing-indicator-container",
    children: children
  });
};
var TypingIndicatorContainer = function TypingIndicatorContainer(props) {
  var _useTypingContext = (0, _TypingContext.useTypingContext)(),
    typing = _useTypingContext.typing;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    thread = _useThreadContext.thread;
  return (0, _jsxRuntime.jsx)(TypingIndicatorContainerWithContext, Object.assign({
    client: client,
    thread: thread,
    typing: typing
  }, props));
};
exports.TypingIndicatorContainer = TypingIndicatorContainer;
TypingIndicatorContainer.displayName = 'TypingIndicatorContainer{messageList{typingIndicatorContainer}}';
//# sourceMappingURL=TypingIndicatorContainer.js.map