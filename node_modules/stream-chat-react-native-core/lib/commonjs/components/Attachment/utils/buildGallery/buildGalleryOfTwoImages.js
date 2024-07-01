Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildGalleryOfTwoImages = buildGalleryOfTwoImages;
var _buildThumbnailGrid = require("./buildThumbnailGrid");
var _getAspectRatio = require("../getAspectRatio");
function buildGalleryOfTwoImages(_ref) {
  var images = _ref.images,
    sizeConfig = _ref.sizeConfig;
  var aspectRatio1 = (0, _getAspectRatio.getAspectRatio)(images[0]);
  var aspectRatio2 = (0, _getAspectRatio.getAspectRatio)(images[1]);
  var isLandscape1 = aspectRatio1 > 1;
  var isLandscape2 = aspectRatio2 > 1;
  if (isLandscape1 && isLandscape2) {
    return (0, _buildThumbnailGrid.buildThumbnailGrid)({
      grid: [[1], [1]],
      images: images,
      invertedDirections: true,
      sizeConfig: sizeConfig
    });
  }
  if (!isLandscape1 && !isLandscape2) {
    return (0, _buildThumbnailGrid.buildThumbnailGrid)({
      grid: [[1, 1]],
      images: images,
      invertedDirections: true,
      sizeConfig: sizeConfig
    });
  }
  return (0, _buildThumbnailGrid.buildThumbnailGrid)({
    grid: [[2, 1]],
    images: isLandscape1 ? images : images.reverse(),
    invertedDirections: true,
    sizeConfig: sizeConfig
  });
}
//# sourceMappingURL=buildGalleryOfTwoImages.js.map