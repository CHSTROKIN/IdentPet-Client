Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDeleteQuery = void 0;
var _appendWhereCluase = require("./appendWhereCluase");
var createDeleteQuery = function createDeleteQuery(table, whereCondition) {
  var deleteQuery = "DELETE FROM ".concat(table);
  return (0, _appendWhereCluase.appendWhereClause)(deleteQuery, whereCondition);
};
exports.createDeleteQuery = createDeleteQuery;
//# sourceMappingURL=createDeleteQuery.js.map