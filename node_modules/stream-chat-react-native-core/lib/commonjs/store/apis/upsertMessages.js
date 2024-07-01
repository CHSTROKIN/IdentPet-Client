var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertMessages = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _mapMessageToStorable = require("../mappers/mapMessageToStorable");
var _mapReactionToStorable = require("../mappers/mapReactionToStorable");
var _mapUserToStorable = require("../mappers/mapUserToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertMessages = function upsertMessages(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    messages = _ref.messages;
  var storableMessages = [];
  var storableUsers = [];
  var storableReactions = [];
  messages == null ? void 0 : messages.forEach(function (message) {
    storableMessages.push((0, _mapMessageToStorable.mapMessageToStorable)(message));
    if (message.user) {
      storableUsers.push((0, _mapUserToStorable.mapUserToStorable)(message.user));
    }
    [].concat((0, _toConsumableArray2["default"])(message.latest_reactions || []), (0, _toConsumableArray2["default"])(message.own_reactions || [])).forEach(function (r) {
      if (r.user) {
        storableUsers.push((0, _mapUserToStorable.mapUserToStorable)(r.user));
      }
      storableReactions.push((0, _mapReactionToStorable.mapReactionToStorable)(r));
    });
  });
  var finalQueries = [].concat((0, _toConsumableArray2["default"])(storableMessages.map(function (storableMessage) {
    return (0, _createUpsertQuery.createUpsertQuery)('messages', storableMessage);
  })), (0, _toConsumableArray2["default"])(storableUsers.map(function (storableUser) {
    return (0, _createUpsertQuery.createUpsertQuery)('users', storableUser);
  })), (0, _toConsumableArray2["default"])(storableReactions.map(function (storableReaction) {
    return (0, _createUpsertQuery.createUpsertQuery)('reactions', storableReaction);
  })));
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertMessages', {
    flush: flush,
    messages: storableMessages,
    reactions: storableReactions,
    users: storableUsers
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(finalQueries);
  }
  return finalQueries;
};
exports.upsertMessages = upsertMessages;
//# sourceMappingURL=upsertMessages.js.map