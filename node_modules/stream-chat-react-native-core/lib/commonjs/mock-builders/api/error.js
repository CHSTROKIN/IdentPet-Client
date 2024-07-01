Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.erroredPutApi = exports.erroredPostApi = exports.erroredGetApi = exports.erroredDeleteApi = void 0;
var _utils = require("./utils");
var defaultErrorObject = {
  duration: 0.01,
  exception_fields: {},
  message: 'API resulted in error'
};
var erroredGetApi = function erroredGetApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'get', 500);
};
exports.erroredGetApi = erroredGetApi;
var erroredPostApi = function erroredPostApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'post', 500);
};
exports.erroredPostApi = erroredPostApi;
var erroredPutApi = function erroredPutApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'put', 500);
};
exports.erroredPutApi = erroredPutApi;
var erroredDeleteApi = function erroredDeleteApi() {
  var customError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var error = Object.assign({}, defaultErrorObject, customError);
  return (0, _utils.mockedApiResponse)(error, 'delete', 500);
};
exports.erroredDeleteApi = erroredDeleteApi;
//# sourceMappingURL=error.js.map