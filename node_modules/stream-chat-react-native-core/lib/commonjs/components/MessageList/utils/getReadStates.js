var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof3 = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReadStates = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof3(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != (0, _typeof2["default"])(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != (0, _typeof2["default"])(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getReadStates = function getReadStates(clientUserId, messages, read) {
  var readData = messages.reduce(function (acc, cur) {
    if (cur.id) {
      acc[cur.id] = false;
    }
    return acc;
  }, {});
  var filteredMessagesReversed = messages.filter(function (msg) {
    return msg.updated_at;
  }).reverse();
  if (read) {
    var _ignore = read[clientUserId != null ? clientUserId : ''],
      filteredRead = (0, _objectWithoutProperties2["default"])(read, [clientUserId != null ? clientUserId : ''].map(_toPropertyKey));
    var members = Object.values(filteredRead);
    var memberReadCount = 0;
    var _iterator = _createForOfIteratorHelper(filteredMessagesReversed),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var message = _step.value;
        if (!members.length) {
          readData[message.id] = memberReadCount || true;
        } else {
          var _loop = function _loop(member) {
            if (!member.last_read) {
              return "continue";
            }
            if (message.created_at < member.last_read) {
              var numberOfReads = Object.keys(read).length;
              if (numberOfReads === 1) {
                readData[message.id] = true;
              } else {
                var currentMessageReadData = readData[message.id];
                readData[message.id] = typeof currentMessageReadData === 'boolean' ? memberReadCount + 1 : currentMessageReadData + 1;
              }
              var userIndex = members.findIndex(function (_ref) {
                var _member$user;
                var user = _ref.user;
                return user.id === ((_member$user = member.user) == null ? void 0 : _member$user.id);
              });
              if (userIndex !== -1) {
                members.splice(userIndex, 1);
                if (numberOfReads > 1) {
                  memberReadCount += 1;
                }
              }
            }
          };
          var _iterator2 = _createForOfIteratorHelper(members),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var member = _step2.value;
              var _ret = _loop(member);
              if (_ret === "continue") continue;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (readData[message.id] === false) {
            readData[message.id] = memberReadCount || false;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return readData;
};
exports.getReadStates = getReadStates;
//# sourceMappingURL=getReadStates.js.map