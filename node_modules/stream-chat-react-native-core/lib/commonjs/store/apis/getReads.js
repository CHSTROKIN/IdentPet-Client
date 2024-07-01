Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReads = void 0;
var _selectReadsForChannels = require("./queries/selectReadsForChannels");
var _mapStorableToRead = require("../mappers/mapStorableToRead");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getReads = function getReads(_ref) {
  var channelIds = _ref.channelIds;
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getReads', {
    channelIds: channelIds
  });
  var reads = (0, _selectReadsForChannels.selectReadsForChannels)(channelIds);
  var cidVsReads = {};
  reads.forEach(function (read) {
    if (!cidVsReads[read.cid]) {
      cidVsReads[read.cid] = [];
    }
    cidVsReads[read.cid].push((0, _mapStorableToRead.mapStorableToRead)(read));
  });
  return cidVsReads;
};
exports.getReads = getReads;
//# sourceMappingURL=getReads.js.map