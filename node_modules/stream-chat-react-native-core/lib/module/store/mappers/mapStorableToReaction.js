Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToReaction = void 0;
var _mapStorableToUser = require("./mapStorableToUser");
var mapStorableToReaction = function mapStorableToReaction(reactionRow) {
  var createdAt = reactionRow.createdAt,
    extraData = reactionRow.extraData,
    messageId = reactionRow.messageId,
    score = reactionRow.score,
    type = reactionRow.type,
    updatedAt = reactionRow.updatedAt,
    user = reactionRow.user;
  return Object.assign({
    created_at: createdAt,
    message_id: messageId,
    score: score,
    type: type,
    updated_at: updatedAt,
    user: (0, _mapStorableToUser.mapStorableToUser)(user)
  }, extraData ? JSON.parse(extraData) : {});
};
exports.mapStorableToReaction = mapStorableToReaction;
//# sourceMappingURL=mapStorableToReaction.js.map