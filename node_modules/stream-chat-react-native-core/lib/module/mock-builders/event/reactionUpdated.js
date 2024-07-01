Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client, reaction, message) {
  var channel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    message: message,
    reaction: reaction,
    type: 'reaction.updated'
  });
};
exports["default"] = _default;
//# sourceMappingURL=reactionUpdated.js.map