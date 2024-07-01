Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReadToStorable = void 0;
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var mapReadToStorable = function mapReadToStorable(_ref) {
  var cid = _ref.cid,
    read = _ref.read;
  var last_read = read.last_read,
    unread_messages = read.unread_messages,
    user = read.user;
  return {
    cid: cid,
    lastRead: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(last_read),
    unreadMessages: unread_messages,
    userId: user == null ? void 0 : user.id
  };
};
exports.mapReadToStorable = mapReadToStorable;
//# sourceMappingURL=mapReadToStorable.js.map