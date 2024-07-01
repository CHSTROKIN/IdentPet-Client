var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useViewport = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactNative = require("react-native");
var useViewport = function useViewport(rounded) {
  var _useState = (0, _react.useState)(_reactNative.Dimensions.get('window')),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    viewportDimensions = _useState2[0],
    setViewportDimensions = _useState2[1];
  (0, _react.useEffect)(function () {
    var subscriptions = _reactNative.Dimensions.addEventListener('change', function (_ref) {
      var window = _ref.window;
      setViewportDimensions(function (prev) {
        var height = window.height,
          width = window.width;
        if (prev.height !== height || prev.width !== width) {
          return window;
        }
        return prev;
      });
    });
    return function () {
      return subscriptions == null ? void 0 : subscriptions.remove();
    };
  }, []);
  var vw = function vw(percentageWidth) {
    var value = viewportDimensions.width * (percentageWidth / 100);
    return rounded ? Math.round(value) : value;
  };
  var vh = function vh(percentageHeight) {
    var value = viewportDimensions.height * (percentageHeight / 100);
    return rounded ? Math.round(value) : value;
  };
  var viewportFunctions = (0, _react.useMemo)(function () {
    return {
      vh: vh,
      vw: vw
    };
  }, [vh, vw]);
  return viewportFunctions;
};
exports.useViewport = useViewport;
//# sourceMappingURL=useViewport.js.map