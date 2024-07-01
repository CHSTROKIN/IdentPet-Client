Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client, user) {
  var channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var event = {
    channel: channel,
    cid: channel.cid,
    received_at: new Date(),
    type: 'message.read',
    user: user
  };
  client.dispatchEvent(event);
  return event;
};
exports["default"] = _default;
//# sourceMappingURL=messageRead.js.map