Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStorableToTask = void 0;
var mapStorableToTask = function mapStorableToTask(row) {
  var channelId = row.channelId,
    channelType = row.channelType,
    id = row.id,
    messageId = row.messageId,
    type = row.type;
  return {
    channelId: channelId,
    channelType: channelType,
    id: id,
    messageId: messageId,
    payload: JSON.parse(row.payload),
    type: type
  };
};
exports.mapStorableToTask = mapStorableToTask;
//# sourceMappingURL=mapStorableToTask.js.map