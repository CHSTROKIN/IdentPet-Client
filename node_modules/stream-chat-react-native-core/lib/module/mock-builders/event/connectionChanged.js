Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function _default(client) {
  var online = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  client.dispatchEvent({
    online: online,
    type: 'connection.changed'
  });
};
exports["default"] = _default;
//# sourceMappingURL=connectionChanged.js.map