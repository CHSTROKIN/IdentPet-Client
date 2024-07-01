Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToUser = void 0;
var mapStorableToUser = function mapStorableToUser(userRow) {
  var banned = userRow.banned,
    createdAt = userRow.createdAt,
    extraData = userRow.extraData,
    id = userRow.id,
    lastActive = userRow.lastActive,
    online = userRow.online,
    role = userRow.role,
    updatedAt = userRow.updatedAt;
  return Object.assign({
    banned: Boolean(banned),
    created_at: createdAt,
    id: id,
    last_active: lastActive,
    online: Boolean(online),
    role: role,
    updated_at: updatedAt
  }, extraData ? JSON.parse(extraData) : {});
};
exports.mapStorableToUser = mapStorableToUser;
//# sourceMappingURL=mapStorableToUser.js.map