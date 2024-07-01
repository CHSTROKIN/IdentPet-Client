Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChannelsForFilterSort = void 0;
var _getChannels = require("./getChannels");
var _selectChannelIdsForFilterSort = require("./queries/selectChannelIdsForFilterSort");
var _QuickSqliteClient = require("../QuickSqliteClient");
var getChannelsForFilterSort = function getChannelsForFilterSort(_ref) {
  var currentUserId = _ref.currentUserId,
    filters = _ref.filters,
    sort = _ref.sort;
  if (!filters && !sort) {
    console.warn('Please provide the query (filters/sort) to fetch channels from DB');
    return null;
  }
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'getChannelsForFilterSort', {
    filters: filters,
    sort: sort
  });
  var channelIds = (0, _selectChannelIdsForFilterSort.selectChannelIdsForFilterSort)({
    filters: filters,
    sort: sort
  });
  if (!channelIds) return null;
  if (channelIds.length === 0) {
    return [];
  }
  return (0, _getChannels.getChannels)({
    channelIds: channelIds,
    currentUserId: currentUserId
  });
};
exports.getChannelsForFilterSort = getChannelsForFilterSort;
//# sourceMappingURL=getChannelsForFilterSort.js.map