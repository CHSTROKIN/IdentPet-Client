Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildThumbnailGrid = buildThumbnailGrid;
var _buildThumbnail = require("./buildThumbnail");
function buildThumbnailGrid(_ref) {
  var grid = _ref.grid,
    images = _ref.images,
    _ref$invertedDirectio = _ref.invertedDirections,
    invertedDirections = _ref$invertedDirectio === void 0 ? false : _ref$invertedDirectio,
    sizeConfig = _ref.sizeConfig;
  var gridHeight = sizeConfig.gridHeight,
    gridWidth = sizeConfig.gridWidth;
  var imageIndex = 0;
  var thumbnailGrid = [];
  var numOfColumns = grid.length;
  grid.forEach(function (rows, colIndex) {
    var totalFlexValue = rows.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    rows.forEach(function (flexValue) {
      var tHeight = invertedDirections ? gridHeight / numOfColumns : gridHeight * (flexValue / totalFlexValue);
      var tWidth = invertedDirections ? gridWidth * (flexValue / totalFlexValue) : gridWidth / numOfColumns;
      var currentImage = images[imageIndex];
      var thumbnail = (0, _buildThumbnail.buildThumbnail)({
        height: tHeight,
        image: currentImage,
        resizeMode: 'cover',
        width: tWidth
      });
      if (!thumbnailGrid[colIndex]) {
        thumbnailGrid[colIndex] = [];
      }
      thumbnailGrid[colIndex].push(thumbnail);
      imageIndex++;
    });
  });
  return {
    height: gridHeight,
    invertedDirections: invertedDirections,
    thumbnailGrid: thumbnailGrid,
    width: gridWidth
  };
}
//# sourceMappingURL=buildThumbnailGrid.js.map