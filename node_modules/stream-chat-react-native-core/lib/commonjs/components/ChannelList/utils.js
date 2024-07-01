var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveChannelUp = exports.getChannel = exports.MAX_QUERY_CHANNELS_LIMIT = exports.DEFAULT_QUERY_CHANNELS_LIMIT = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var moveChannelUp = function moveChannelUp(_ref) {
  var _ref$channels = _ref.channels,
    channels = _ref$channels === void 0 ? [] : _ref$channels,
    cid = _ref.cid;
  var index = channels.findIndex(function (c) {
    return c.cid === cid;
  });
  if (index <= 0) return channels;
  var channel = channels[index];
  channels.splice(index, 1);
  channels.unshift(channel);
  return (0, _uniqBy["default"])([channel].concat((0, _toConsumableArray2["default"])(channels)), 'cid');
};
exports.moveChannelUp = moveChannelUp;
var getChannel = function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(_ref2) {
    var client, id, type, channel;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          client = _ref2.client, id = _ref2.id, type = _ref2.type;
          channel = client.channel(type, id);
          _context.next = 4;
          return channel.watch();
        case 4:
          return _context.abrupt("return", channel);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getChannel(_x) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getChannel = getChannel;
var DEFAULT_QUERY_CHANNELS_LIMIT = 10;
exports.DEFAULT_QUERY_CHANNELS_LIMIT = DEFAULT_QUERY_CHANNELS_LIMIT;
var MAX_QUERY_CHANNELS_LIMIT = 30;
exports.MAX_QUERY_CHANNELS_LIMIT = MAX_QUERY_CHANNELS_LIMIT;
//# sourceMappingURL=utils.js.map