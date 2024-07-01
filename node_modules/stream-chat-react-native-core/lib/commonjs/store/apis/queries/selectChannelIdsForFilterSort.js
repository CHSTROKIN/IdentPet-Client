Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectChannelIdsForFilterSort = void 0;
var _QuickSqliteClient = require("../../QuickSqliteClient");
var _createSelectQuery = require("../../sqlite-utils/createSelectQuery");
var _convertFilterSortToQuery = require("../utils/convertFilterSortToQuery");
var selectChannelIdsForFilterSort = function selectChannelIdsForFilterSort(_ref) {
  var _results$;
  var filters = _ref.filters,
    sort = _ref.sort;
  var query = (0, _convertFilterSortToQuery.convertFilterSortToQuery)({
    filters: filters,
    sort: sort
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'selectChannelIdsForFilterSort', {
    query: query
  });
  var results = _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, (0, _createSelectQuery.createSelectQuery)('channelQueries', ['*'], {
    id: query
  }));
  var channelIdsStr = results == null ? void 0 : (_results$ = results[0]) == null ? void 0 : _results$.cids;
  return channelIdsStr ? JSON.parse(channelIdsStr) : null;
};
exports.selectChannelIdsForFilterSort = selectChannelIdsForFilterSort;
//# sourceMappingURL=selectChannelIdsForFilterSort.js.map