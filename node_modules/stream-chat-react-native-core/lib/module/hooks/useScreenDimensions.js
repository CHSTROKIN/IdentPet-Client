var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScreenDimensions = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactNative = require("react-native");
var useScreenDimensions = function useScreenDimensions(rounded) {
  var _useState = (0, _react.useState)(_reactNative.Dimensions.get('screen')),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    screenDimensions = _useState2[0],
    setScreenDimensions = _useState2[1];
  (0, _react.useEffect)(function () {
    var subscriptions = _reactNative.Dimensions.addEventListener('change', function (_ref) {
      var screen = _ref.screen;
      setScreenDimensions(function (prev) {
        var height = screen.height,
          width = screen.width;
        if (prev.height !== height || prev.width !== width) {
          return screen;
        }
        return prev;
      });
    });
    return function () {
      return subscriptions == null ? void 0 : subscriptions.remove();
    };
  }, []);
  var vw = function vw(percentageWidth) {
    var value = screenDimensions.width * (percentageWidth / 100);
    return rounded ? Math.round(value) : value;
  };
  var vh = function vh(percentageHeight) {
    var value = screenDimensions.height * (percentageHeight / 100);
    return rounded ? Math.round(value) : value;
  };
  var screenDimensionFunctions = (0, _react.useMemo)(function () {
    return {
      vh: vh,
      vw: vw
    };
  }, [vh, vw]);
  return screenDimensionFunctions;
};
exports.useScreenDimensions = useScreenDimensions;
//# sourceMappingURL=useScreenDimensions.js.map