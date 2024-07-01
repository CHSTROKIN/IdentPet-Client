Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateSeparators = void 0;
var getDateSeparators = function getDateSeparators(params) {
  var deletedMessagesVisibilityType = params.deletedMessagesVisibilityType,
    hideDateSeparators = params.hideDateSeparators,
    messages = params.messages,
    userId = params.userId;
  var dateSeparators = {};
  if (hideDateSeparators) {
    return dateSeparators;
  }
  var messagesWithoutDeleted = messages.filter(function (message) {
    var _message$user;
    var isMessageTypeDeleted = message.type === 'deleted';
    var isDeletedMessageVisibleToSender = deletedMessagesVisibilityType === 'sender' || deletedMessagesVisibilityType === 'always';
    return !isMessageTypeDeleted || userId === ((_message$user = message.user) == null ? void 0 : _message$user.id) && isDeletedMessageVisibleToSender;
  });
  for (var i = 0; i < messagesWithoutDeleted.length; i++) {
    var previousMessage = messagesWithoutDeleted[i - 1];
    var message = messagesWithoutDeleted[i];
    var messageDate = message.created_at.toDateString();
    var prevMessageDate = previousMessage ? previousMessage.created_at.toDateString() : messageDate;
    if (i === 0 || messageDate !== prevMessageDate) {
      dateSeparators[message.id] = message.created_at;
    }
  }
  return dateSeparators;
};
exports.getDateSeparators = getDateSeparators;
//# sourceMappingURL=getDateSeparators.js.map