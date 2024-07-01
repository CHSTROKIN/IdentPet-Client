Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client) {
  var mutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  client.dispatchEvent({
    created_at: '2020-05-26T07:11:57.968294216Z',
    me: Object.assign({}, client.user, {
      channel_mutes: [],
      mutes: mutes
    }),
    type: 'notification.mutes_updated'
  });
};
exports["default"] = _default;
//# sourceMappingURL=notificationMutesUpdated.js.map