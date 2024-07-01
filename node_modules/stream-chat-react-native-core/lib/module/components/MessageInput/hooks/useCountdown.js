var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCountdown = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _date = require("../../../utils/date");
var useCountdown = function useCountdown(end) {
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    seconds = _useState2[0],
    setSeconds = _useState2[1];
  (0, _react.useEffect)(function () {
    var intervalId;
    var startCountdown = function startCountdown(seconds) {
      setSeconds(seconds);
      intervalId = setInterval(function () {
        setSeconds(function (previous) {
          var next = previous - 1;
          if (next < 1) {
            clearInterval(intervalId);
            return 0;
          }
          return next;
        });
      }, _date.ONE_SECOND_IN_MS);
    };
    var secondsUntilEnd = (0, _date.secondsUntil)(end);
    if (secondsUntilEnd > 0) {
      startCountdown(secondsUntilEnd);
    }
    return function () {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [end]);
  return {
    seconds: seconds
  };
};
exports.useCountdown = useCountdown;
//# sourceMappingURL=useCountdown.js.map