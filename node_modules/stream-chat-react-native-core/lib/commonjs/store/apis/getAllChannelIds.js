Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllChannelIds = void 0;
var _selectChannels = require("./queries/selectChannels");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getAllChannelIds = function getAllChannelIds() {
  var channels = (0, _selectChannels.selectChannels)();
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getAllChannelIds');
  return channels.map(function (c) {
    return c.cid;
  });
};
exports.getAllChannelIds = getAllChannelIds;
//# sourceMappingURL=getAllChannelIds.js.map