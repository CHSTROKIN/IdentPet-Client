Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeReservedFields = void 0;
var removeReservedFields = function removeReservedFields(message) {
  var retryMessage = Object.assign({}, message);
  var reserved = ['cid', 'config', 'created_at', 'created_by', 'deleted_at', 'i18n', 'latest_reactions', 'own_reactions', 'reaction_counts', 'last_message_at', 'member_count', 'type', 'updated_at', 'reply_count'];
  reserved.forEach(function (key) {
    delete retryMessage[key];
  });
  return retryMessage;
};
exports.removeReservedFields = removeReservedFields;
//# sourceMappingURL=removeReservedFields.js.map