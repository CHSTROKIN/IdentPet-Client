Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShouldScrollToRecentOnNewOwnMessage = useShouldScrollToRecentOnNewOwnMessage;
var _react = require("react");
function useShouldScrollToRecentOnNewOwnMessage(rawMessageList, currentUserId) {
  var lastFocusedOwnMessageId = (0, _react.useRef)('');
  var initialFocusRegistered = (0, _react.useRef)(false);
  var messagesRef = (0, _react.useRef)(rawMessageList);
  messagesRef.current = rawMessageList;
  var isMyOwnNewMessageRef = (0, _react.useRef)(function () {
    if (messagesRef.current && messagesRef.current.length > 0) {
      var _lastMessage$user;
      var lastMessage = messagesRef.current[messagesRef.current.length - 1];
      if (lastMessage && ((_lastMessage$user = lastMessage.user) == null ? void 0 : _lastMessage$user.id) === currentUserId && lastFocusedOwnMessageId.current !== lastMessage.id) {
        lastFocusedOwnMessageId.current = lastMessage.id;
        return true;
      }
    }
    return false;
  });
  (0, _react.useEffect)(function () {
    if (rawMessageList && rawMessageList.length) {
      if (!initialFocusRegistered.current) {
        var _lastMessage$user2;
        initialFocusRegistered.current = true;
        var lastMessage = rawMessageList[0];
        if (lastMessage && ((_lastMessage$user2 = lastMessage.user) == null ? void 0 : _lastMessage$user2.id) === currentUserId) {
          lastFocusedOwnMessageId.current = lastMessage.id;
        }
      }
    }
  }, [rawMessageList]);
  return isMyOwnNewMessageRef;
}
//# sourceMappingURL=useShouldScrollToRecentOnNewOwnMessage.js.map