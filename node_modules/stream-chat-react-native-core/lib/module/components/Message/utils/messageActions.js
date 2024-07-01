Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageActions = void 0;
var messageActions = function messageActions(_ref) {
  var blockUser = _ref.blockUser,
    copyMessage = _ref.copyMessage,
    deleteMessage = _ref.deleteMessage,
    editMessage = _ref.editMessage,
    error = _ref.error,
    flagMessage = _ref.flagMessage,
    isMyMessage = _ref.isMyMessage,
    isThreadMessage = _ref.isThreadMessage,
    message = _ref.message,
    messageReactions = _ref.messageReactions,
    ownCapabilities = _ref.ownCapabilities,
    pinMessage = _ref.pinMessage,
    quotedReply = _ref.quotedReply,
    retry = _ref.retry,
    threadReply = _ref.threadReply,
    unpinMessage = _ref.unpinMessage;
  if (messageReactions) {
    return undefined;
  }
  var actions = [];
  if (error && isMyMessage) {
    actions.push(retry);
  }
  if (ownCapabilities.quoteMessage && !isThreadMessage && !error) {
    actions.push(quotedReply);
  }
  if (ownCapabilities.sendReply && !isThreadMessage && !error) {
    actions.push(threadReply);
  }
  if (isMyMessage && ownCapabilities.updateOwnMessage || !isMyMessage && ownCapabilities.updateAnyMessage) {
    actions.push(editMessage);
  }
  if (copyMessage !== undefined && message.text && !error) {
    actions.push(copyMessage);
  }
  if (!isMyMessage && ownCapabilities.flagMessage) {
    actions.push(flagMessage);
  }
  if (ownCapabilities.pinMessage && !message.pinned) {
    actions.push(pinMessage);
  }
  if (ownCapabilities.pinMessage && message.pinned) {
    actions.push(unpinMessage);
  }
  if (!isMyMessage && ownCapabilities.banChannelMembers) {
    actions.push(blockUser);
  }
  if (isMyMessage && ownCapabilities.deleteOwnMessage || !isMyMessage && ownCapabilities.deleteAnyMessage) {
    actions.push(deleteMessage);
  }
  return actions;
};
exports.messageActions = messageActions;
//# sourceMappingURL=messageActions.js.map