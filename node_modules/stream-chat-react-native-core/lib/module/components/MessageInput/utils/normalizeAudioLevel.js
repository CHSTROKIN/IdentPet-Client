Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeAudioLevel = void 0;
var normalizeAudioLevel = function normalizeAudioLevel(value, lowerBound) {
  var upperBound = 0;
  var delta = upperBound - lowerBound;
  if (value === undefined) return 1;
  if (value < lowerBound) {
    return 0;
  } else if (value >= upperBound) {
    return 1;
  } else {
    return Math.abs((value - lowerBound) / delta);
  }
};
exports.normalizeAudioLevel = normalizeAudioLevel;
//# sourceMappingURL=normalizeAudioLevel.js.map