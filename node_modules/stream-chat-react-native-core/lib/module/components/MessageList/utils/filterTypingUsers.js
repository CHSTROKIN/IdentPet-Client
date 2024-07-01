Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterTypingUsers = void 0;
var filterTypingUsers = function filterTypingUsers(_ref) {
  var client = _ref.client,
    thread = _ref.thread,
    typing = _ref.typing;
  var nonSelfUsers = [];
  if (!client || !client.user || !typing) return nonSelfUsers;
  var typingKeys = Object.keys(typing);
  typingKeys.forEach(function (typingKey) {
    var _client$user, _typing$typingKey$use, _typing$typingKey$use2, _typing$typingKey$use3;
    if (!typing[typingKey]) return;
    if (((_client$user = client.user) == null ? void 0 : _client$user.id) === ((_typing$typingKey$use = typing[typingKey].user) == null ? void 0 : _typing$typingKey$use.id)) {
      return;
    }
    var isRegularEvent = !typing[typingKey].parent_id && !(thread != null && thread.id);
    var isCurrentThreadEvent = typing[typingKey].parent_id === (thread == null ? void 0 : thread.id);
    if (!isRegularEvent && !isCurrentThreadEvent) {
      return;
    }
    var user = ((_typing$typingKey$use2 = typing[typingKey].user) == null ? void 0 : _typing$typingKey$use2.name) || ((_typing$typingKey$use3 = typing[typingKey].user) == null ? void 0 : _typing$typingKey$use3.id);
    if (user) {
      nonSelfUsers.push(user);
    }
  });
  return nonSelfUsers;
};
exports.filterTypingUsers = filterTypingUsers;
//# sourceMappingURL=filterTypingUsers.js.map