Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToRead = void 0;
var _mapStorableToUser = require("./mapStorableToUser");
var mapStorableToRead = function mapStorableToRead(row) {
  var lastRead = row.lastRead,
    unreadMessages = row.unreadMessages,
    user = row.user;
  return {
    last_read: lastRead,
    unread_messages: unreadMessages,
    user: (0, _mapStorableToUser.mapStorableToUser)(user)
  };
};
exports.mapStorableToRead = mapStorableToRead;
//# sourceMappingURL=mapStorableToRead.js.map