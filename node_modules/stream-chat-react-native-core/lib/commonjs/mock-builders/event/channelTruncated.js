Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client) {
  var channel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    type: 'channel.truncated'
  });
};
exports["default"] = _default;
//# sourceMappingURL=channelTruncated.js.map