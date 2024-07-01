var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRemovedFromChannelNotification = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var useRemovedFromChannelNotification = function useRemovedFromChannelNotification(_ref) {
  var onRemovedFromChannel = _ref.onRemovedFromChannel,
    setChannels = _ref.setChannels;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (typeof onRemovedFromChannel === 'function') {
        onRemovedFromChannel(setChannels, event);
      } else {
        setChannels(function (channels) {
          if (!channels) return channels;
          var newChannels = channels.filter(function (channel) {
            var _event$channel;
            return channel.cid !== ((_event$channel = event.channel) == null ? void 0 : _event$channel.cid);
          });
          return (0, _toConsumableArray2["default"])(newChannels);
        });
      }
    };
    var listener = client == null ? void 0 : client.on('notification.removed_from_channel', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useRemovedFromChannelNotification = useRemovedFromChannelNotification;
//# sourceMappingURL=useRemovedFromChannelNotification.js.map