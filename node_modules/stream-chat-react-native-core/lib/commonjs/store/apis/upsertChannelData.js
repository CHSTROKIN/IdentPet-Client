Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertChannelData = void 0;
var _mapChannelDataToStorable = require("../mappers/mapChannelDataToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertChannelData = function upsertChannelData(_ref) {
  var channel = _ref.channel,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush;
  var storableChannel = (0, _mapChannelDataToStorable.mapChannelDataToStorable)(channel);
  var query = (0, _createUpsertQuery.createUpsertQuery)('channels', storableChannel);
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertChannelData', {
    channel: storableChannel,
    flush: flush
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch([query]);
  }
  return [query];
};
exports.upsertChannelData = upsertChannelData;
//# sourceMappingURL=upsertChannelData.js.map