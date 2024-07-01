Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateThreadContext = void 0;
var _react = require("react");
var _utils = require("../../../utils/utils");
var useCreateThreadContext = function useCreateThreadContext(_ref) {
  var allowThreadMessagesInChannel = _ref.allowThreadMessagesInChannel,
    closeThread = _ref.closeThread,
    loadMoreThread = _ref.loadMoreThread,
    openThread = _ref.openThread,
    reloadThread = _ref.reloadThread,
    setThreadLoadingMore = _ref.setThreadLoadingMore,
    thread = _ref.thread,
    threadHasMore = _ref.threadHasMore,
    threadLoadingMore = _ref.threadLoadingMore,
    threadMessages = _ref.threadMessages;
  var threadId = thread == null ? void 0 : thread.id;
  var threadReplyCount = thread == null ? void 0 : thread.reply_count;
  var threadMessagesStr = (0, _utils.reduceMessagesToString)(threadMessages);
  var threadContext = (0, _react.useMemo)(function () {
    return {
      allowThreadMessagesInChannel: allowThreadMessagesInChannel,
      closeThread: closeThread,
      loadMoreThread: loadMoreThread,
      openThread: openThread,
      reloadThread: reloadThread,
      setThreadLoadingMore: setThreadLoadingMore,
      thread: thread,
      threadHasMore: threadHasMore,
      threadLoadingMore: threadLoadingMore,
      threadMessages: threadMessages
    };
  }, [allowThreadMessagesInChannel, threadHasMore, threadId, threadLoadingMore, threadMessagesStr, threadReplyCount]);
  return threadContext;
};
exports.useCreateThreadContext = useCreateThreadContext;
//# sourceMappingURL=useCreateThreadContext.js.map