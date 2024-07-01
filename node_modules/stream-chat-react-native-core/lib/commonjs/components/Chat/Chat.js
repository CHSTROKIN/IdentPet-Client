var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chat = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _useAppSettings = require("./hooks/useAppSettings");
var _useCreateChatContext = require("./hooks/useCreateChatContext");
var _useIsOnline2 = require("./hooks/useIsOnline");
var _useMutedUsers = require("./hooks/useMutedUsers");
var _useSyncDatabase = require("./hooks/useSyncDatabase");
var _ChannelsStateContext = require("../../contexts/channelsStateContext/ChannelsStateContext");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _DebugContext = require("../../contexts/debugContext/DebugContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _useStreami18n = require("../../hooks/useStreami18n");
var _init = _interopRequireDefault(require("../../init"));
var _native = require("../../native");
var _QuickSqliteClient = require("../../store/QuickSqliteClient");
var _DBSyncManager = require("../../utils/DBSyncManager");
var _StreamChatRN = require("../../utils/StreamChatRN");
var _version = require("../../version.json");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Chat/Chat.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
(0, _init["default"])();
var ChatWithContext = function ChatWithContext(props) {
  var _client$user;
  var children = props.children,
    client = props.client,
    _props$closeConnectio = props.closeConnectionOnBackground,
    closeConnectionOnBackground = _props$closeConnectio === void 0 ? true : _props$closeConnectio,
    _props$enableOfflineS = props.enableOfflineSupport,
    enableOfflineSupport = _props$enableOfflineS === void 0 ? false : _props$enableOfflineS,
    i18nInstance = props.i18nInstance,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    _props$resizableCDNHo = props.resizableCDNHosts,
    resizableCDNHosts = _props$resizableCDNHo === void 0 ? ['.stream-io-cdn.com'] : _props$resizableCDNHo,
    style = props.style;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    channel = _useState2[0],
    setChannel = _useState2[1];
  var translators = (0, _useStreami18n.useStreami18n)(i18nInstance);
  var _useIsOnline = (0, _useIsOnline2.useIsOnline)(client, closeConnectionOnBackground),
    connectionRecovering = _useIsOnline.connectionRecovering,
    isOnline = _useIsOnline.isOnline;
  var _useState3 = (0, _react.useState)({
      initialised: false
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    initialisedDatabaseConfig = _useState4[0],
    setInitialisedDatabaseConfig = _useState4[1];
  var mutedUsers = (0, _useMutedUsers.useMutedUsers)(client);
  var debugRef = (0, _DebugContext.useDebugContext)();
  var isDebugModeEnabled = __DEV__ && debugRef && debugRef.current;
  var userID = client.userID;
  _StreamChatRN.StreamChatRN.setConfig({
    resizableCDNHosts: resizableCDNHosts
  });
  (0, _react.useEffect)(function () {
    if (client) {
      client.setUserAgent("".concat(_native.SDK, "-").concat(_reactNative.Platform.OS, "-").concat(_version.version));
      client.recoverStateOnReconnect = false;
      client.persistUserOnConnectionFailure = enableOfflineSupport;
    }
    if (isDebugModeEnabled) {
      if (debugRef.current.setEventType) debugRef.current.setEventType('send');
      if (debugRef.current.setSendEventParams) debugRef.current.setSendEventParams({
        action: 'Client',
        data: client.user
      });
    }
  }, [client, enableOfflineSupport]);
  var setActiveChannel = function setActiveChannel(newChannel) {
    return setChannel(newChannel);
  };
  (0, _react.useEffect)(function () {
    if (userID && enableOfflineSupport) {
      setInitialisedDatabaseConfig({
        initialised: false,
        userID: userID
      });
      _QuickSqliteClient.QuickSqliteClient.initializeDatabase();
      _DBSyncManager.DBSyncManager.init(client);
      setInitialisedDatabaseConfig({
        initialised: true,
        userID: userID
      });
    }
  }, [userID, enableOfflineSupport]);
  var initialisedDatabase = initialisedDatabaseConfig.initialised && userID === initialisedDatabaseConfig.userID;
  var appSettings = (0, _useAppSettings.useAppSettings)(client, isOnline, enableOfflineSupport, initialisedDatabase);
  var chatContext = (0, _useCreateChatContext.useCreateChatContext)({
    appSettings: appSettings,
    channel: channel,
    client: client,
    connectionRecovering: connectionRecovering,
    enableOfflineSupport: enableOfflineSupport,
    ImageComponent: ImageComponent,
    isOnline: isOnline,
    mutedUsers: mutedUsers,
    resizableCDNHosts: resizableCDNHosts,
    setActiveChannel: setActiveChannel
  });
  (0, _useSyncDatabase.useSyncDatabase)({
    client: client,
    enableOfflineSupport: enableOfflineSupport,
    initialisedDatabase: initialisedDatabase
  });
  if (userID && enableOfflineSupport && !initialisedDatabase) {
    return null;
  }
  return (0, _jsxRuntime.jsx)(_ChatContext.ChatProvider, {
    value: chatContext,
    children: (0, _jsxRuntime.jsx)(_TranslationContext.TranslationProvider, {
      value: Object.assign({}, translators, {
        userLanguage: ((_client$user = client.user) == null ? void 0 : _client$user.language) || _TranslationContext.DEFAULT_USER_LANGUAGE
      }),
      children: (0, _jsxRuntime.jsx)(_ThemeContext.ThemeProvider, {
        style: style,
        children: (0, _jsxRuntime.jsx)(_ChannelsStateContext.ChannelsStateProvider, {
          children: children
        })
      })
    })
  });
};
var Chat = function Chat(props) {
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    style = _useOverlayContext.style;
  return (0, _jsxRuntime.jsx)(ChatWithContext, Object.assign({
    style: style
  }, props));
};
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map