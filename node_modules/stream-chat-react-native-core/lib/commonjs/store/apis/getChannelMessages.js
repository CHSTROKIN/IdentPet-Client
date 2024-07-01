Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelMessages = void 0;
var _selectMessagesForChannels = require("./queries/selectMessagesForChannels");
var _selectReactionsForMessages = require("./queries/selectReactionsForMessages");
var _utils = require("../../utils/utils");
var _mapStorableToMessage = require("../mappers/mapStorableToMessage");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getChannelMessages = function getChannelMessages(_ref) {
  var channelIds = _ref.channelIds,
    currentUserId = _ref.currentUserId;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getChannelMessages', {
    channelIds: channelIds,
    currentUserId: currentUserId
  });
  var messageRows = (0, _selectMessagesForChannels.selectMessagesForChannels)(channelIds);
  var messageIds = messageRows.map(function (_ref2) {
    var id = _ref2.id;
    return id;
  });
  var reactionRows = (0, _selectReactionsForMessages.selectReactionsForMessages)(messageIds);
  var messageIdVsReactions = {};
  reactionRows.forEach(function (reaction) {
    if (!messageIdVsReactions[reaction.messageId]) {
      messageIdVsReactions[reaction.messageId] = [];
    }
    messageIdVsReactions[reaction.messageId].push(reaction);
  });
  var cidVsMessages = {};
  messageRows.forEach(function (m) {
    if (!cidVsMessages[m.cid]) {
      cidVsMessages[m.cid] = [];
    }
    if (!(0, _utils.isBlockedMessage)(m)) {
      cidVsMessages[m.cid].push((0, _mapStorableToMessage.mapStorableToMessage)({
        currentUserId: currentUserId,
        messageRow: m,
        reactionRows: messageIdVsReactions[m.id]
      }));
    }
  });
  return cidVsMessages;
};
exports.getChannelMessages = getChannelMessages;
//# sourceMappingURL=getChannelMessages.js.map