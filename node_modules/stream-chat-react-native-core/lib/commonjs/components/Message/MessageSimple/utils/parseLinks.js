var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseLinksFromText = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _linkifyjs = require("linkifyjs");
var removeMarkdownLinksFromText = function removeMarkdownLinksFromText(input) {
  return input.replace(/\[.*\]\(.*\)/g, '');
};
var removeUserNamesWithEmailFromText = function removeUserNamesWithEmailFromText(input) {
  return input.replace(/@(\w+(\.\w+)?)(@\w+\.\w+)/g, '');
};
var parseLinksFromText = function parseLinksFromText(input) {
  var strippedInput = [removeMarkdownLinksFromText, removeUserNamesWithEmailFromText].reduce(function (acc, fn) {
    return fn(acc);
  }, input);
  var links = (0, _linkifyjs.find)(strippedInput, 'url');
  var emails = (0, _linkifyjs.find)(strippedInput, 'email');
  var result = [].concat((0, _toConsumableArray2["default"])(links), (0, _toConsumableArray2["default"])(emails)).map(function (_ref) {
    var href = _ref.href,
      value = _ref.value;
    return {
      raw: value,
      url: href
    };
  });
  return result;
};
exports.parseLinksFromText = parseLinksFromText;
//# sourceMappingURL=parseLinks.js.map