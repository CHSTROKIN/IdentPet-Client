Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMember = void 0;
var _user = require("./user");
var generateMember = function generateMember() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var user = options && options.user || (0, _user.generateUser)();
  return Object.assign({
    invited: false,
    is_moderator: false,
    role: 'member',
    user: user,
    user_id: user.id
  }, options);
};
exports.generateMember = generateMember;
//# sourceMappingURL=member.js.map