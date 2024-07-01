var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAttachmentPickerContext = exports.useAttachmentPickerContext = exports.AttachmentPickerProvider = exports.AttachmentPickerContext = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _defaultBaseContextValue = require("../utils/defaultBaseContextValue");
var _getDisplayName = require("../utils/getDisplayName");
var _isTestEnvironment = require("../utils/isTestEnvironment");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/contexts/attachmentPickerContext/AttachmentPickerContext.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AttachmentPickerContext = _react["default"].createContext(_defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE);
exports.AttachmentPickerContext = AttachmentPickerContext;
var AttachmentPickerProvider = function AttachmentPickerProvider(_ref) {
  var children = _ref.children,
    value = _ref.value;
  var bottomInsetValue = value == null ? void 0 : value.bottomInset;
  var topInsetValue = value == null ? void 0 : value.topInset;
  var _useState = (0, _react.useState)(bottomInsetValue != null ? bottomInsetValue : 0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    bottomInset = _useState2[0],
    setBottomInset = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    maxNumberOfFiles = _useState4[0],
    setMaxNumberOfFiles = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    selectedImages = _useState6[0],
    setSelectedImages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    selectedFiles = _useState8[0],
    setSelectedFiles = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    selectedPicker = _useState10[0],
    setSelectedPicker = _useState10[1];
  var _useState11 = (0, _react.useState)(topInsetValue != null ? topInsetValue : 0),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    topInset = _useState12[0],
    setTopInset = _useState12[1];
  (0, _react.useEffect)(function () {
    setBottomInset(bottomInsetValue != null ? bottomInsetValue : 0);
  }, [bottomInsetValue]);
  (0, _react.useEffect)(function () {
    setTopInset(topInsetValue != null ? topInsetValue : 0);
  }, [topInsetValue]);
  var combinedValue = Object.assign({
    maxNumberOfFiles: maxNumberOfFiles,
    selectedFiles: selectedFiles,
    selectedImages: selectedImages,
    selectedPicker: selectedPicker,
    setBottomInset: setBottomInset,
    setMaxNumberOfFiles: setMaxNumberOfFiles,
    setSelectedFiles: setSelectedFiles,
    setSelectedImages: setSelectedImages,
    setSelectedPicker: setSelectedPicker,
    setTopInset: setTopInset
  }, value, {
    bottomInset: bottomInset,
    topInset: topInset
  });
  return (0, _jsxRuntime.jsx)(AttachmentPickerContext.Provider, {
    value: combinedValue,
    children: children
  });
};
exports.AttachmentPickerProvider = AttachmentPickerProvider;
var useAttachmentPickerContext = function useAttachmentPickerContext() {
  var contextValue = (0, _react.useContext)(AttachmentPickerContext);
  if (contextValue === _defaultBaseContextValue.DEFAULT_BASE_CONTEXT_VALUE && !(0, _isTestEnvironment.isTestEnvironment)()) {
    throw new Error("The useAttachmentPickerContext hook was called outside the AttachmentPickerContext provider. Make sure you have configured OverlayProvider component correctly - https://getstream.io/chat/docs/sdk/reactnative/basics/hello_stream_chat/#overlay-provider");
  }
  return contextValue;
};
exports.useAttachmentPickerContext = useAttachmentPickerContext;
var withAttachmentPickerContext = function withAttachmentPickerContext(Component) {
  var WithAttachmentPickerContextComponent = function WithAttachmentPickerContextComponent(props) {
    var attachmentPickerContext = useAttachmentPickerContext();
    return (0, _jsxRuntime.jsx)(Component, Object.assign({}, props, attachmentPickerContext));
  };
  WithAttachmentPickerContextComponent.displayName = "WithAttachmentPickerContext".concat((0, _getDisplayName.getDisplayName)(Component));
  return WithAttachmentPickerContextComponent;
};
exports.withAttachmentPickerContext = withAttachmentPickerContext;
//# sourceMappingURL=AttachmentPickerContext.js.map