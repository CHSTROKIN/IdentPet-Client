var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserToStorable = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _excluded = ["banned", "created_at", "id", "last_active", "online", "role", "updated_at"];
var mapUserToStorable = function mapUserToStorable(user) {
  var banned = user.banned,
    created_at = user.created_at,
    id = user.id,
    last_active = user.last_active,
    online = user.online,
    role = user.role,
    updated_at = user.updated_at,
    extraData = (0, _objectWithoutProperties2["default"])(user, _excluded);
  return {
    banned: banned,
    createdAt: created_at,
    extraData: JSON.stringify(extraData || {}),
    id: id,
    lastActive: last_active,
    online: online,
    role: role,
    updatedAt: updated_at
  };
};
exports.mapUserToStorable = mapUserToStorable;
//# sourceMappingURL=mapUserToStorable.js.map