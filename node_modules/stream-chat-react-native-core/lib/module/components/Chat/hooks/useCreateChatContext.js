Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateChatContext = void 0;
var _react = require("react");
var useCreateChatContext = function useCreateChatContext(_ref) {
  var appSettings = _ref.appSettings,
    channel = _ref.channel,
    client = _ref.client,
    connectionRecovering = _ref.connectionRecovering,
    enableOfflineSupport = _ref.enableOfflineSupport,
    ImageComponent = _ref.ImageComponent,
    isOnline = _ref.isOnline,
    mutedUsers = _ref.mutedUsers,
    resizableCDNHosts = _ref.resizableCDNHosts,
    setActiveChannel = _ref.setActiveChannel;
  var channelId = channel == null ? void 0 : channel.id;
  var clientValues = client ? "".concat(client.clientID).concat(Object.keys(client.activeChannels).length).concat(Object.keys(client.listeners).length).concat(client.mutedChannels.length) : 'Offline';
  var mutedUsersLength = mutedUsers.length;
  var chatContext = (0, _react.useMemo)(function () {
    return {
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
    };
  }, [channelId, clientValues, connectionRecovering, isOnline, mutedUsersLength]);
  return chatContext;
};
exports.useCreateChatContext = useCreateChatContext;
//# sourceMappingURL=useCreateChatContext.js.map