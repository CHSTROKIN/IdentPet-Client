var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelHidden = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var useChannelHidden = function useChannelHidden(_ref) {
  var onChannelHidden = _ref.onChannelHidden,
    setChannels = _ref.setChannels;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (typeof onChannelHidden === 'function') {
        onChannelHidden(setChannels, event);
      } else {
        setChannels(function (channels) {
          if (!channels) return channels;
          var index = channels.findIndex(function (channel) {
            var _event$channel;
            return channel.cid === (event.cid || ((_event$channel = event.channel) == null ? void 0 : _event$channel.cid));
          });
          if (index >= 0) {
            channels.splice(index, 1);
          }
          return (0, _toConsumableArray2["default"])(channels);
        });
      }
    };
    var listener = client == null ? void 0 : client.on('channel.hidden', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useChannelHidden = useChannelHidden;
//# sourceMappingURL=useChannelHidden.js.map