Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendOrderByClause = void 0;
var appendOrderByClause = function appendOrderByClause(selectQuery, orderBy) {
  if (!orderBy) return [selectQuery, []];
  var orderByClause = [];
  for (var key in orderBy) {
    var order = orderBy[key];
    if (order === undefined) continue;
    orderByClause.push("".concat(key, " ").concat(order === 1 ? 'ASC' : 'DESC'));
  }
  if (!orderByClause.length) {
    return [selectQuery, []];
  }
  return ["".concat(selectQuery, " ORDER BY ").concat(orderByClause.join(', '))];
};
exports.appendOrderByClause = appendOrderByClause;
//# sourceMappingURL=appendOrderByClause.js.map