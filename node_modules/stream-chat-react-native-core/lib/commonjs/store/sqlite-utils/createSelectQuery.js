var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSelectQuery = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _appendOrderByClause3 = require("./appendOrderByClause");
var _appendWhereCluase = require("./appendWhereCluase");
var createSelectQuery = function createSelectQuery(table) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['*'];
  var whereCondition = arguments.length > 2 ? arguments[2] : undefined;
  var orderBy = arguments.length > 3 ? arguments[3] : undefined;
  var selectQuery = "SELECT ".concat(fields.join(', '), " FROM ").concat(table);
  var _appendWhereClause = (0, _appendWhereCluase.appendWhereClause)(selectQuery, whereCondition),
    _appendWhereClause2 = (0, _slicedToArray2["default"])(_appendWhereClause, 2),
    selectQueryWithWhere = _appendWhereClause2[0],
    whereParams = _appendWhereClause2[1];
  var _appendOrderByClause = (0, _appendOrderByClause3.appendOrderByClause)(selectQueryWithWhere, orderBy),
    _appendOrderByClause2 = (0, _slicedToArray2["default"])(_appendOrderByClause, 1),
    selectQueryWithOrderBy = _appendOrderByClause2[0];
  return ["".concat(selectQueryWithOrderBy), whereParams || []];
};
exports.createSelectQuery = createSelectQuery;
//# sourceMappingURL=createSelectQuery.js.map