Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessageApi = void 0;
var _utils = require("./utils");
var _message = require("../generator/message");
var sendMessageApi = function sendMessageApi() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _message.generateMessage)();
  var result = {
    duration: 0.01,
    message: message
  };
  return (0, _utils.mockedApiResponse)(result, 'post');
};
exports.sendMessageApi = sendMessageApi;
//# sourceMappingURL=sendMessage.js.map