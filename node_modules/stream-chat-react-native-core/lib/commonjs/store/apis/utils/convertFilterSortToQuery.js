Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertFilterSortToQuery = void 0;
var convertFilterSortToQuery = function convertFilterSortToQuery(_ref) {
  var filters = _ref.filters,
    sort = _ref.sort;
  return JSON.stringify("".concat(filters ? JSON.stringify(filters) : '', "-").concat(sort ? JSON.stringify(sort) : ''));
};
exports.convertFilterSortToQuery = convertFilterSortToQuery;
//# sourceMappingURL=convertFilterSortToQuery.js.map