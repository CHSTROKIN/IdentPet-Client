var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsOnline = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useAppStateListener = require("../../../hooks/useAppStateListener");
var _useIsMountedRef = require("../../../hooks/useIsMountedRef");
var _native = require("../../../native");
var useIsOnline = function useIsOnline(client) {
  var closeConnectionOnBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOnline = _useState2[0],
    setIsOnline = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    connectionRecovering = _useState4[0],
    setConnectionRecovering = _useState4[1];
  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();
  var clientExists = !!client;
  var onBackground = (0, _react.useCallback)(function () {
    if (!closeConnectionOnBackground || !clientExists) return;
    for (var cid in client.activeChannels) {
      var channel = client.activeChannels[cid];
      channel == null ? void 0 : channel.state.setIsUpToDate(false);
    }
    client.closeConnection();
    setIsOnline(false);
  }, [closeConnectionOnBackground, client, clientExists]);
  var onForeground = (0, _react.useCallback)(function () {
    if (!clientExists || !client.userID) return;
    client.openConnection();
  }, [client, clientExists]);
  (0, _useAppStateListener.useAppStateListener)(onForeground, onBackground);
  (0, _react.useEffect)(function () {
    var handleChangedEvent = function handleChangedEvent(event) {
      setConnectionRecovering(!event.online);
      setIsOnline(event.online || false);
    };
    var handleRecoveredEvent = function handleRecoveredEvent() {
      return setConnectionRecovering(false);
    };
    var notifyChatClient = function notifyChatClient(netInfoState) {
      if (client != null && client.wsConnection) {
        if (netInfoState) {
          client.wsConnection.onlineStatusChanged({
            type: 'online'
          });
        } else {
          client.wsConnection.onlineStatusChanged({
            type: 'offline'
          });
        }
      }
    };
    var unsubscribeNetInfo;
    var setNetInfoListener = function setNetInfoListener() {
      unsubscribeNetInfo = _native.NetInfo.addEventListener(function (netInfoState) {
        var _client$wsConnection;
        if (netInfoState === false && !((_client$wsConnection = client.wsConnection) != null && _client$wsConnection.isHealthy)) {
          setConnectionRecovering(true);
          setIsOnline(false);
        }
        notifyChatClient(netInfoState);
      });
    };
    var setInitialOnlineState = function () {
      var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var status;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _native.NetInfo.fetch();
            case 2:
              status = _context.sent;
              if (isMounted.current) {
                setIsOnline(status);
                notifyChatClient(status);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function setInitialOnlineState() {
        return _ref.apply(this, arguments);
      };
    }();
    setInitialOnlineState();
    var chatListeners = [];
    if (client) {
      chatListeners.push(client.on('connection.changed', handleChangedEvent));
      chatListeners.push(client.on('connection.recovered', handleRecoveredEvent));
      setNetInfoListener();
    }
    return function () {
      chatListeners.forEach(function (listener) {
        return listener.unsubscribe == null ? void 0 : listener.unsubscribe();
      });
      unsubscribeNetInfo == null ? void 0 : unsubscribeNetInfo();
    };
  }, [clientExists]);
  return {
    connectionRecovering: connectionRecovering,
    isOnline: isOnline
  };
};
exports.useIsOnline = useIsOnline;
//# sourceMappingURL=useIsOnline.js.map