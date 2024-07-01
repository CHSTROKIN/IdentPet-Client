var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMessage = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _mapMessageToStorable = require("../mappers/mapMessageToStorable");
var _mapReactionToStorable = require("../mappers/mapReactionToStorable");
var _mapUserToStorable = require("../mappers/mapUserToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createDeleteQuery = require("../sqlite-utils/createDeleteQuery");
var _createSelectQuery = require("../sqlite-utils/createSelectQuery");
var _createUpdateQuery = require("../sqlite-utils/createUpdateQuery");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var updateMessage = function updateMessage(_ref) {
  var _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    message = _ref.message;
  var queries = [];
  var messages = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, (0, _createSelectQuery.createSelectQuery)('messages', ['*'], {
    id: message.id
  }));
  if (messages.length === 0) {
    return queries;
  }
  var storableMessage = (0, _mapMessageToStorable.mapMessageToStorable)(message);
  queries.push((0, _createUpdateQuery.createUpdateQuery)('messages', storableMessage, {
    id: message.id
  }));
  var storableUsers = [];
  if (message.user) {
    var storableUser = (0, _mapUserToStorable.mapUserToStorable)(message.user);
    storableUsers.push(storableUser);
    queries.push((0, _createUpsertQuery.createUpsertQuery)('users', storableUser));
  }
  queries.push((0, _createDeleteQuery.createDeleteQuery)('reactions', {
    messageId: message.id
  }));
  var latestReactions = message.latest_reactions || [];
  var ownReactions = message.own_reactions || [];
  var storableReactions = [];
  [].concat((0, _toConsumableArray2["default"])(latestReactions), (0, _toConsumableArray2["default"])(ownReactions)).forEach(function (r) {
    if (r.user) {
      var _storableUser = (0, _mapUserToStorable.mapUserToStorable)(r.user);
      storableUsers.push(_storableUser);
      queries.push((0, _createUpsertQuery.createUpsertQuery)('users', _storableUser));
    }
    var storableReaction = (0, _mapReactionToStorable.mapReactionToStorable)(r);
    storableReactions.push(storableReaction);
    queries.push((0, _createUpsertQuery.createUpsertQuery)('reactions', storableReaction));
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'updateMessage', {
    message: storableMessage,
    reactions: storableReactions,
    users: storableUsers
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
  }
  return queries;
};
exports.updateMessage = updateMessage;
//# sourceMappingURL=updateMessage.js.map