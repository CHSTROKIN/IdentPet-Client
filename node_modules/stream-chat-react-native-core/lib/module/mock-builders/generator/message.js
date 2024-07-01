Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStaticMessage = exports.generateMessage = void 0;
var _uuid = require("uuid");
var _user = require("./user");
var generateMessage = function generateMessage() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var timestamp = options.timestamp || new Date(new Date().getTime() - Math.floor(Math.random() * 100000));
  return Object.assign({
    attachments: [],
    created_at: timestamp,
    html: '<p>regular</p>',
    id: (0, _uuid.v4)(),
    text: (0, _uuid.v4)(),
    type: 'regular',
    updated_at: timestamp.toString(),
    user: (0, _user.generateUser)()
  }, options);
};
exports.generateMessage = generateMessage;
var StreamReactNativeNamespace = '9b244ee4-7d69-4d7b-ae23-cf89e9f7b035';
var generateStaticMessage = function generateStaticMessage(seed, options, date) {
  return generateMessage(Object.assign({
    created_at: date || '2020-04-27T13:39:49.331742Z',
    id: (0, _uuid.v5)(seed, StreamReactNativeNamespace),
    text: seed,
    updated_at: date || '2020-04-27T13:39:49.331742Z'
  }, options));
};
exports.generateStaticMessage = generateStaticMessage;
//# sourceMappingURL=message.js.map