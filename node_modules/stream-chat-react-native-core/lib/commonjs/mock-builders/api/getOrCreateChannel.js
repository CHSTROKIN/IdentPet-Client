Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrCreateChannelApi = void 0;
var _utils = require("./utils");
var getOrCreateChannelApi = function getOrCreateChannelApi() {
  var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    channel: {},
    members: [],
    messages: []
  };
  var result = {
    channel: channel.channel,
    duration: 0.01,
    members: channel.members,
    messages: channel.messages
  };
  return (0, _utils.mockedApiResponse)(result, 'post');
};
exports.getOrCreateChannelApi = getOrCreateChannelApi;
//# sourceMappingURL=getOrCreateChannel.js.map