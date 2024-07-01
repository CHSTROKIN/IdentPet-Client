Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildThumbnail = buildThumbnail;
var _getResizedImageUrl = require("../../../../utils/getResizedImageUrl");
var _getUrlOfImageAttachment = require("../../../../utils/getUrlOfImageAttachment");
function buildThumbnail(_ref) {
  var height = _ref.height,
    image = _ref.image,
    resizeMode = _ref.resizeMode,
    width = _ref.width;
  var originalImageHeight = image.original_height,
    originalImageWidth = image.original_width;
  var shouldResize = originalImageHeight && originalImageWidth ? originalImageHeight + originalImageWidth > height + width : true;
  var imageUrl = (0, _getUrlOfImageAttachment.getUrlOfImageAttachment)(image);
  return {
    height: height,
    resizeMode: resizeMode ? resizeMode : image.original_height && image.original_width ? 'contain' : 'cover',
    thumb_url: image.thumb_url,
    type: image.type,
    url: shouldResize ? (0, _getResizedImageUrl.getResizedImageUrl)({
      height: height,
      url: imageUrl,
      width: width
    }) : imageUrl,
    width: width
  };
}
//# sourceMappingURL=buildThumbnail.js.map