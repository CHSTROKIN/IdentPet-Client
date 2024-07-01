var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericFile = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeSvg = require("react-native-svg");
var _base = require("./utils/base");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/icons/GenericFile.tsx";
var GenericFile = function GenericFile(props) {
  return (0, _jsxRuntime.jsxs)(_base.RootSvg, Object.assign({
    height: props.height || 40,
    viewBox: props.viewBox || '0 0 34 40',
    width: props.width || 34
  }, props, {
    children: [(0, _jsxRuntime.jsx)(_base.RootPath, {
      d: "M0 3.99A3.99 3.99 0 013.99 0h19.285l9.975 9.975V35.91a3.99 3.99 0 01-3.99 3.99H3.99A3.99 3.99 0 010 35.91V3.99z",
      pathFill: "url(#gradient)"
    }), (0, _jsxRuntime.jsx)(_base.RootPath, {
      d: "M7.98 14.131v-1.66h14.962v1.661H7.98zm9.976 1.663H7.98v1.662h9.976v-1.662zM7.98 20.78h14.962v-1.66H7.98v1.662-.002z",
      pathFill: "#CFCFCF"
    }), (0, _jsxRuntime.jsx)(_base.RootPath, {
      d: "M26.624 9.965a3.298 3.298 0 01-3.298-3.299V.058l9.92 9.907h-6.622z",
      pathFill: "#DBDBDB"
    }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Defs, {
      children: (0, _jsxRuntime.jsxs)(_reactNativeSvg.LinearGradient, {
        gradientUnits: "userSpaceOnUse",
        id: "gradient",
        x1: 0,
        x2: 0,
        y1: 0,
        y2: props.height || 40,
        children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
          stopColor: "#FFFFFF"
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Stop, {
          offset: 1,
          stopColor: "#DBDBDB"
        })]
      })
    })]
  }));
};
exports.GenericFile = GenericFile;
//# sourceMappingURL=GenericFile.js.map