var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withImageGalleryContext = exports.useImageGalleryContext = exports.ImageGalleryProvider = exports.ImageGalleryContext = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/imageGalleryContext/ImageGalleryContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ImageGalleryContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.ImageGalleryContext = ImageGalleryContext;
var ImageGalleryProvider = function ImageGalleryProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    selectedMessage = _useState4[0],
    setSelectedMessage = _useState4[1];
  return (0, _jsxRuntime.jsx)(ImageGalleryContext.Provider, {
    value: {
      messages: messages,
      selectedMessage: selectedMessage,
      setMessages: setMessages,
      setSelectedMessage: setSelectedMessage
    },
    children: children
  });
};
exports.ImageGalleryProvider = ImageGalleryProvider;
var useImageGalleryContext = function useImageGalleryContext() {
  var contextValue = (0, _react.useContext)(ImageGalleryContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useImageGalleryContext hook was called outside the ImageGalleryContext Provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return contextValue;
};
exports.useImageGalleryContext = useImageGalleryContext;
var withImageGalleryContext = function withImageGalleryContext(Component) {
  var WithImageGalleryContextComponent = function WithImageGalleryContextComponent(props) {
    var imageGalleryContext = useImageGalleryContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, imageGalleryContext));
  };
  WithImageGalleryContextComponent.displayName = "WithImageGalleryContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithImageGalleryContextComponent;
};
exports.withImageGalleryContext = withImageGalleryContext;
//# sourceMappingURL=ImageGalleryContext.js.map