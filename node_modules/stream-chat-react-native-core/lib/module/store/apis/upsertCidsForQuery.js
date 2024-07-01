Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertCidsForQuery = void 0;
var _convertFilterSortToQuery = require("./utils/convertFilterSortToQuery");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
var upsertCidsForQuery = function upsertCidsForQuery(_ref) {
  var cids = _ref.cids,
    filters = _ref.filters,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    sort = _ref.sort;
  var cidsString = JSON.stringify(cids);
  var id = (0, _convertFilterSortToQuery.convertFilterSortToQuery)({
    filters: filters,
    sort: sort
  });
  var query = (0, _createUpsertQuery.createUpsertQuery)('channelQueries', {
    cids: cidsString,
    id: id
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertCidsForQuery', {
    cids: cidsString,
    flush: flush,
    id: id
  });
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSql.apply(null, query);
  }
  return [query];
};
exports.upsertCidsForQuery = upsertCidsForQuery;
//# sourceMappingURL=upsertCidsForQuery.js.map