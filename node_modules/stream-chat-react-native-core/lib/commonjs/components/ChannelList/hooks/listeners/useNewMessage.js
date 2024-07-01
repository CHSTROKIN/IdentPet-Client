var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewMessage = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _react = require("react");
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var _utils = require("../../utils");
var useNewMessage = function useNewMessage(_ref) {
  var lockChannelOrder = _ref.lockChannelOrder,
    onNewMessage = _ref.onNewMessage,
    setChannels = _ref.setChannels;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (typeof onNewMessage === 'function') {
        onNewMessage(lockChannelOrder, setChannels, event);
      } else {
        setChannels(function (channels) {
          if (!channels) return channels;
          var channelInList = channels.filter(function (channel) {
            return channel.cid === event.cid;
          }).length > 0;
          if (!channelInList && event.channel_type && event.channel_id) {
            var channel = client.channel(event.channel_type, event.channel_id);
            return [channel].concat((0, _toConsumableArray2["default"])(channels));
          }
          if (!lockChannelOrder && event.cid) return (0, _utils.moveChannelUp)({
            channels: channels,
            cid: event.cid
          });
          return (0, _toConsumableArray2["default"])(channels);
        });
      }
    };
    var listener = client == null ? void 0 : client.on('message.new', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useNewMessage = useNewMessage;
//# sourceMappingURL=useNewMessage.js.map