var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUpdateQuery = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _appendWhereCluase = require("./appendWhereCluase");
var createUpdateQuery = function createUpdateQuery(table, set, whereCondition) {
  var fields = Object.keys(set).map(function (key) {
    return "".concat(key, " = ?");
  });
  var updateQuery = "UPDATE OR IGNORE ".concat(table, " SET ").concat(fields.join(','));
  var _appendWhereClause = (0, _appendWhereCluase.appendWhereClause)(updateQuery, whereCondition),
    _appendWhereClause2 = (0, _slicedToArray2["default"])(_appendWhereClause, 2),
    updateQueryWithWhere = _appendWhereClause2[0],
    whereParams = _appendWhereClause2[1];
  return ["".concat(updateQueryWithWhere), [].concat((0, _toConsumableArray2["default"])(Object.values(set)), (0, _toConsumableArray2["default"])(whereParams || []))];
};
exports.createUpdateQuery = createUpdateQuery;
//# sourceMappingURL=createUpdateQuery.js.map