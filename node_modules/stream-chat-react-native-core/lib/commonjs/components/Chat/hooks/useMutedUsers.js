var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMutedUsers = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var useMutedUsers = function useMutedUsers(client) {
  var _useState = (0, _react.useState)((client == null ? void 0 : client.mutedUsers) || []),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    mutedUsers = _useState2[0],
    setMutedUsers = _useState2[1];
  (0, _react.useEffect)(function () {
    var handleEvent = function handleEvent(event) {
      setMutedUsers(function (mutes) {
        var _event$me;
        return ((_event$me = event.me) == null ? void 0 : _event$me.mutes) || mutes || [];
      });
    };
    var listener = client == null ? void 0 : client.on('notification.mutes_updated', handleEvent);
    return function () {
      return listener == null ? void 0 : listener.unsubscribe();
    };
  }, [setMutedUsers]);
  return mutedUsers;
};
exports.useMutedUsers = useMutedUsers;
//# sourceMappingURL=useMutedUsers.js.map