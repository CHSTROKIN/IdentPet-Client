var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendWhereClause = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var appendWhereClause = function appendWhereClause(selectQuery, whereCondition) {
  if (!whereCondition) return [selectQuery, []];
  var whereClause = [];
  var whereParams = [];
  for (var key in whereCondition) {
    var value = whereCondition[key];
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      var questionMarks = Array(Object.keys(value).length).fill('?').join(',');
      whereClause.push("".concat(key, " in (").concat(questionMarks, ")"));
      whereParams.push.apply(whereParams, (0, _toConsumableArray2["default"])(value));
    } else {
      whereClause.push("".concat(key, " = ?"));
      whereParams.push(value);
    }
  }
  if (!whereParams.length && !whereClause.length) {
    return [selectQuery, []];
  }
  return ["".concat(selectQuery, " WHERE ").concat(whereClause.join(' AND ')), whereParams];
};
exports.appendWhereClause = appendWhereClause;
//# sourceMappingURL=appendWhereCluase.js.map