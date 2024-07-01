var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateChannelResponse = exports.generateChannel = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _uuid = require("uuid");
var _user = require("./user");
var _excluded = ["channel", "id", "messages", "type"];
var defaultCapabilities = ['ban-channel-members', 'delete-any-message', 'delete-own-message', 'flag-message', 'mute-channel', 'pin-message', 'quote-message', 'read-events', 'send-links', 'send-message', 'send-reaction', 'send-reply', 'typing-events', 'update-any-message', 'update-own-message', 'upload-file'];
var defaultConfig = {
  automod: 'disabled',
  automod_behavior: 'flag',
  commands: [{
    args: '[text]',
    description: 'Post a random gif to the channel',
    name: 'giphy',
    set: 'fun_set'
  }],
  connect_events: true,
  created_at: '2020-04-24T11:36:43.859020368Z',
  max_message_length: 5000,
  message_retention: 'infinite',
  mutes: true,
  name: 'messaging',
  reactions: true,
  read_events: true,
  replies: true,
  search: true,
  typing_events: true,
  updated_at: '2020-04-24T11:36:43.859022903Z',
  uploads: true,
  url_enrichment: true
};
var defaultState = {
  members: {},
  messages: [],
  setIsUpToDate: jest.fn()
};
var getChannelDefaults = function getChannelDefaults() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      id: (0, _uuid.v4)(),
      type: 'messaging'
    },
    id = _ref.id,
    type = _ref.type;
  return {
    _client: {},
    data: {
      cid: "".concat(type, ":").concat(id),
      config: Object.assign({}, defaultConfig, {
        name: type,
        type: type
      }),
      created_at: '2020-04-28T11:20:48.578147Z',
      created_by: (0, _user.getUserDefaults)(),
      frozen: false,
      id: id,
      own_capabilities: defaultCapabilities,
      type: type,
      updated_at: '2020-04-28T11:20:48.578147Z'
    },
    id: id,
    state: defaultState,
    type: type
  };
};
var generateChannel = function generateChannel(customValues) {
  return Object.keys(customValues).reduce(function (accumulated, current) {
    if (current in accumulated) {
      var _key = current;
      accumulated[_key] = (0, _typeof2["default"])(accumulated[_key]) === 'object' ? Object.assign({}, accumulated[_key], customValues[_key]) : accumulated[_key] = customValues[_key];
      return accumulated;
    }
    return Object.assign({}, accumulated, (0, _defineProperty2["default"])({}, current, customValues[current]));
  }, getChannelDefaults());
};
exports.generateChannel = generateChannel;
var generateChannelResponse = function generateChannelResponse() {
  var customValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    channel: {},
    id: (0, _uuid.v4)(),
    messages: [],
    type: 'messaging'
  };
  var _customValues$channel = customValues.channel,
    channel = _customValues$channel === void 0 ? {} : _customValues$channel,
    _customValues$id = customValues.id,
    id = _customValues$id === void 0 ? (0, _uuid.v4)() : _customValues$id,
    _customValues$message = customValues.messages,
    messages = _customValues$message === void 0 ? [] : _customValues$message,
    _customValues$type = customValues.type,
    type = _customValues$type === void 0 ? 'messaging' : _customValues$type,
    rest = (0, _objectWithoutProperties2["default"])(customValues, _excluded);
  var defaults = getChannelDefaults();
  return Object.assign({
    channel: Object.assign({}, defaults.data, Object.assign({
      cid: "".concat(type, ":").concat(id)
    }, channel, {
      id: id,
      type: type,
      user: (0, _user.generateUser)()
    })),
    members: [],
    messages: messages
  }, rest);
};
exports.generateChannelResponse = generateChannelResponse;
//# sourceMappingURL=channel.js.map