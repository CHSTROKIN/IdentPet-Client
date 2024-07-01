Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client, newMessage) {
  var channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  client.dispatchEvent({
    channel: channel,
    channel_id: channel.id,
    channel_type: channel.type,
    cid: channel.cid,
    message: newMessage,
    type: 'message.new'
  });
};
exports["default"] = _default;
//# sourceMappingURL=messageNew.js.map