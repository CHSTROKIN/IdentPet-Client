Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserDefaults = exports.generateUser = exports.generateStaticUser = void 0;
var _uuid = require("uuid");
var getUserDefaults = function getUserDefaults() {
  return {
    banned: false,
    created_at: '2020-04-27T13:39:49.331742Z',
    id: (0, _uuid.v4)(),
    image: (0, _uuid.v4)(),
    name: (0, _uuid.v4)(),
    online: false,
    role: 'user',
    updated_at: '2020-04-27T13:39:49.332087Z'
  };
};
exports.getUserDefaults = getUserDefaults;
var generateUser = function generateUser() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.assign({}, getUserDefaults(), options);
};
exports.generateUser = generateUser;
var staticUsers = [generateUser({
  id: 'tommy',
  image: 'https://i.imgur.com/ytIyojl.png',
  name: 'Thomas'
}), generateUser({
  id: 'arthur',
  image: 'https://i.imgur.com/LuuGvh0.png',
  name: 'Arthur'
}), generateUser({
  id: 'john',
  image: 'https://i.imgur.com/LbtxRjf.png',
  name: 'John'
}), generateUser({
  id: 'finn',
  image: 'https://i.imgur.com/spueyAP.png',
  name: 'Finn'
})];
var generateStaticUser = function generateStaticUser(userNumber) {
  if (userNumber - 1 > staticUsers.length) {
    throw new Error("Tried getting a static user that doesn't exist.\nIndex: ".concat(userNumber, " , number of users: ").concat(staticUsers.length));
  }
  return staticUsers[userNumber];
};
exports.generateStaticUser = generateStaticUser;
//# sourceMappingURL=user.js.map