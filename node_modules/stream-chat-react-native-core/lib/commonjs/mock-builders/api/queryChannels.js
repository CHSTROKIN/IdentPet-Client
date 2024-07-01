Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryChannelsApi = void 0;
var _utils = require("./utils");
var queryChannelsApi = function queryChannelsApi() {
  var channels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var result = {
    channels: channels,
    duration: 0.01
  };
  return (0, _utils.mockedApiResponse)(result, 'post');
};
exports.queryChannelsApi = queryChannelsApi;
//# sourceMappingURL=queryChannels.js.map