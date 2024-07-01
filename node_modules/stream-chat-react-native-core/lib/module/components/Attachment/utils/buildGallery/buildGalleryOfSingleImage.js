Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildGalleryOfSingleImage = buildGalleryOfSingleImage;
var _buildThumbnail = require("./buildThumbnail");
var _getAspectRatio = require("../getAspectRatio");
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
function getContainerSize(_ref) {
  var image = _ref.image,
    sizeConfig = _ref.sizeConfig;
  var height = image.original_height,
    width = image.original_width;
  var gridHeight = sizeConfig.gridHeight,
    gridWidth = sizeConfig.gridWidth,
    maxHeight = sizeConfig.maxHeight,
    maxWidth = sizeConfig.maxWidth,
    minHeight = sizeConfig.minHeight,
    minWidth = sizeConfig.minWidth;
  if (!height || !width) {
    return {
      height: gridHeight,
      width: gridWidth
    };
  }
  var aspectRatio = (0, _getAspectRatio.getAspectRatio)(image);
  if (aspectRatio <= 1) {
    var _containerHeight = clamp(height, minHeight, maxHeight);
    var _containerWidth = clamp(_containerHeight * aspectRatio, minWidth, maxWidth);
    if (_containerWidth === maxWidth) {
      return {
        height: clamp(_containerWidth / aspectRatio, minHeight, maxHeight),
        width: _containerWidth
      };
    }
    return {
      height: _containerHeight,
      width: _containerWidth
    };
  }
  var containerWidth = clamp(width, minWidth, maxWidth);
  var containerHeight = clamp(containerWidth / aspectRatio, minHeight, maxHeight);
  if (containerHeight === maxHeight) {
    return {
      height: containerHeight,
      width: clamp(containerHeight * aspectRatio, minHeight, maxHeight)
    };
  }
  return {
    height: containerHeight,
    width: containerWidth
  };
}
function buildGalleryOfSingleImage(_ref2) {
  var image = _ref2.image,
    sizeConfig = _ref2.sizeConfig;
  var container = getContainerSize({
    image: image,
    sizeConfig: sizeConfig
  });
  var thumbnail = (0, _buildThumbnail.buildThumbnail)(Object.assign({
    image: image
  }, container));
  var column = [thumbnail];
  return Object.assign({}, container, {
    thumbnailGrid: [column]
  });
}
//# sourceMappingURL=buildGalleryOfSingleImage.js.map