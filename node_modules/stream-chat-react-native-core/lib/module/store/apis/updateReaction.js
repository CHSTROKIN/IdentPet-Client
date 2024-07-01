Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReaction = void 0;
var _mapMessageToStorable2 = require("../mappers/mapMessageToStorable");
var _mapReactionToStorable = require("../mappers/mapReactionToStorable");
var _mapUserToStorable = require("../mappers/mapUserToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpdateQuery = require("../sqlite-utils/createUpdateQuery");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var updateReaction = function updateReaction(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    message = _ref.message,
    reaction = _ref.reaction;
  var queries = [];
  var storableUser;
  if (reaction.user) {
    storableUser = (0, _mapUserToStorable.mapUserToStorable)(reaction.user);
    queries.push((0, _createUpsertQuery.createUpsertQuery)('users', (0, _mapUserToStorable.mapUserToStorable)(reaction.user)));
  }
  var storableReaction = (0, _mapReactionToStorable.mapReactionToStorable)(reaction);
  queries.push((0, _createUpdateQuery.createUpdateQuery)('reactions', storableReaction, {
    messageId: reaction.message_id,
    userId: reaction.user_id
  }));
  var updatedReactionCounts;
  if (message.reaction_counts) {
    var _mapMessageToStorable = (0, _mapMessageToStorable2.mapMessageToStorable)(message),
      reactionCounts = _mapMessageToStorable.reactionCounts;
    updatedReactionCounts = reactionCounts;
    queries.push((0, _createUpdateQuery.createUpdateQuery)('messages', {
      reactionCounts: reactionCounts
    }, {
      id: message.id
    }));
  }
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'updateReaction', {
    addedUser: storableUser,
    flush: flush,
    updatedReaction: storableReaction,
    updatedReactionCounts: updatedReactionCounts
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
  }
  return queries;
};
exports.updateReaction = updateReaction;
//# sourceMappingURL=updateReaction.js.map