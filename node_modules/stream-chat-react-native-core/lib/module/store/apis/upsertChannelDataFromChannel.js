Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertChannelDataFromChannel = void 0;
var _mapChannelToStorable = require("../mappers/mapChannelToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertChannelDataFromChannel = function upsertChannelDataFromChannel(_ref) {
  var channel = _ref.channel,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush;
  var storableChannel = (0, _mapChannelToStorable.mapChannelToStorable)(channel);
  if (!storableChannel) return;
  var query = (0, _createUpsertQuery.createUpsertQuery)('channels', storableChannel);
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch([query]);
  }
  return [query];
};
exports.upsertChannelDataFromChannel = upsertChannelDataFromChannel;
//# sourceMappingURL=upsertChannelDataFromChannel.js.map