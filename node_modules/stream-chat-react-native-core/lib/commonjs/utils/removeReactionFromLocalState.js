Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeReactionFromLocalState = void 0;
var _deleteReaction = require("../store/apis/deleteReaction");
var removeReactionFromLocalState = function removeReactionFromLocalState(_ref) {
  var _message$own_reaction, _message$latest_react, _message$reaction_cou, _message$reaction_cou2;
  var channel = _ref.channel,
    messageId = _ref.messageId,
    reactionType = _ref.reactionType,
    user = _ref.user;
  var message = channel.state.messages.find(function (_ref2) {
    var id = _ref2.id;
    return id === messageId;
  });
  if (!message || !(channel != null && channel.id) || !(user != null && user.id)) return;
  message.own_reactions = (_message$own_reaction = message.own_reactions) == null ? void 0 : _message$own_reaction.filter(function (reaction) {
    return reaction.type !== reactionType;
  });
  message.latest_reactions = (_message$latest_react = message.latest_reactions) == null ? void 0 : _message$latest_react.filter(function (r) {
    return !(r.user_id === (user == null ? void 0 : user.id) && r.type === reactionType);
  });
  if ((_message$reaction_cou = message.reaction_counts) != null && _message$reaction_cou[reactionType] && ((_message$reaction_cou2 = message.reaction_counts) == null ? void 0 : _message$reaction_cou2[reactionType]) > 0) {
    message.reaction_counts[reactionType] = message.reaction_counts[reactionType] - 1;
  }
  (0, _deleteReaction.deleteReaction)({
    messageId: messageId,
    reactionType: reactionType,
    userId: user.id
  });
};
exports.removeReactionFromLocalState = removeReactionFromLocalState;
//# sourceMappingURL=removeReactionFromLocalState.js.map