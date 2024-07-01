Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateChannelsContext = void 0;
var _react = require("react");
var useCreateChannelsContext = function useCreateChannelsContext(_ref) {
  var additionalFlatListProps = _ref.additionalFlatListProps,
    channels = _ref.channels,
    EmptyStateIndicator = _ref.EmptyStateIndicator,
    error = _ref.error,
    FooterLoadingIndicator = _ref.FooterLoadingIndicator,
    forceUpdate = _ref.forceUpdate,
    hasNextPage = _ref.hasNextPage,
    HeaderErrorIndicator = _ref.HeaderErrorIndicator,
    HeaderNetworkDownIndicator = _ref.HeaderNetworkDownIndicator,
    ListHeaderComponent = _ref.ListHeaderComponent,
    loadingChannels = _ref.loadingChannels,
    LoadingErrorIndicator = _ref.LoadingErrorIndicator,
    LoadingIndicator = _ref.LoadingIndicator,
    loadingNextPage = _ref.loadingNextPage,
    loadMoreThreshold = _ref.loadMoreThreshold,
    loadNextPage = _ref.loadNextPage,
    maxUnreadCount = _ref.maxUnreadCount,
    numberOfSkeletons = _ref.numberOfSkeletons,
    onSelect = _ref.onSelect,
    Preview = _ref.Preview,
    PreviewAvatar = _ref.PreviewAvatar,
    PreviewMessage = _ref.PreviewMessage,
    PreviewMutedStatus = _ref.PreviewMutedStatus,
    PreviewStatus = _ref.PreviewStatus,
    PreviewTitle = _ref.PreviewTitle,
    PreviewUnreadCount = _ref.PreviewUnreadCount,
    refreshing = _ref.refreshing,
    refreshList = _ref.refreshList,
    reloadList = _ref.reloadList,
    setFlatListRef = _ref.setFlatListRef,
    Skeleton = _ref.Skeleton;
  var channelValueString = channels == null ? void 0 : channels.map(function (channel) {
    var _channel$data$name, _channel$data, _channel$id;
    return "".concat((_channel$data$name = (_channel$data = channel.data) == null ? void 0 : _channel$data.name) != null ? _channel$data$name : '').concat((_channel$id = channel.id) != null ? _channel$id : '').concat(Object.values(channel.state.members).map(function (member) {
      var _member$user;
      return (_member$user = member.user) == null ? void 0 : _member$user.online;
    }).join());
  }).join();
  var channelsContext = (0, _react.useMemo)(function () {
    return {
      additionalFlatListProps: additionalFlatListProps,
      channels: channels,
      EmptyStateIndicator: EmptyStateIndicator,
      error: error,
      FooterLoadingIndicator: FooterLoadingIndicator,
      forceUpdate: forceUpdate,
      hasNextPage: hasNextPage,
      HeaderErrorIndicator: HeaderErrorIndicator,
      HeaderNetworkDownIndicator: HeaderNetworkDownIndicator,
      ListHeaderComponent: ListHeaderComponent,
      loadingChannels: loadingChannels,
      LoadingErrorIndicator: LoadingErrorIndicator,
      LoadingIndicator: LoadingIndicator,
      loadingNextPage: loadingNextPage,
      loadMoreThreshold: loadMoreThreshold,
      loadNextPage: loadNextPage,
      maxUnreadCount: maxUnreadCount,
      numberOfSkeletons: numberOfSkeletons,
      onSelect: onSelect,
      Preview: Preview,
      PreviewAvatar: PreviewAvatar,
      PreviewMessage: PreviewMessage,
      PreviewMutedStatus: PreviewMutedStatus,
      PreviewStatus: PreviewStatus,
      PreviewTitle: PreviewTitle,
      PreviewUnreadCount: PreviewUnreadCount,
      refreshing: refreshing,
      refreshList: refreshList,
      reloadList: reloadList,
      setFlatListRef: setFlatListRef,
      Skeleton: Skeleton
    };
  }, [channelValueString, error, forceUpdate, hasNextPage, loadingChannels, loadingNextPage, refreshing]);
  return channelsContext;
};
exports.useCreateChannelsContext = useCreateChannelsContext;
//# sourceMappingURL=useCreateChannelsContext.js.map