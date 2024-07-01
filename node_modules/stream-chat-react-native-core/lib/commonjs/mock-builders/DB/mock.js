var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sqliteMock = exports.db = void 0;
var _betterSqlite = _interopRequireDefault(require("better-sqlite3"));
var db;
exports.db = db;
var sqliteMock = {
  close: function close() {
    db.close();
    return {
      message: '',
      status: 0
    };
  },
  execute: function execute(dbName, queryInput, params) {
    var query = queryInput.trim().toLowerCase();
    var stmt = db.prepare(query);
    var result = [];
    if (query.indexOf('select') === 0) {
      if (params) {
        var modifiedParams = params.map(function (p) {
          if (typeof p == 'boolean') {
            return Number(p);
          } else {
            return p;
          }
        });
        result = stmt.all(modifiedParams);
      } else {
        result = stmt.all();
      }
      return {
        message: '',
        rows: {
          _array: result
        },
        status: 0
      };
    }
    if (query.indexOf('pragma') === 0) {
      var pragmaQueryTokens = query.split(' ');
      if (pragmaQueryTokens[2] === '=') {
        db.pragma("".concat(pragmaQueryTokens[1], " = ").concat(pragmaQueryTokens[3]));
      } else {
        result = db.pragma("".concat(pragmaQueryTokens[1]));
      }
      return {
        message: '',
        rows: {
          _array: result
        },
        status: 0
      };
    }
    if (params) {
      stmt.run(params);
    } else {
      stmt.run();
    }
    return {
      message: '',
      rows: {
        _array: result
      },
      status: 0
    };
  },
  executeBatch: function executeBatch(dbName, queriesArr) {
    queriesArr.forEach(function (queryAndParams) {
      var query = queryAndParams[0];
      var params = queryAndParams[1];
      var stmt = db.prepare(query);
      if (params) {
        var modifiedParams = params.map(function (p) {
          if (typeof p == 'boolean') {
            return Number(p);
          } else {
            return p;
          }
        });
        stmt.run(modifiedParams);
      } else {
        stmt.run();
      }
    });
    return {
      message: '',
      staus: 0
    };
  },
  open: function open() {
    exports.db = db = new _betterSqlite["default"]('foobar.db');
    return {
      message: '',
      status: 0
    };
  }
};
exports.sqliteMock = sqliteMock;
//# sourceMappingURL=mock.js.map