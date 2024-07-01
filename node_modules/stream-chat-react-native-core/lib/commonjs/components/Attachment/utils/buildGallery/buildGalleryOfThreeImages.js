var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildGalleryOfThreeImages = buildGalleryOfThreeImages;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _buildThumbnailGrid = require("./buildThumbnailGrid");
var _getAspectRatio = require("../getAspectRatio");
function moveToFront(array, item) {
  var index = array.indexOf(item);
  if (index === -1) {
    return array;
  }
  var newArray = (0, _toConsumableArray2["default"])(array);
  newArray.splice(index, 1);
  newArray.unshift(item);
  return newArray;
}
function buildGalleryOfThreeImages(_ref) {
  var images = _ref.images,
    sizeConfig = _ref.sizeConfig;
  var _images$reduce = images.reduce(function (acc, image) {
      var aspectRatio = (0, _getAspectRatio.getAspectRatio)(image);
      var o = Object.assign({}, acc);
      if (aspectRatio > 1) {
        if (!o.landscapeImage || aspectRatio > o.landscapeImageAspectRatio) {
          o.landscapeImage = image;
          o.landscapeImageAspectRatio = aspectRatio;
        }
      } else {
        if (!o.portraitImage || aspectRatio < o.portraitImageAspectRatio) {
          o.portraitImage = image;
          o.portraitImageAspectRatio = aspectRatio;
        }
      }
      return o;
    }, {
      landscapeImageAspectRatio: 1,
      portraitImageAspectRatio: 1
    }),
    landscapeImage = _images$reduce.landscapeImage,
    landscapeImageAspectRatio = _images$reduce.landscapeImageAspectRatio,
    portraitImage = _images$reduce.portraitImage,
    portraitImageAspectRatio = _images$reduce.portraitImageAspectRatio;
  if (landscapeImageAspectRatio > 1 / portraitImageAspectRatio) {
    return (0, _buildThumbnailGrid.buildThumbnailGrid)({
      grid: [[1], [1, 1]],
      images: landscapeImage ? moveToFront(images, landscapeImage) : images,
      invertedDirections: true,
      sizeConfig: sizeConfig
    });
  } else {
    return (0, _buildThumbnailGrid.buildThumbnailGrid)({
      grid: [[1], [1, 1]],
      images: portraitImage ? moveToFront(images, portraitImage) : images,
      invertedDirections: false,
      sizeConfig: sizeConfig
    });
  }
}
//# sourceMappingURL=buildGalleryOfThreeImages.js.map