var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessenger = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _ChannelAvatar = require("./ChannelAvatar");
var _ChannelPreviewMessage = require("./ChannelPreviewMessage");
var _ChannelPreviewMutedStatus = require("./ChannelPreviewMutedStatus");
var _ChannelPreviewStatus = require("./ChannelPreviewStatus");
var _ChannelPreviewTitle = require("./ChannelPreviewTitle");
var _ChannelPreviewUnreadCount = require("./ChannelPreviewUnreadCount");
var _useChannelPreviewDisplayName = require("./hooks/useChannelPreviewDisplayName");
var _ChannelsContext = require("../../contexts/channelsContext/ChannelsContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/ChannelPreview/ChannelPreviewMessenger.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12
  },
  contentContainer: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 8
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: '700'
  }
});
var ChannelPreviewMessengerWithContext = function ChannelPreviewMessengerWithContext(props) {
  var channel = props.channel,
    formatLatestMessageDate = props.formatLatestMessageDate,
    latestMessagePreview = props.latestMessagePreview,
    maxUnreadCount = props.maxUnreadCount,
    onSelect = props.onSelect,
    _props$PreviewAvatar = props.PreviewAvatar,
    PreviewAvatar = _props$PreviewAvatar === void 0 ? _ChannelAvatar.ChannelAvatar : _props$PreviewAvatar,
    _props$PreviewMessage = props.PreviewMessage,
    PreviewMessage = _props$PreviewMessage === void 0 ? _ChannelPreviewMessage.ChannelPreviewMessage : _props$PreviewMessage,
    _props$PreviewMutedSt = props.PreviewMutedStatus,
    PreviewMutedStatus = _props$PreviewMutedSt === void 0 ? _ChannelPreviewMutedStatus.ChannelPreviewMutedStatus : _props$PreviewMutedSt,
    _props$PreviewStatus = props.PreviewStatus,
    PreviewStatus = _props$PreviewStatus === void 0 ? _ChannelPreviewStatus.ChannelPreviewStatus : _props$PreviewStatus,
    _props$PreviewTitle = props.PreviewTitle,
    PreviewTitle = _props$PreviewTitle === void 0 ? _ChannelPreviewTitle.ChannelPreviewTitle : _props$PreviewTitle,
    _props$PreviewUnreadC = props.PreviewUnreadCount,
    PreviewUnreadCount = _props$PreviewUnreadC === void 0 ? _ChannelPreviewUnreadCount.ChannelPreviewUnreadCount : _props$PreviewUnreadC,
    unread = props.unread;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var maxWidth = vw(80) - 16 - 40;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$chann = _useTheme$theme.channelPreview,
    container = _useTheme$theme$chann.container,
    contentContainer = _useTheme$theme$chann.contentContainer,
    row = _useTheme$theme$chann.row,
    title = _useTheme$theme$chann.title,
    _useTheme$theme$color = _useTheme$theme.colors,
    border = _useTheme$theme$color.border,
    white_snow = _useTheme$theme$color.white_snow;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  var displayName = (0, _useChannelPreviewDisplayName.useChannelPreviewDisplayName)(channel, Math.floor(maxWidth / ((title.fontSize || styles.title.fontSize) / 2)));
  var _useState = (0, _react.useState)(function () {
      return channel.muteStatus().muted;
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isChannelMuted = _useState2[0],
    setIsChannelMuted = _useState2[1];
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent() {
      return setIsChannelMuted(channel.muteStatus().muted);
    };
    client.on('notification.channel_mutes_updated', handleEvent);
    return function () {
      return client.off('notification.channel_mutes_updated', handleEvent);
    };
  }, [client]);
  return (0, _jsxRuntime.jsxs)(_reactNativeGestureHandler.TouchableOpacity, {
    onPress: function onPress() {
      if (onSelect) {
        onSelect(channel);
      }
    },
    style: [styles.container, {
      backgroundColor: white_snow,
      borderBottomColor: border
    }, container],
    testID: "channel-preview-button",
    children: [(0, _jsxRuntime.jsx)(PreviewAvatar, {
      channel: channel
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.contentContainer, contentContainer],
      testID: "channel-preview-content-".concat(channel.id),
      children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.row, row],
        children: [(0, _jsxRuntime.jsx)(PreviewTitle, {
          channel: channel,
          displayName: displayName
        }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.statusContainer, row],
          children: [isChannelMuted && (0, _jsxRuntime.jsx)(PreviewMutedStatus, {}), (0, _jsxRuntime.jsx)(PreviewUnreadCount, {
            channel: channel,
            maxUnreadCount: maxUnreadCount,
            unread: unread
          })]
        })]
      }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.row, row],
        children: [(0, _jsxRuntime.jsx)(PreviewMessage, {
          latestMessagePreview: latestMessagePreview
        }), (0, _jsxRuntime.jsx)(PreviewStatus, {
          channel: channel,
          formatLatestMessageDate: formatLatestMessageDate,
          latestMessagePreview: latestMessagePreview
        })]
      })]
    })]
  });
};
var MemoizedChannelPreviewMessengerWithContext = _react["default"].memo(ChannelPreviewMessengerWithContext);
var ChannelPreviewMessenger = function ChannelPreviewMessenger(props) {
  var _useChannelsContext = (0, _ChannelsContext.useChannelsContext)(),
    maxUnreadCount = _useChannelsContext.maxUnreadCount,
    onSelect = _useChannelsContext.onSelect,
    PreviewAvatar = _useChannelsContext.PreviewAvatar,
    PreviewMessage = _useChannelsContext.PreviewMessage,
    PreviewMutedStatus = _useChannelsContext.PreviewMutedStatus,
    PreviewStatus = _useChannelsContext.PreviewStatus,
    PreviewTitle = _useChannelsContext.PreviewTitle,
    PreviewUnreadCount = _useChannelsContext.PreviewUnreadCount;
  return (0, _jsxRuntime.jsx)(MemoizedChannelPreviewMessengerWithContext, Object.assign({
    maxUnreadCount: maxUnreadCount,
    onSelect: onSelect,
    PreviewAvatar: PreviewAvatar,
    PreviewMessage: PreviewMessage,
    PreviewMutedStatus: PreviewMutedStatus,
    PreviewStatus: PreviewStatus,
    PreviewTitle: PreviewTitle,
    PreviewUnreadCount: PreviewUnreadCount
  }, props));
};
exports.ChannelPreviewMessenger = ChannelPreviewMessenger;
ChannelPreviewMessenger.displayName = 'ChannelPreviewMessenger{channelPreview}';
//# sourceMappingURL=ChannelPreviewMessenger.js.map