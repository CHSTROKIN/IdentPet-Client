var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DBSyncManager = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _handleEventToSyncDB = require("../components/Chat/hooks/handleEventToSyncDB");
var _apis = require("../store/apis");
var _addPendingTask = require("../store/apis/addPendingTask");
var _deletePendingTask = require("../store/apis/deletePendingTask");
var _getPendingTasks = require("../store/apis/getPendingTasks");
var _QuickSqliteClient = require("../store/QuickSqliteClient");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var restBeforeNextTask = function restBeforeNextTask() {
  return new Promise(function (resolve) {
    return setTimeout(resolve, 500);
  });
};
var DBSyncManager = (0, _createClass2["default"])(function DBSyncManager() {
  (0, _classCallCheck2["default"])(this, DBSyncManager);
});
exports.DBSyncManager = DBSyncManager;
DBSyncManager.syncStatus = false;
DBSyncManager.listeners = [];
DBSyncManager.client = null;
DBSyncManager.getSyncStatus = function () {
  return DBSyncManager.syncStatus;
};
DBSyncManager.init = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee2(client) {
    var _client$user, _client$wsConnection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          DBSyncManager.client = client;
          if (!((_client$user = client.user) != null && _client$user.id && (_client$wsConnection = client.wsConnection) != null && _client$wsConnection.isHealthy)) {
            _context2.next = 6;
            break;
          }
          _context2.next = 4;
          return DBSyncManager.syncAndExecutePendingTasks();
        case 4:
          DBSyncManager.syncStatus = true;
          DBSyncManager.listeners.forEach(function (l) {
            return l(true);
          });
        case 6:
          DBSyncManager.client.on('connection.changed', function () {
            var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(event) {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!event.online) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 3;
                    return DBSyncManager.syncAndExecutePendingTasks();
                  case 3:
                    DBSyncManager.syncStatus = true;
                    DBSyncManager.listeners.forEach(function (l) {
                      return l(true);
                    });
                    _context.next = 9;
                    break;
                  case 7:
                    DBSyncManager.syncStatus = false;
                    DBSyncManager.listeners.forEach(function (l) {
                      return l(false);
                    });
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
DBSyncManager.onSyncStatusChange = function (listener) {
  DBSyncManager.listeners.push(listener);
  return {
    unsubscribe: function unsubscribe() {
      DBSyncManager.listeners = DBSyncManager.listeners.filter(function (el) {
        return el !== listener;
      });
    }
  };
};
DBSyncManager.sync = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee3(client) {
    var _DBSyncManager$client;
    var cids, lastSyncedAt, lastSyncedAtDate, lastSyncedAtDayJs, nowDayJs, diff, result, queries;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if ((_DBSyncManager$client = DBSyncManager.client) != null && _DBSyncManager$client.user) {
            _context3.next = 2;
            break;
          }
          return _context3.abrupt("return");
        case 2:
          cids = (0, _apis.getAllChannelIds)();
          if (!(cids.length === 0)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return");
        case 5:
          lastSyncedAt = (0, _apis.getLastSyncedAt)({
            currentUserId: DBSyncManager.client.user.id
          });
          if (!lastSyncedAt) {
            _context3.next = 26;
            break;
          }
          lastSyncedAtDate = new Date(lastSyncedAt);
          lastSyncedAtDayJs = (0, _dayjs["default"])(lastSyncedAtDate);
          nowDayJs = (0, _dayjs["default"])();
          diff = nowDayJs.diff(lastSyncedAtDayJs, 'days');
          if (!(diff > 30)) {
            _context3.next = 15;
            break;
          }
          _QuickSqliteClient.QuickSqliteClient.resetDB();
          _context3.next = 26;
          break;
        case 15:
          _context3.prev = 15;
          _context3.next = 18;
          return DBSyncManager.client.sync(cids, lastSyncedAtDate.toISOString());
        case 18:
          result = _context3.sent;
          queries = result.events.reduce(function (queries, event) {
            queries = queries.concat((0, _handleEventToSyncDB.handleEventToSyncDB)(event, client, false));
            return queries;
          }, []);
          if (queries.length) {
            _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
          }
          _context3.next = 26;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](15);
          _QuickSqliteClient.QuickSqliteClient.resetDB();
        case 26:
          (0, _apis.upsertUserSyncStatus)({
            currentUserId: DBSyncManager.client.user.id,
            lastSyncedAt: new Date().toString()
          });
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[15, 23]]);
  }));
  return function (_x3) {
    return _ref3.apply(this, arguments);
  };
}();
DBSyncManager.syncAndExecutePendingTasks = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee4() {
  return _regenerator["default"].wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        if (DBSyncManager.client) {
          _context4.next = 2;
          break;
        }
        return _context4.abrupt("return");
      case 2:
        _context4.next = 4;
        return DBSyncManager.executePendingTasks(DBSyncManager.client);
      case 4:
        _context4.next = 6;
        return DBSyncManager.sync(DBSyncManager.client);
      case 6:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
}));
DBSyncManager.queueTask = function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee5(_ref5) {
    var client, task, removeFromApi, response, _response, _response$data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          client = _ref5.client, task = _ref5.task;
          removeFromApi = (0, _addPendingTask.addPendingTask)(task);
          _context5.prev = 2;
          _context5.next = 5;
          return DBSyncManager.executeTask({
            client: client,
            task: task
          });
        case 5:
          response = _context5.sent;
          _context5.next = 14;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](2);
          if (!((_context5.t0 == null ? void 0 : (_response = _context5.t0.response) == null ? void 0 : (_response$data = _response.data) == null ? void 0 : _response$data.code) === 4)) {
            _context5.next = 13;
            break;
          }
          _context5.next = 14;
          break;
        case 13:
          throw _context5.t0;
        case 14:
          removeFromApi();
          return _context5.abrupt("return", response);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 8]]);
  }));
  return function (_x4) {
    return _ref6.apply(this, arguments);
  };
}();
DBSyncManager.executeTask = function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee6(_ref7) {
    var client, task, channel;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          client = _ref7.client, task = _ref7.task;
          channel = client.channel(task.channelType, task.channelId);
          if (!(task.type === 'send-reaction')) {
            _context6.next = 6;
            break;
          }
          _context6.next = 5;
          return channel.sendReaction.apply(channel, (0, _toConsumableArray2["default"])(task.payload));
        case 5:
          return _context6.abrupt("return", _context6.sent);
        case 6:
          if (!(task.type === 'delete-reaction')) {
            _context6.next = 10;
            break;
          }
          _context6.next = 9;
          return channel.deleteReaction.apply(channel, (0, _toConsumableArray2["default"])(task.payload));
        case 9:
          return _context6.abrupt("return", _context6.sent);
        case 10:
          if (!(task.type === 'delete-message')) {
            _context6.next = 14;
            break;
          }
          _context6.next = 13;
          return client.deleteMessage.apply(client, (0, _toConsumableArray2["default"])(task.payload));
        case 13:
          return _context6.abrupt("return", _context6.sent);
        case 14:
          throw new Error('Invalid task type');
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x5) {
    return _ref8.apply(this, arguments);
  };
}();
DBSyncManager.executePendingTasks = function () {
  var _ref9 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee7(client) {
    var queue, _iterator, _step, task, _response2, _response2$data;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          queue = (0, _getPendingTasks.getPendingTasks)();
          _iterator = _createForOfIteratorHelper(queue);
          _context7.prev = 2;
          _iterator.s();
        case 4:
          if ((_step = _iterator.n()).done) {
            _context7.next = 24;
            break;
          }
          task = _step.value;
          if (task.id) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("continue", 22);
        case 8:
          _context7.prev = 8;
          _context7.next = 11;
          return DBSyncManager.executeTask({
            client: client,
            task: task
          });
        case 11:
          _context7.next = 19;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](8);
          if (!((_context7.t0 == null ? void 0 : (_response2 = _context7.t0.response) == null ? void 0 : (_response2$data = _response2.data) == null ? void 0 : _response2$data.code) === 4)) {
            _context7.next = 18;
            break;
          }
          _context7.next = 19;
          break;
        case 18:
          throw _context7.t0;
        case 19:
          (0, _deletePendingTask.deletePendingTask)({
            id: task.id
          });
          _context7.next = 22;
          return restBeforeNextTask();
        case 22:
          _context7.next = 4;
          break;
        case 24:
          _context7.next = 29;
          break;
        case 26:
          _context7.prev = 26;
          _context7.t1 = _context7["catch"](2);
          _iterator.e(_context7.t1);
        case 29:
          _context7.prev = 29;
          _iterator.f();
          return _context7.finish(29);
        case 32:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 26, 29, 32], [8, 13]]);
  }));
  return function (_x6) {
    return _ref9.apply(this, arguments);
  };
}();
DBSyncManager.dropPendingTasks = function (conditions) {
  var tasks = (0, _getPendingTasks.getPendingTasks)(conditions);
  var _iterator2 = _createForOfIteratorHelper(tasks),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var task = _step2.value;
      if (!task.id) continue;
      (0, _deletePendingTask.deletePendingTask)({
        id: task.id
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
//# sourceMappingURL=DBSyncManager.js.map