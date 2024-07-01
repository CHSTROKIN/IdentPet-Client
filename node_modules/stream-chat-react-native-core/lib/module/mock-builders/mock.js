var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTestClientWithUser = exports.getTestClient = exports.getRandomInt = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _streamChat = require("stream-chat");
var apiKey = 'API_KEY';
var token = 'dummy_token';
var setUser = function setUser(client, user) {
  return new Promise(function (resolve) {
    client.connectionId = 'dumm_connection_id';
    client.user = user;
    client.user.mutes = [];
    client._user = Object.assign({}, user);
    client.userID = user.id;
    client.userToken = token;
    resolve();
  });
};
function mockClient(client) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$disableAppSe = options.disableAppSettings,
    disableAppSettings = _options$disableAppSe === void 0 ? true : _options$disableAppSe;
  jest.spyOn(client, '_setToken').mockImplementation();
  jest.spyOn(client, '_setupConnection').mockImplementation();
  client.tokenManager = {
    getToken: jest.fn(function () {
      return token;
    }),
    tokenReady: jest.fn(function () {
      return true;
    })
  };
  client.setUser = setUser.bind(null, client);
  if (disableAppSettings) {
    client.getAppSettings = jest.fn(function () {
      return {};
    });
  }
  return client;
}
var getTestClient = function getTestClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mockClient(new _streamChat.StreamChat(apiKey), options);
};
exports.getTestClient = getTestClient;
var getTestClientWithUser = function () {
  var _ref = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee(user) {
    var options,
      _options$disableAppSe2,
      disableAppSettings,
      client,
      _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _options$disableAppSe2 = options.disableAppSettings, disableAppSettings = _options$disableAppSe2 === void 0 ? true : _options$disableAppSe2;
          client = mockClient(new _streamChat.StreamChat(apiKey));
          _context.next = 5;
          return setUser(client, user);
        case 5:
          client.wsPromise = Promise.resolve();
          if (disableAppSettings) {
            client.getAppSettings = jest.fn(function () {
              return {};
            });
          }
          return _context.abrupt("return", client);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getTestClientWithUser(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.getTestClientWithUser = getTestClientWithUser;
var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
exports.getRandomInt = getRandomInt;
//# sourceMappingURL=mock.js.map