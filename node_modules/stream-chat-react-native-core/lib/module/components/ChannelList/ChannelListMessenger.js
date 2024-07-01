var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelListMessenger = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _DebugContext = require("../../contexts/debugContext/DebugContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _ChannelPreview = require("../ChannelPreview/ChannelPreview");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelList/ChannelListMessenger.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  flatList: {
    flex: 1
  },
  flatListContentContainer: {
    flexGrow: 1
  },
  statusIndicator: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  }
});
var StatusIndicator = function StatusIndicator() {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    isOnline = _useChatContext.isOnline;
  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
    error = _useChannelsContext.error,
    HeaderErrorIndicator = _useChannelsContext.HeaderErrorIndicator,
    HeaderNetworkDownIndicator = _useChannelsContext.HeaderNetworkDownIndicator,
    loadingChannels = _useChannelsContext.loadingChannels,
    refreshList = _useChannelsContext.refreshList;
  if (loadingChannels) return null;
  if (!isOnline) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.statusIndicator,
      children: (0, _jsxRuntime.jsx)(HeaderNetworkDownIndicator, {})
    });
  } else if (error) {
    return (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.statusIndicator,
      children: (0, _jsxRuntime.jsx)(HeaderErrorIndicator, {
        onPress: refreshList
      })
    });
  }
  return null;
};
var renderItem = function renderItem(_ref) {
  var item = _ref.item;
  return (0, _jsxRuntime.jsx)(_ChannelPreview.ChannelPreview, {
    channel: item
  });
};
var keyExtractor = function keyExtractor(item) {
  return item.cid;
};
var ChannelListMessengerWithContext = function ChannelListMessengerWithContext(props) {
  var onEndReachedCalledDuringCurrentScrollRef = (0, _react.useRef)(false);
  var additionalFlatListProps = props.additionalFlatListProps,
    channels = props.channels,
    EmptyStateIndicator = props.EmptyStateIndicator,
    error = props.error,
    FooterLoadingIndicator = props.FooterLoadingIndicator,
    forceUpdate = props.forceUpdate,
    hasNextPage = props.hasNextPage,
    ListHeaderComponent = props.ListHeaderComponent,
    loadingChannels = props.loadingChannels,
    LoadingErrorIndicator = props.LoadingErrorIndicator,
    LoadingIndicator = props.LoadingIndicator,
    loadingNextPage = props.loadingNextPage,
    loadMoreThreshold = props.loadMoreThreshold,
    loadNextPage = props.loadNextPage,
    refreshing = props.refreshing,
    refreshList = props.refreshList,
    reloadList = props.reloadList,
    setFlatListRef = props.setFlatListRef;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelListMessenger,
    flatList = _useTheme$theme$chann.flatList,
    flatListContent = _useTheme$theme$chann.flatListContent,
    white_snow = _useTheme$theme.colors.white_snow;
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var debugRef = (0, _DebugContext.useDebugContext)();
  (0, _react.useEffect)(function () {
    if (!!loadingChannels !== loading) {
      setLoading(!!loadingChannels);
    }
  }, [loading, loadingChannels]);
  var isDebugModeEnabled = __DEV__ && debugRef && debugRef.current;
  if (isDebugModeEnabled) {
    if (debugRef.current.setEventType) debugRef.current.setEventType('send');
    if (debugRef.current.setSendEventParams) debugRef.current.setSendEventParams({
      action: 'Channels',
      data: channels == null ? void 0 : channels.map(function (channel) {
        return {
          data: channel.data,
          members: channel.state.members
        };
      })
    });
  }
  if (error && !refreshing && !loadingChannels && channels === null) {
    return (0, _jsxRuntime.jsx)(LoadingErrorIndicator, {
      error: error,
      listType: "channel",
      loadNextPage: loadNextPage,
      retry: reloadList
    });
  }
  var onEndReached = function onEndReached() {
    if (!onEndReachedCalledDuringCurrentScrollRef.current && hasNextPage) {
      loadNextPage();
      onEndReachedCalledDuringCurrentScrollRef.current = true;
    }
  };
  if (loadingChannels) {
    return (0, _jsxRuntime.jsx)(LoadingIndicator, {
      listType: "channel"
    });
  }
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_reactNative.FlatList, Object.assign({
      contentContainerStyle: [styles.flatListContentContainer, {
        backgroundColor: white_snow
      }, flatListContent],
      data: channels,
      extraData: forceUpdate,
      keyExtractor: keyExtractor,
      ListEmptyComponent: loading ? (0, _jsxRuntime.jsx)(LoadingIndicator, {
        listType: "channel"
      }) : (0, _jsxRuntime.jsx)(EmptyStateIndicator, {
        listType: "channel"
      }),
      ListFooterComponent: loadingNextPage ? (0, _jsxRuntime.jsx)(FooterLoadingIndicator, {}) : undefined,
      ListHeaderComponent: ListHeaderComponent,
      onEndReached: onEndReached,
      onEndReachedThreshold: loadMoreThreshold,
      onMomentumScrollBegin: function onMomentumScrollBegin() {
        return onEndReachedCalledDuringCurrentScrollRef.current = false;
      },
      ref: setFlatListRef,
      refreshControl: (0, _jsxRuntime.jsx)(_reactNative.RefreshControl, {
        onRefresh: refreshList,
        refreshing: refreshing
      }),
      renderItem: renderItem,
      style: [styles.flatList, {
        backgroundColor: white_snow
      }, flatList],
      testID: "channel-list-messenger"
    }, additionalFlatListProps)), (0, _jsxRuntime.jsx)(StatusIndicator, {})]
  });
};
var ChannelListMessenger = function ChannelListMessenger(props) {
  var _useChannelsContext2 = (0, _ChannelsContext.useChannelsContext)(),
    additionalFlatListProps = _useChannelsContext2.additionalFlatListProps,
    channels = _useChannelsContext2.channels,
    EmptyStateIndicator = _useChannelsContext2.EmptyStateIndicator,
    error = _useChannelsContext2.error,
    FooterLoadingIndicator = _useChannelsContext2.FooterLoadingIndicator,
    forceUpdate = _useChannelsContext2.forceUpdate,
    hasNextPage = _useChannelsContext2.hasNextPage,
    ListHeaderComponent = _useChannelsContext2.ListHeaderComponent,
    loadingChannels = _useChannelsContext2.loadingChannels,
    LoadingErrorIndicator = _useChannelsContext2.LoadingErrorIndicator,
    LoadingIndicator = _useChannelsContext2.LoadingIndicator,
    loadingNextPage = _useChannelsContext2.loadingNextPage,
    loadMoreThreshold = _useChannelsContext2.loadMoreThreshold,
    loadNextPage = _useChannelsContext2.loadNextPage,
    refreshing = _useChannelsContext2.refreshing,
    refreshList = _useChannelsContext2.refreshList,
    reloadList = _useChannelsContext2.reloadList,
    setFlatListRef = _useChannelsContext2.setFlatListRef;
  return (0, _jsxRuntime.jsx)(ChannelListMessengerWithContext, Object.assign({
    additionalFlatListProps: additionalFlatListProps,
    channels: channels,
    EmptyStateIndicator: EmptyStateIndicator,
    error: error,
    FooterLoadingIndicator: FooterLoadingIndicator,
    forceUpdate: forceUpdate,
    hasNextPage: hasNextPage,
    ListHeaderComponent: ListHeaderComponent,
    loadingChannels: loadingChannels,
    LoadingErrorIndicator: LoadingErrorIndicator,
    LoadingIndicator: LoadingIndicator,
    loadingNextPage: loadingNextPage,
    loadMoreThreshold: loadMoreThreshold,
    loadNextPage: loadNextPage,
    refreshing: refreshing,
    refreshList: refreshList,
    reloadList: reloadList,
    setFlatListRef: setFlatListRef
  }, props));
};
exports.ChannelListMessenger = ChannelListMessenger;
ChannelListMessenger.displayName = 'ChannelListMessenger{channelListMessenger}';
//# sourceMappingURL=ChannelListMessenger.js.map