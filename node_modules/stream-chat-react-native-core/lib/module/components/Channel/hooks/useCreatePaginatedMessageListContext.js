Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreatePaginatedMessageListContext = void 0;
var _react = require("react");
var _utils = require("../../../utils/utils");
var useCreatePaginatedMessageListContext = function useCreatePaginatedMessageListContext(_ref) {
  var channelId = _ref.channelId,
    hasMore = _ref.hasMore,
    hasNoMoreRecentMessagesToLoad = _ref.hasNoMoreRecentMessagesToLoad,
    loadingMore = _ref.loadingMore,
    loadingMoreRecent = _ref.loadingMoreRecent,
    loadMore = _ref.loadMore,
    loadMoreRecent = _ref.loadMoreRecent,
    messages = _ref.messages,
    setLoadingMore = _ref.setLoadingMore,
    setLoadingMoreRecent = _ref.setLoadingMoreRecent;
  var messagesStr = (0, _utils.reduceMessagesToString)(messages);
  var paginatedMessagesContext = (0, _react.useMemo)(function () {
    return {
      hasMore: hasMore,
      hasNoMoreRecentMessagesToLoad: hasNoMoreRecentMessagesToLoad,
      loadingMore: loadingMore,
      loadingMoreRecent: loadingMoreRecent,
      loadMore: loadMore,
      loadMoreRecent: loadMoreRecent,
      messages: messages,
      setLoadingMore: setLoadingMore,
      setLoadingMoreRecent: setLoadingMoreRecent
    };
  }, [channelId, hasMore, loadingMoreRecent, loadingMore, hasNoMoreRecentMessagesToLoad, messagesStr]);
  return paginatedMessagesContext;
};
exports.useCreatePaginatedMessageListContext = useCreatePaginatedMessageListContext;
//# sourceMappingURL=useCreatePaginatedMessageListContext.js.map