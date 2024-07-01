var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddedToChannelNotification = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = require("react");
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var _ChatContext = require("../../../../contexts/chatContext/ChatContext");
var _utils = require("../../utils");
var useAddedToChannelNotification = function useAddedToChannelNotification(_ref) {
  var onAddedToChannel = _ref.onAddedToChannel,
    setChannels = _ref.setChannels;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    client = _useChatContext.client;
  (0, _react.useEffect)(function () {
    var handleEvent = function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(event) {
        var _event$channel, _event$channel2, channel;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof onAddedToChannel === 'function')) {
                _context.next = 4;
                break;
              }
              onAddedToChannel(setChannels, event);
              _context.next = 9;
              break;
            case 4:
              if (!((_event$channel = event.channel) != null && _event$channel.id && (_event$channel2 = event.channel) != null && _event$channel2.type)) {
                _context.next = 9;
                break;
              }
              _context.next = 7;
              return (0, _utils.getChannel)({
                client: client,
                id: event.channel.id,
                type: event.channel.type
              });
            case 7:
              channel = _context.sent;
              setChannels(function (channels) {
                return channels ? (0, _uniqBy["default"])([channel].concat((0, _toConsumableArray2["default"])(channels)), 'cid') : channels;
              });
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function handleEvent(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var listener = client == null ? void 0 : client.on('notification.added_to_channel', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, []);
};
exports.useAddedToChannelNotification = useAddedToChannelNotification;
//# sourceMappingURL=useAddedToChannelNotification.js.map