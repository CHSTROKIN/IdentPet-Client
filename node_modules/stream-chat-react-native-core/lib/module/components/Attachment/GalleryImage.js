var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoizedGalleryImage = exports.GalleryImageWithContext = exports.GalleryImage = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["ImageComponent", "uri"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/GalleryImage.tsx";
var GalleryImageWithContext = function GalleryImageWithContext(props) {
  var _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    uri = props.uri,
    rest = (0, _objectWithoutProperties2["default"])(props, _excluded);
  if (!(0, _utils.isLocalUrl)(uri)) {
    return (0, _jsxRuntime.jsx)(ImageComponent, Object.assign({}, rest, {
      accessibilityLabel: "Gallery Image",
      source: {
        uri: (0, _utils.makeImageCompatibleUrl)(uri)
      }
    }));
  }
  return (0, _jsxRuntime.jsx)(_reactNative.Image, Object.assign({}, rest, {
    accessibilityLabel: "Gallery Image",
    source: {
      uri: (0, _utils.makeImageCompatibleUrl)(uri)
    }
  }));
};
exports.GalleryImageWithContext = GalleryImageWithContext;
var MemoizedGalleryImage = _react["default"].memo(GalleryImageWithContext, function (prevProps, nextProps) {
  return (0, _utils.getUrlWithoutParams)(prevProps.uri) === (0, _utils.getUrlWithoutParams)(nextProps.uri);
});
exports.MemoizedGalleryImage = MemoizedGalleryImage;
var GalleryImage = function GalleryImage(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  return (0, _jsxRuntime.jsx)(MemoizedGalleryImage, Object.assign({
    ImageComponent: ImageComponent
  }, props));
};
exports.GalleryImage = GalleryImage;
//# sourceMappingURL=GalleryImage.js.map