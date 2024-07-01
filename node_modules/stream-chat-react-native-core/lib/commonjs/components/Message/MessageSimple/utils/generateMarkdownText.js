var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMarkdownText = void 0;
var _truncate = _interopRequireDefault(require("lodash/truncate"));
var _parseLinks = require("./parseLinks");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
var generateMarkdownText = function generateMarkdownText(text) {
  if (!text) return null;
  var resultText = text.trim();
  var linkInfos = (0, _parseLinks.parseLinksFromText)(resultText);
  var _iterator = _createForOfIteratorHelper(linkInfos),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var linkInfo = _step.value;
      var displayLink = (0, _truncate["default"])(linkInfo.raw, {
        length: 200,
        omission: '...'
      });
      var normalRegEx = new RegExp(escapeRegExp(linkInfo.raw), 'g');
      var markdown = "[".concat(displayLink, "](").concat(linkInfo.url, ")");
      resultText = text.replace(normalRegEx, markdown);
      var mentionsRegex = new RegExp("@\\[".concat(escapeRegExp(displayLink), "\\]\\(").concat(escapeRegExp(linkInfo.url), "\\)"), 'g');
      resultText = resultText.replace(mentionsRegex, "@".concat(displayLink));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  resultText = resultText.replace(/[<"'>]/g, '\\$&');
  return resultText;
};
exports.generateMarkdownText = generateMarkdownText;
//# sourceMappingURL=generateMarkdownText.js.map