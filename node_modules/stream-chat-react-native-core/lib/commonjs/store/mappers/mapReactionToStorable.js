var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReactionToStorable = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _mapDateTimeToStorable = require("./mapDateTimeToStorable");
var _excluded = ["created_at", "message_id", "score", "type", "updated_at", "user"];
var mapReactionToStorable = function mapReactionToStorable(reaction) {
  var created_at = reaction.created_at,
    message_id = reaction.message_id,
    score = reaction.score,
    type = reaction.type,
    updated_at = reaction.updated_at,
    user = reaction.user,
    extraData = (0, _objectWithoutProperties2["default"])(reaction, _excluded);
  return {
    createdAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(created_at),
    extraData: JSON.stringify(extraData),
    messageId: message_id,
    score: score,
    type: type || '',
    updatedAt: (0, _mapDateTimeToStorable.mapDateTimeToStorable)(updated_at),
    userId: user == null ? void 0 : user.id
  };
};
exports.mapReactionToStorable = mapReactionToStorable;
//# sourceMappingURL=mapReactionToStorable.js.map