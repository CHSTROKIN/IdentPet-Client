Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client) {
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var channel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  client.dispatchEvent({
    channel: channel,
    cid: channel.cid,
    type: 'typing.start',
    user: user,
    user_id: user.id
  });
};
exports["default"] = _default;
//# sourceMappingURL=typing.js.map