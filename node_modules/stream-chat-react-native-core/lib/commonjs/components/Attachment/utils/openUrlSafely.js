var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openUrlSafely = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _reactNative = require("react-native");
var openUrlSafely = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(url) {
    var finalUrl, pattern, supported;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          finalUrl = url;
          pattern = new RegExp(/^\S+:\/\//);
          if (!pattern.test(finalUrl)) {
            finalUrl = 'http://' + url;
          }
          _context.next = 5;
          return _reactNative.Linking.canOpenURL(finalUrl);
        case 5:
          supported = _context.sent;
          if (supported) {
            _reactNative.Linking.openURL(finalUrl);
          } else {
            console.warn("Don't know how to open URI: ".concat(finalUrl));
          }
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function openUrlSafely(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.openUrlSafely = openUrlSafely;
//# sourceMappingURL=openUrlSafely.js.map