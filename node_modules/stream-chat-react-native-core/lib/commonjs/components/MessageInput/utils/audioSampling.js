var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divMod = void 0;
exports.downSample = downSample;
exports.upSample = exports.resampleWaveformData = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var resampleWaveformData = function resampleWaveformData(waveformData, amplitudesCount) {
  return waveformData.length === amplitudesCount ? waveformData : waveformData.length > amplitudesCount ? downSample(waveformData, amplitudesCount) : upSample(waveformData, amplitudesCount);
};
exports.resampleWaveformData = resampleWaveformData;
function downSample(data, targetOutputSize) {
  if (data.length <= targetOutputSize || targetOutputSize === 0) {
    return data;
  }
  if (targetOutputSize === 1) return [mean(data)];
  var result = [];
  var bucketSize = (data.length - 2) / (targetOutputSize - 2);
  var lastSelectedPointIndex = 0;
  result.push(data[lastSelectedPointIndex]);
  var maxAreaPoint, maxArea, triangleArea;
  for (var bucketIndex = 1; bucketIndex < targetOutputSize - 1; bucketIndex++) {
    var previousBucketRefPoint = data[lastSelectedPointIndex];
    var nextBucketMean = getNextBucketMean(data, bucketIndex, bucketSize);
    var currentBucketStartIndex = Math.floor((bucketIndex - 1) * bucketSize) + 1;
    var nextBucketStartIndex = Math.floor(bucketIndex * bucketSize) + 1;
    var countUnitsBetweenAtoC = 1 + nextBucketStartIndex - currentBucketStartIndex;
    maxArea = triangleArea = -1;
    for (var currentPointIndex = currentBucketStartIndex; currentPointIndex < nextBucketStartIndex; currentPointIndex++) {
      var countUnitsBetweenAtoB = Math.abs(currentPointIndex - currentBucketStartIndex) + 1;
      var countUnitsBetweenBtoC = countUnitsBetweenAtoC - countUnitsBetweenAtoB;
      var currentPointValue = data[currentPointIndex];
      triangleArea = triangleAreaHeron(triangleBase(Math.abs(previousBucketRefPoint - currentPointValue), countUnitsBetweenAtoB), triangleBase(Math.abs(currentPointValue - nextBucketMean), countUnitsBetweenBtoC), triangleBase(Math.abs(previousBucketRefPoint - nextBucketMean), countUnitsBetweenAtoC));
      if (triangleArea > maxArea) {
        maxArea = triangleArea;
        maxAreaPoint = data[currentPointIndex];
        lastSelectedPointIndex = currentPointIndex;
      }
    }
    if (typeof maxAreaPoint !== 'undefined') result.push(maxAreaPoint);
  }
  result.push(data[data.length - 1]);
  return result;
}
var triangleAreaHeron = function triangleAreaHeron(a, b, c) {
  var s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};
var triangleBase = function triangleBase(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};
var mean = function mean(values) {
  return values.reduce(function (acc, value) {
    return acc + value;
  }, 0) / values.length;
};
var divMod = function divMod(num, divisor) {
  return [Math.floor(num / divisor), num % divisor];
};
exports.divMod = divMod;
var getNextBucketMean = function getNextBucketMean(data, currentBucketIndex, bucketSize) {
  var nextBucketStartIndex = Math.floor(currentBucketIndex * bucketSize) + 1;
  var nextNextBucketStartIndex = Math.floor((currentBucketIndex + 1) * bucketSize) + 1;
  nextNextBucketStartIndex = nextNextBucketStartIndex < data.length ? nextNextBucketStartIndex : data.length;
  return mean(data.slice(nextBucketStartIndex, nextNextBucketStartIndex));
};
var upSample = function upSample(values, targetSize) {
  if (!values.length) {
    console.warn('Cannot extend empty array of amplitudes.');
    return values;
  }
  if (values.length > targetSize) {
    console.warn('Requested to extend the waveformData that is longer than the target list size');
    return values;
  }
  if (targetSize === values.length) return values;
  var _divMod = divMod(targetSize, values.length),
    _divMod2 = (0, _slicedToArray2["default"])(_divMod, 2),
    bucketSize = _divMod2[0],
    remainder = _divMod2[1];
  var result = [];
  for (var i = 0; i < values.length; i++) {
    var extra = remainder && remainder-- ? 1 : 0;
    result.push.apply(result, (0, _toConsumableArray2["default"])(Array(bucketSize + extra).fill(values[i])));
  }
  return result;
};
exports.upSample = upSample;
//# sourceMappingURL=audioSampling.js.map