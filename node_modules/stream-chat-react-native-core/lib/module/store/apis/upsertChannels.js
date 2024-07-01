Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upsertChannels = void 0;
var _upsertCidsForQuery = require("./upsertCidsForQuery");
var _upsertMembers = require("./upsertMembers");
var _upsertMessages = require("./upsertMessages");
var _upsertReads = require("./upsertReads");
var _mapChannelDataToStorable = require("../mappers/mapChannelDataToStorable");
var _QuickSqliteClient = require("../QuickSqliteClient");
var _createUpsertQuery = require("../sqlite-utils/createUpsertQuery");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var upsertChannels = function upsertChannels(_ref) {
  var channels = _ref.channels,
    filters = _ref.filters,
    _ref$flush = _ref.flush,
    flush = _ref$flush === void 0 ? true : _ref$flush,
    isLatestMessagesSet = _ref.isLatestMessagesSet,
    sort = _ref.sort;
  var queries = [];
  var channelIds = channels.map(function (channel) {
    return channel.channel.cid;
  });
  _QuickSqliteClient.QuickSqliteClient.logger == null ? void 0 : _QuickSqliteClient.QuickSqliteClient.logger('info', 'upsertChannels', {
    channelIds: channelIds
  });
  if (filters || sort) {
    queries = queries.concat((0, _upsertCidsForQuery.upsertCidsForQuery)({
      cids: channelIds,
      filters: filters,
      flush: false,
      sort: sort
    }));
  }
  var _iterator = _createForOfIteratorHelper(channels),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var channel = _step.value;
      queries.push((0, _createUpsertQuery.createUpsertQuery)('channels', (0, _mapChannelDataToStorable.mapChannelDataToStorable)(channel.channel)));
      var members = channel.members,
        messages = channel.messages,
        read = channel.read;
      queries = queries.concat((0, _upsertMembers.upsertMembers)({
        cid: channel.channel.cid,
        flush: false,
        members: members
      }));
      if (read) {
        queries = queries.concat((0, _upsertReads.upsertReads)({
          cid: channel.channel.cid,
          flush: false,
          reads: read
        }));
      }
      if (isLatestMessagesSet) {
        queries = queries.concat((0, _upsertMessages.upsertMessages)({
          flush: false,
          messages: messages
        }));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (flush) {
    _QuickSqliteClient.QuickSqliteClient.executeSqlBatch(queries);
  }
  return queries;
};
exports.upsertChannels = upsertChannels;
//# sourceMappingURL=upsertChannels.js.map