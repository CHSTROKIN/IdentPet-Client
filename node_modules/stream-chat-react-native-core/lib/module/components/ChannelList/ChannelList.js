var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelList = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ChannelListFooterLoadingIndicator = require("./ChannelListFooterLoadingIndicator");
var _ChannelListHeaderErrorIndicator = require("./ChannelListHeaderErrorIndicator");
var _ChannelListHeaderNetworkDownIndicator = require("./ChannelListHeaderNetworkDownIndicator");
var _ChannelListLoadingIndicator = require("./ChannelListLoadingIndicator");
var _ChannelListMessenger = require("./ChannelListMessenger");
var _useAddedToChannelNotification = require("./hooks/listeners/useAddedToChannelNotification");
var _useChannelDeleted = require("./hooks/listeners/useChannelDeleted");
var _useChannelHidden = require("./hooks/listeners/useChannelHidden");
var _useChannelTruncated = require("./hooks/listeners/useChannelTruncated");
var _useChannelUpdated = require("./hooks/listeners/useChannelUpdated");
var _useChannelVisible = require("./hooks/listeners/useChannelVisible");
var _useNewMessage = require("./hooks/listeners/useNewMessage");
var _useNewMessageNotification = require("./hooks/listeners/useNewMessageNotification");
var _useRemovedFromChannelNotification = require("./hooks/listeners/useRemovedFromChannelNotification");
var _useUserPresence = require("./hooks/listeners/useUserPresence");
var _useCreateChannelsContext = require("./hooks/useCreateChannelsContext");
var _usePaginatedChannels2 = require("./hooks/usePaginatedChannels");
var _Skeleton = require("./Skeleton");
var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _upsertCidsForQuery = require("../../store/apis/upsertCidsForQuery");
var _ChannelPreviewMessenger = require("../ChannelPreview/ChannelPreviewMessenger");
var _EmptyStateIndicator = require("../Indicators/EmptyStateIndicator");
var _LoadingErrorIndicator = require("../Indicators/LoadingErrorIndicator");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var DEFAULT_FILTERS = {};
var DEFAULT_OPTIONS = {};
var DEFAULT_SORT = {};
var ChannelList = function ChannelList(props) {
  var _props$additionalFlat = props.additionalFlatListProps,
    additionalFlatListProps = _props$additionalFlat === void 0 ? {} : _props$additionalFlat,
    channelRenderFilterFn = props.channelRenderFilterFn,
    _props$EmptyStateIndi = props.EmptyStateIndicator,
    EmptyStateIndicator = _props$EmptyStateIndi === void 0 ? _EmptyStateIndicator.EmptyStateIndicator : _props$EmptyStateIndi,
    _props$filters = props.filters,
    filters = _props$filters === void 0 ? DEFAULT_FILTERS : _props$filters,
    _props$FooterLoadingI = props.FooterLoadingIndicator,
    FooterLoadingIndicator = _props$FooterLoadingI === void 0 ? _ChannelListFooterLoadingIndicator.ChannelListFooterLoadingIndicator : _props$FooterLoadingI,
    _props$HeaderErrorInd = props.HeaderErrorIndicator,
    HeaderErrorIndicator = _props$HeaderErrorInd === void 0 ? _ChannelListHeaderErrorIndicator.ChannelListHeaderErrorIndicator : _props$HeaderErrorInd,
    _props$HeaderNetworkD = props.HeaderNetworkDownIndicator,
    HeaderNetworkDownIndicator = _props$HeaderNetworkD === void 0 ? _ChannelListHeaderNetworkDownIndicator.ChannelListHeaderNetworkDownIndicator : _props$HeaderNetworkD,
    _props$List = props.List,
    List = _props$List === void 0 ? _ChannelListMessenger.ChannelListMessenger : _props$List,
    ListHeaderComponent = props.ListHeaderComponent,
    _props$LoadingErrorIn = props.LoadingErrorIndicator,
    LoadingErrorIndicator = _props$LoadingErrorIn === void 0 ? _LoadingErrorIndicator.LoadingErrorIndicator : _props$LoadingErrorIn,
    _props$LoadingIndicat = props.LoadingIndicator,
    LoadingIndicator = _props$LoadingIndicat === void 0 ? _ChannelListLoadingIndicator.ChannelListLoadingIndicator : _props$LoadingIndicat,
    _props$loadMoreThresh = props.loadMoreThreshold,
    loadMoreThreshold = _props$loadMoreThresh === void 0 ? 0.1 : _props$loadMoreThresh,
    _props$lockChannelOrd = props.lockChannelOrder,
    lockChannelOrder = _props$lockChannelOrd === void 0 ? false : _props$lockChannelOrd,
    _props$maxUnreadCount = props.maxUnreadCount,
    maxUnreadCount = _props$maxUnreadCount === void 0 ? 255 : _props$maxUnreadCount,
    _props$numberOfSkelet = props.numberOfSkeletons,
    numberOfSkeletons = _props$numberOfSkelet === void 0 ? 6 : _props$numberOfSkelet,
    onAddedToChannel = props.onAddedToChannel,
    onChannelDeleted = props.onChannelDeleted,
    onChannelHidden = props.onChannelHidden,
    onChannelTruncated = props.onChannelTruncated,
    onChannelUpdated = props.onChannelUpdated,
    onChannelVisible = props.onChannelVisible,
    onMessageNew = props.onMessageNew,
    onNewMessage = props.onNewMessage,
    onNewMessageNotification = props.onNewMessageNotification,
    onRemovedFromChannel = props.onRemovedFromChannel,
    onSelect = props.onSelect,
    _props$options = props.options,
    options = _props$options === void 0 ? DEFAULT_OPTIONS : _props$options,
    _props$Preview = props.Preview,
    Preview = _props$Preview === void 0 ? _ChannelPreviewMessenger.ChannelPreviewMessenger : _props$Preview,
    PreviewAvatar = props.PreviewAvatar,
    PreviewMessage = props.PreviewMessage,
    PreviewMutedStatus = props.PreviewMutedStatus,
    PreviewStatus = props.PreviewStatus,
    PreviewTitle = props.PreviewTitle,
    PreviewUnreadCount = props.PreviewUnreadCount,
    _setFlatListRef = props.setFlatListRef,
    _props$Skeleton = props.Skeleton,
    Skeleton = _props$Skeleton === void 0 ? _Skeleton.Skeleton : _props$Skeleton,
    _props$sort = props.sort,
    sort = _props$sort === void 0 ? DEFAULT_SORT : _props$sort;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    forceUpdate = _useState2[0],
    setForceUpdate = _useState2[1];
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    enableOfflineSupport = _useChatContext.enableOfflineSupport;
  var _usePaginatedChannels = (0, _usePaginatedChannels2.usePaginatedChannels)({
      enableOfflineSupport: enableOfflineSupport,
      filters: filters,
      options: options,
      setForceUpdate: setForceUpdate,
      sort: sort
    }),
    channels = _usePaginatedChannels.channels,
    error = _usePaginatedChannels.error,
    hasNextPage = _usePaginatedChannels.hasNextPage,
    loadingChannels = _usePaginatedChannels.loadingChannels,
    loadingNextPage = _usePaginatedChannels.loadingNextPage,
    loadNextPage = _usePaginatedChannels.loadNextPage,
    refreshing = _usePaginatedChannels.refreshing,
    refreshList = _usePaginatedChannels.refreshList,
    reloadList = _usePaginatedChannels.reloadList,
    setChannels = _usePaginatedChannels.setChannels,
    staticChannelsActive = _usePaginatedChannels.staticChannelsActive;
  (0, _useAddedToChannelNotification.useAddedToChannelNotification)({
    onAddedToChannel: onAddedToChannel,
    setChannels: setChannels
  });
  (0, _useChannelDeleted.useChannelDeleted)({
    onChannelDeleted: onChannelDeleted,
    setChannels: setChannels
  });
  (0, _useChannelHidden.useChannelHidden)({
    onChannelHidden: onChannelHidden,
    setChannels: setChannels
  });
  (0, _useChannelTruncated.useChannelTruncated)({
    onChannelTruncated: onChannelTruncated,
    refreshList: refreshList,
    setChannels: setChannels,
    setForceUpdate: setForceUpdate
  });
  (0, _useChannelUpdated.useChannelUpdated)({
    onChannelUpdated: onChannelUpdated,
    setChannels: setChannels
  });
  (0, _useChannelVisible.useChannelVisible)({
    onChannelVisible: onChannelVisible,
    setChannels: setChannels
  });
  (0, _useNewMessage.useNewMessage)({
    lockChannelOrder: lockChannelOrder,
    onNewMessage: onNewMessage,
    setChannels: setChannels
  });
  (0, _useNewMessageNotification.useNewMessageNotification)({
    onMessageNew: onMessageNew,
    onNewMessageNotification: onNewMessageNotification,
    setChannels: setChannels
  });
  (0, _useRemovedFromChannelNotification.useRemovedFromChannelNotification)({
    onRemovedFromChannel: onRemovedFromChannel,
    setChannels: setChannels
  });
  (0, _useUserPresence.useUserPresence)({
    setChannels: setChannels
  });
  var channelIdsStr = channels == null ? void 0 : channels.reduce(function (acc, channel) {
    return "".concat(acc).concat(channel.cid);
  }, '');
  (0, _react.useEffect)(function () {
    if (channels === null || staticChannelsActive || !enableOfflineSupport) {
      return;
    }
    (0, _upsertCidsForQuery.upsertCidsForQuery)({
      cids: channels.map(function (c) {
        return c.cid;
      }),
      filters: filters,
      sort: sort
    });
  }, [channelIdsStr, staticChannelsActive]);
  var channelsContext = (0, _useCreateChannelsContext.useCreateChannelsContext)({
    additionalFlatListProps: additionalFlatListProps,
    channels: channelRenderFilterFn ? channelRenderFilterFn(channels != null ? channels : []) : channels,
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
    setFlatListRef: function setFlatListRef(ref) {
      if (_setFlatListRef) {
        _setFlatListRef(ref);
      }
    },
    Skeleton: Skeleton
  });
  return (0, _jsxRuntime.jsx)(_ChannelsContext.ChannelsProvider, {
    value: channelsContext,
    children: (0, _jsxRuntime.jsx)(List, {})
  });
};
exports.ChannelList = ChannelList;
//# sourceMappingURL=ChannelList.js.map