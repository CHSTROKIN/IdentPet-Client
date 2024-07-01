var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapMessageToStorable = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var _excluded = ["attachments", "cid", "created_at", "deleted_at", "id", "latest_reactions", "own_reactions", "reaction_counts", "text", "type", "updated_at", "user"];
var mapMessageToStorable = function mapMessageToStorable(message) {
  var attachments = message.attachments,
    cid = message.cid,
    created_at = message.created_at,
    deleted_at = message.deleted_at,
    id = message.id,
    latest_reactions = message.latest_reactions,
    own_reactions = message.own_reactions,
    reaction_counts = message.reaction_counts,
    text = message.text,
    type = message.type,
    updated_at = message.updated_at,
    user = message.user,
    extraData = (0, _objectWithoutProperties2["default"])(message, _excluded);
  return {
    attachments: JSON.stringify(attachments),
    cid: cid || '',
    createdAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(created_at),
    deletedAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(deleted_at),
    extraData: JSON.stringify(extraData),
    id: id,
    reactionCounts: JSON.stringify(reaction_counts),
    text: text,
    type: type,
    updatedAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(updated_at),
    userId: user == null ? void 0 : user.id
  };
};
exports.mapMessageToStorable = mapMessageToStorable;
//# sourceMappingURL=mapMessageToStorable.js.map