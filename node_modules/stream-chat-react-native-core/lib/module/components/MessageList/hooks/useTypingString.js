Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTypingString = void 0;
var _ChatContext = require("../../../contexts/chatContext/ChatContext");
var _ThreadContext = require("../../../contexts/threadContext/ThreadContext");
var _TranslationContext = require("../../../contexts/translationContext/TranslationContext");
var _TypingContext = require("../../../contexts/typingContext/TypingContext");
var _filterTypingUsers = require("../utils/filterTypingUsers");
var useTypingString = function useTypingString() {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var _useThreadContext = (0, _ThreadContext.useThreadContext)(),
    thread = _useThreadContext.thread;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  var _useTypingContext = (0, _TypingContext.useTypingContext)(),
    typing = _useTypingContext.typing;
  var filteredTypingUsers = (0, _filterTypingUsers.filterTypingUsers)({
    client: client,
    thread: thread,
    typing: typing
  });
  if (filteredTypingUsers.length === 1) {
    return t('{{ user }} is typing', {
      user: filteredTypingUsers[0]
    });
  }
  if (filteredTypingUsers.length > 1) {
    return t('{{ firstUser }} and {{ nonSelfUserLength }} more are typing', {
      firstUser: filteredTypingUsers[0],
      nonSelfUserLength: filteredTypingUsers.length - 1
    });
  }
  return '';
};
exports.useTypingString = useTypingString;
//# sourceMappingURL=useTypingString.js.map