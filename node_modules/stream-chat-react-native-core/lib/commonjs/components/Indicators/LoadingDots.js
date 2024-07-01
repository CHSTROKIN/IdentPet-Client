var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingDots = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _LoadingDot = require("./LoadingDot");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Indicators/LoadingDots.tsx";
var LoadingDots = function LoadingDots(props) {
  var _props$diameter = props.diameter,
    diameter = _props$diameter === void 0 ? 4 : _props$diameter,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 1500 : _props$duration,
    _props$numberOfDots = props.numberOfDots,
    numberOfDots = _props$numberOfDots === void 0 ? 3 : _props$numberOfDots,
    spacingProp = props.spacing,
    style = props.style;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$loadi = _useTheme.theme.loadingDots,
    container = _useTheme$theme$loadi.container,
    spacing = _useTheme$theme$loadi.spacing;
  var halfSpacing = spacingProp ? spacingProp / 2 : spacing / 2;
  var offsetLength = duration / numberOfDots;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [{
      flexDirection: 'row'
    }, container, style],
    children: Array.from(Array(numberOfDots)).map(function (_item, index) {
      return (0, _jsxRuntime.jsx)(_LoadingDot.LoadingDot, {
        diameter: diameter,
        duration: duration,
        offset: duration - offsetLength * (index + 1),
        style: index === 0 ? {
          marginRight: halfSpacing
        } : index === numberOfDots - 1 ? {
          marginLeft: halfSpacing
        } : {
          marginHorizontal: halfSpacing
        }
      }, index);
    })
  });
};
exports.LoadingDots = LoadingDots;
//# sourceMappingURL=LoadingDots.js.map