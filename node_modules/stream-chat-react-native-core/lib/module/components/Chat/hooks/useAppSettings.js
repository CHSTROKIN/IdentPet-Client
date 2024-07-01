var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppSettings = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useIsMountedRef = require("../../../hooks/useIsMountedRef");
var dbApi = _interopRequireWildcard(require("../../../store/apis"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var useAppSettings = function useAppSettings(client, isOnline, enableOfflineSupport, initialisedDatabase) {
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    appSettings = _useState2[0],
    setAppSettings = _useState2[1];
  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();
  (0, _react.useEffect)(function () {
    function enforeAppSettings() {
      return _enforeAppSettings.apply(this, arguments);
    }
    function _enforeAppSettings() {
      _enforeAppSettings = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
        var _appSettings, _appSettings2;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (client.userID) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              if (!(enableOfflineSupport && !initialisedDatabase)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              if (!(!isOnline && enableOfflineSupport)) {
                _context.next = 8;
                break;
              }
              _appSettings = dbApi.getAppSettings({
                currentUserId: client.userID
              });
              setAppSettings(_appSettings);
              return _context.abrupt("return");
            case 8:
              _context.prev = 8;
              _context.next = 11;
              return client.getAppSettings();
            case 11:
              _appSettings2 = _context.sent;
              if (isMounted.current) {
                setAppSettings(_appSettings2);
                enableOfflineSupport && dbApi.upsertAppSettings({
                  appSettings: _appSettings2,
                  currentUserId: client.userID
                });
              }
              _context.next = 18;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](8);
              if (_context.t0 instanceof Error) {
                console.error("An error occurred while getting app settings: ".concat(_context.t0));
              }
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[8, 15]]);
      }));
      return _enforeAppSettings.apply(this, arguments);
    }
    enforeAppSettings();
  }, [client, isOnline, initialisedDatabase]);
  return appSettings;
};
exports.useAppSettings = useAppSettings;
//# sourceMappingURL=useAppSettings.js.map