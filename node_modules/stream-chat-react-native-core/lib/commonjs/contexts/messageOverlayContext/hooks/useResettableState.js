var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useResettableState = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useIsMountedRef = require("../../../hooks/useIsMountedRef");
var useResettableState = function useResettableState(values) {
  var _useState = (0, _react.useState)(values),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var isMounted = (0, _useIsMountedRef.useIsMountedRef)();
  var reset = function reset() {
    if (isMounted.current) {
      setData(values);
    }
  };
  return {
    data: data,
    reset: reset,
    setData: setData
  };
};
exports.useResettableState = useResettableState;
//# sourceMappingURL=useResettableState.js.map