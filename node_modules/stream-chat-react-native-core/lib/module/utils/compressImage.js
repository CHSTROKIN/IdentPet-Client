var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compressedImageURI = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _native = require("../native");
var compressedImageURI = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(image, compressImageQuality) {
    var uri, compressedUri;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          uri = image.uri || '';
          _context.next = 3;
          return image.source === 'camera' || !image.height || !image.width || typeof compressImageQuality !== 'number' || compressImageQuality === 1 ? uri : (0, _native.compressImage)({
            compressImageQuality: compressImageQuality,
            height: image.height,
            uri: uri,
            width: image.width
          });
        case 3:
          compressedUri = _context.sent;
          return _context.abrupt("return", compressedUri);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function compressedImageURI(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.compressedImageURI = compressedImageURI;
//# sourceMappingURL=compressImage.js.map