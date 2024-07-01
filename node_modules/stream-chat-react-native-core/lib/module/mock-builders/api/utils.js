Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockedApiResponse = void 0;
var mockedApiResponse = function mockedApiResponse(response) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  return {
    response: {
      data: response,
      status: status
    },
    type: type
  };
};
exports.mockedApiResponse = mockedApiResponse;
//# sourceMappingURL=utils.js.map