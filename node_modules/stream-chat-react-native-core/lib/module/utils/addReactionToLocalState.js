var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addReactionToLocalState = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _apis = require("../store/apis");
var _insertReaction = require("../store/apis/insertReaction");
var addReactionToLocalState = function addReactionToLocalState(_ref) {
  var channel = _ref.channel,
    enforceUniqueReaction = _ref.enforceUniqueReaction,
    messageId = _ref.messageId,
    reactionType = _ref.reactionType,
    user = _ref.user;
  var message = channel.state.messages.find(function (_ref2) {
    var id = _ref2.id;
    return id === messageId;
  });
  if (!message) return;
  var reaction = {
    created_at: new Date().toISOString(),
    message_id: messageId,
    type: reactionType,
    updated_at: new Date().toISOString(),
    user: user,
    user_id: user == null ? void 0 : user.id
  };
  var hasOwnReaction = message.own_reactions && message.own_reactions.length > 0;
  if (!message.own_reactions) {
    message.own_reactions = [];
  }
  if (!message.latest_reactions) {
    message.latest_reactions = [];
  }
  if (enforceUniqueReaction) {
    var currentReaction = message.own_reactions[0];
    message.own_reactions = [];
    if (!message.latest_reactions) {
      message.latest_reactions = [];
    }
    message.latest_reactions = message.latest_reactions.filter(function (r) {
      return r.user_id !== user.id;
    });
    if (currentReaction && message.reaction_counts && message.reaction_counts[currentReaction.type] && message.reaction_counts[currentReaction.type] > 0) {
      message.reaction_counts[currentReaction.type] = message.reaction_counts[currentReaction.type] - 1;
    }
    if (!message.reaction_counts) {
      message.reaction_counts = (0, _defineProperty2["default"])({}, reactionType, 1);
    } else {
      var _message$reaction_cou2;
      message.reaction_counts[reactionType] = (((_message$reaction_cou2 = message.reaction_counts) == null ? void 0 : _message$reaction_cou2[reactionType]) || 0) + 1;
    }
  } else {
    if (!message.reaction_counts) {
      message.reaction_counts = (0, _defineProperty2["default"])({}, reactionType, 1);
    } else {
      var _message$reaction_cou4;
      message.reaction_counts[reactionType] = (((_message$reaction_cou4 = message.reaction_counts) == null ? void 0 : _message$reaction_cou4[reactionType]) || 0) + 1;
    }
  }
  message.own_reactions = [].concat((0, _toConsumableArray2["default"])(message.own_reactions), [reaction]);
  message.latest_reactions = [].concat((0, _toConsumableArray2["default"])(message.latest_reactions), [reaction]);
  if (enforceUniqueReaction && hasOwnReaction) {
    (0, _apis.updateReaction)({
      message: message,
      reaction: reaction
    });
  } else {
    (0, _insertReaction.insertReaction)({
      reaction: reaction
    });
  }
};
exports.addReactionToLocalState = addReactionToLocalState;
//# sourceMappingURL=addReactionToLocalState.js.map