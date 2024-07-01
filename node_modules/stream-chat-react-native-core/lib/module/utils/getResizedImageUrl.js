Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResizedImageUrl = getResizedImageUrl;
var _reactNative = require("react-native");
var _StreamChatRN = require("./StreamChatRN");
function getResizedImageUrl(_ref) {
  var height = _ref.height,
    _ref$resize = _ref.resize,
    resize = _ref$resize === void 0 ? 'clip' : _ref$resize,
    url = _ref.url,
    width = _ref.width;
  try {
    var parsedUrl = new URL(url);
    var originalHeight = parsedUrl.searchParams.get('oh');
    var originalWidth = parsedUrl.searchParams.get('ow');
    var isResizableUrl = _StreamChatRN.StreamChatRN.config.resizableCDNHosts.some(function (rCDNh) {
      return url.includes(rCDNh);
    }) && originalHeight && originalWidth;
    if (!isResizableUrl || !height && !width) return url;
    if (height) {
      parsedUrl.searchParams.set('h', "".concat(_reactNative.PixelRatio.getPixelSizeForLayoutSize(Number(height))));
    }
    if (width) {
      parsedUrl.searchParams.set('w', "".concat(_reactNative.PixelRatio.getPixelSizeForLayoutSize(Number(width))));
    }
    parsedUrl.searchParams.set('resize', "".concat(resize));
    return parsedUrl.toString();
  } catch (error) {
    console.warn(error);
    return url;
  }
}
//# sourceMappingURL=getResizedImageUrl.js.map