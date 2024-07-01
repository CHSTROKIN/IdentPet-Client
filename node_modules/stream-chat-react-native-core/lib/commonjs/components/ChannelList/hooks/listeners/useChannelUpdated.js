var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelUpdated = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var useChannelUpdated = function useChannelUpdated(_ref) {
  var onChannelUpdated = _ref.onChannelUpdated,
    setChannels = _ref.setChannels;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (typeof onChannelUpdated === 'function') {
        onChannelUpdated(setChannels, event);
      } else {
        setChannels(function (channels) {
          if (!channels) return channels;
          var index = channels.findIndex(function (channel) {
            var _event$channel;
            return channel.cid === (event.cid || ((_event$channel = event.channel) == null ? void 0 : _event$channel.cid));
          });
          if (index >= 0 && event.channel) {
            var _event$channel$hidden, _event$channel2, _channels$index$data, _event$channel$own_ca, _event$channel3, _channels$index$data2;
            channels[index].data = Object.assign({}, event.channel, {
              hidden: (_event$channel$hidden = (_event$channel2 = event.channel) == null ? void 0 : _event$channel2.hidden) != null ? _event$channel$hidden : (_channels$index$data = channels[index].data) == null ? void 0 : _channels$index$data.hidden,
              own_capabilities: (_event$channel$own_ca = (_event$channel3 = event.channel) == null ? void 0 : _event$channel3.own_capabilities) != null ? _event$channel$own_ca : (_channels$index$data2 = channels[index].data) == null ? void 0 : _channels$index$data2.own_capabilities
            });
          }
          return (0, _toConsumableArray2["default"])(channels);
        });
      }
    };
    var listener = client == null ? void 0 : client.on('channel.updated', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useChannelUpdated = useChannelUpdated;
//# sourceMappingURL=useChannelUpdated.js.map