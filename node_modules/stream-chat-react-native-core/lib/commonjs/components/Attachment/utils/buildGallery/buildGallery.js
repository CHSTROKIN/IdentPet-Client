Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildGallery = buildGallery;
var _buildGalleryOfSingleImage = require("./buildGalleryOfSingleImage");
var _buildGalleryOfThreeImages = require("./buildGalleryOfThreeImages");
var _buildGalleryOfTwoImages = require("./buildGalleryOfTwoImages");
var _buildThumbnailGrid = require("./buildThumbnailGrid");
function buildGallery(_ref) {
  var images = _ref.images,
    sizeConfig = _ref.sizeConfig;
  if (images.length === 1) {
    return (0, _buildGalleryOfSingleImage.buildGalleryOfSingleImage)({
      image: images[0],
      sizeConfig: sizeConfig
    });
  }
  if (images.length === 2) {
    return (0, _buildGalleryOfTwoImages.buildGalleryOfTwoImages)({
      images: images,
      sizeConfig: sizeConfig
    });
  }
  if (images.length === 3) {
    return (0, _buildGalleryOfThreeImages.buildGalleryOfThreeImages)({
      images: images,
      sizeConfig: sizeConfig
    });
  }
  return (0, _buildThumbnailGrid.buildThumbnailGrid)({
    grid: [[1, 1], [1, 1]],
    images: images.slice(0, 4),
    invertedDirections: true,
    sizeConfig: sizeConfig
  });
}
//# sourceMappingURL=buildGallery.js.map