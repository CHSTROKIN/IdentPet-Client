Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client, member) {
  var channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    member: member,
    type: 'member.added'
  });
};
exports["default"] = _default;
//# sourceMappingURL=memberAdded.js.map