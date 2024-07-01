Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSyncDatabase = void 0;
var _react = require("react");
var _handleEventToSyncDB = require("./handleEventToSyncDB");
var useSyncDatabase = function useSyncDatabase(_ref) {
  var client = _ref.client,
    enableOfflineSupport = _ref.enableOfflineSupport,
    initialisedDatabase = _ref.initialisedDatabase;
  (0, _react.useEffect)(function () {
    var listener;
    if (enableOfflineSupport && initialisedDatabase) {
      listener = client == null ? void 0 : client.on(function (event) {
        return (0, _handleEventToSyncDB.handleEventToSyncDB)(event, client);
      });
    }
    return function () {
      var _listener;
      (_listener = listener) == null ? void 0 : _listener.unsubscribe();
    };
  }, [client, initialisedDatabase]);
};
exports.useSyncDatabase = useSyncDatabase;
//# sourceMappingURL=useSyncDatabase.js.map