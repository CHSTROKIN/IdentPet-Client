Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useChannelTruncated = void 0;
var _react = require("react");
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var useChannelTruncated = function useChannelTruncated(_ref) {
  var onChannelTruncated = _ref.onChannelTruncated,
    refreshList = _ref.refreshList,
    setChannels = _ref.setChannels,
    setForceUpdate = _ref.setForceUpdate;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      if (typeof onChannelTruncated === 'function') {
        onChannelTruncated(setChannels, event);
      }
      refreshList();
      setForceUpdate(function (count) {
        return count + 1;
      });
    };
    var listener = client == null ? void 0 : client.on('channel.truncated', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useChannelTruncated = useChannelTruncated;
//# sourceMappingURL=useChannelTruncated.js.map