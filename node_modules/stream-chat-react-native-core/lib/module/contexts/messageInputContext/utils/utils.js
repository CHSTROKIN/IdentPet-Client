Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUploadAllowed = exports.MAX_FILE_SIZE_TO_UPLOAD = void 0;
exports.prettifyFileSize = prettifyFileSize;
var _mimeTypes = require("mime-types");
var MAX_FILE_SIZE_TO_UPLOAD = 100 * 1024 * 1024;
exports.MAX_FILE_SIZE_TO_UPLOAD = MAX_FILE_SIZE_TO_UPLOAD;
var isUploadAllowed = function isUploadAllowed(_ref) {
  var config = _ref.config,
    file = _ref.file;
  var allowed_file_extensions = config.allowed_file_extensions,
    allowed_mime_types = config.allowed_mime_types,
    blocked_file_extensions = config.blocked_file_extensions,
    blocked_mime_types = config.blocked_mime_types;
  if (allowed_file_extensions != null && allowed_file_extensions.length) {
    var allowed = allowed_file_extensions.some(function (fileExtension) {
      var _file$name;
      return (_file$name = file.name) == null ? void 0 : _file$name.toLowerCase().endsWith(fileExtension.toLowerCase());
    });
    if (!allowed) {
      return false;
    }
  }
  if (blocked_file_extensions != null && blocked_file_extensions.length) {
    var blocked = blocked_file_extensions.some(function (fileExtension) {
      var _file$name2;
      return (_file$name2 = file.name) == null ? void 0 : _file$name2.toLowerCase().endsWith(fileExtension.toLowerCase());
    });
    if (blocked) {
      return false;
    }
  }
  if (allowed_mime_types != null && allowed_mime_types.length) {
    if (file.name) {
      var fileMimeType = (0, _mimeTypes.lookup)(file.name);
      var _allowed = allowed_mime_types.some(function (mimeType) {
        return fileMimeType.toLowerCase() === mimeType.toLowerCase();
      });
      if (!_allowed) {
        return false;
      }
    }
  }
  if (blocked_mime_types != null && blocked_mime_types.length) {
    if (file.name) {
      var _fileMimeType = (0, _mimeTypes.lookup)(file.name);
      var _blocked = blocked_mime_types.some(function (mimeType) {
        return _fileMimeType.toLowerCase() === mimeType.toLowerCase();
      });
      if (_blocked) {
        return false;
      }
    }
  }
  return true;
};
exports.isUploadAllowed = isUploadAllowed;
function prettifyFileSize(bytes) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var units = ['B', 'kB', 'MB', 'GB'];
  var exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  var mantissa = bytes / Math.pow(1024, exponent);
  return "".concat(mantissa.toPrecision(precision), " ").concat(units[exponent]);
}
//# sourceMappingURL=utils.js.map