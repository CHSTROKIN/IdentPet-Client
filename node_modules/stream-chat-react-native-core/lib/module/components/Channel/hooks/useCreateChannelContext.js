Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateChannelContext = void 0;
var _react = require("react");
var useCreateChannelContext = function useCreateChannelContext(_ref) {
  var channel = _ref.channel,
    disabled = _ref.disabled,
    EmptyStateIndicator = _ref.EmptyStateIndicator,
    enableMessageGroupingByUser = _ref.enableMessageGroupingByUser,
    enforceUniqueReaction = _ref.enforceUniqueReaction,
    error = _ref.error,
    giphyEnabled = _ref.giphyEnabled,
    hideDateSeparators = _ref.hideDateSeparators,
    hideStickyDateHeader = _ref.hideStickyDateHeader,
    isAdmin = _ref.isAdmin,
    isChannelActive = _ref.isChannelActive,
    isModerator = _ref.isModerator,
    isOwner = _ref.isOwner,
    lastRead = _ref.lastRead,
    loadChannelAroundMessage = _ref.loadChannelAroundMessage,
    loadChannelAtMessage = _ref.loadChannelAtMessage,
    loading = _ref.loading,
    LoadingIndicator = _ref.LoadingIndicator,
    markRead = _ref.markRead,
    maxTimeBetweenGroupedMessages = _ref.maxTimeBetweenGroupedMessages,
    members = _ref.members,
    NetworkDownIndicator = _ref.NetworkDownIndicator,
    read = _ref.read,
    reloadChannel = _ref.reloadChannel,
    scrollToFirstUnreadThreshold = _ref.scrollToFirstUnreadThreshold,
    setLastRead = _ref.setLastRead,
    setTargetedMessage = _ref.setTargetedMessage,
    StickyHeader = _ref.StickyHeader,
    targetedMessage = _ref.targetedMessage,
    threadList = _ref.threadList,
    uploadAbortControllerRef = _ref.uploadAbortControllerRef,
    watcherCount = _ref.watcherCount,
    watchers = _ref.watchers;
  var channelId = channel == null ? void 0 : channel.id;
  var lastReadTime = lastRead == null ? void 0 : lastRead.getTime();
  var membersLength = Object.keys(members).length;
  var readUsers = Object.values(read);
  var readUsersLength = readUsers.length;
  var readUsersLastReads = readUsers.map(function (_ref2) {
    var last_read = _ref2.last_read;
    return last_read.toISOString();
  }).join();
  var channelContext = (0, _react.useMemo)(function () {
    return {
      channel: channel,
      disabled: disabled,
      EmptyStateIndicator: EmptyStateIndicator,
      enableMessageGroupingByUser: enableMessageGroupingByUser,
      enforceUniqueReaction: enforceUniqueReaction,
      error: error,
      giphyEnabled: giphyEnabled,
      hideDateSeparators: hideDateSeparators,
      hideStickyDateHeader: hideStickyDateHeader,
      isAdmin: isAdmin,
      isChannelActive: isChannelActive,
      isModerator: isModerator,
      isOwner: isOwner,
      lastRead: lastRead,
      loadChannelAroundMessage: loadChannelAroundMessage,
      loadChannelAtMessage: loadChannelAtMessage,
      loading: loading,
      LoadingIndicator: LoadingIndicator,
      markRead: markRead,
      maxTimeBetweenGroupedMessages: maxTimeBetweenGroupedMessages,
      members: members,
      NetworkDownIndicator: NetworkDownIndicator,
      read: read,
      reloadChannel: reloadChannel,
      scrollToFirstUnreadThreshold: scrollToFirstUnreadThreshold,
      setLastRead: setLastRead,
      setTargetedMessage: setTargetedMessage,
      StickyHeader: StickyHeader,
      targetedMessage: targetedMessage,
      threadList: threadList,
      uploadAbortControllerRef: uploadAbortControllerRef,
      watcherCount: watcherCount,
      watchers: watchers
    };
  }, [channelId, disabled, error, isChannelActive, lastReadTime, loading, membersLength, readUsersLength, readUsersLastReads, targetedMessage, threadList, watcherCount]);
  return channelContext;
};
exports.useCreateChannelContext = useCreateChannelContext;
//# sourceMappingURL=useCreateChannelContext.js.map