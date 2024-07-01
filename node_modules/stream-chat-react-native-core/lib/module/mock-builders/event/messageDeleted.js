Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client, message) {
  var channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    message: message,
    type: 'message.deleted'
  });
};
exports["default"] = _default;
//# sourceMappingURL=messageDeleted.js.map