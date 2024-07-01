Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGalleryImageBorderRadius = getGalleryImageBorderRadius;
function getGalleryImageBorderRadius(_ref) {
  var _groupStyles$;
  var alignment = _ref.alignment,
    colIndex = _ref.colIndex,
    groupStyles = _ref.groupStyles,
    hasThreadReplies = _ref.hasThreadReplies,
    height = _ref.height,
    invertedDirections = _ref.invertedDirections,
    messageText = _ref.messageText,
    numOfColumns = _ref.numOfColumns,
    numOfRows = _ref.numOfRows,
    rowIndex = _ref.rowIndex,
    sizeConfig = _ref.sizeConfig,
    threadList = _ref.threadList,
    width = _ref.width;
  var groupStyle = "".concat(alignment, "_").concat(groupStyles == null ? void 0 : (_groupStyles$ = groupStyles[0]) == null ? void 0 : _groupStyles$.toLowerCase == null ? void 0 : _groupStyles$.toLowerCase());
  var isSingleImage = numOfColumns === 1 && numOfRows === 1;
  var isImageSmallerThanMinContainerSize = isSingleImage && height && width && (height > width && width === sizeConfig.minWidth || height < width && height === sizeConfig.minHeight);
  var topLeftEdgeExposed = colIndex === 0 && rowIndex === 0;
  var bottomLeftEdgeExposed = !invertedDirections && colIndex === 0 && rowIndex === numOfRows - 1 || invertedDirections && colIndex === numOfColumns - 1 && rowIndex === 0;
  var topRightEdgeExposed = !invertedDirections && colIndex === numOfColumns - 1 && rowIndex === 0 || invertedDirections && colIndex === 0 && rowIndex === numOfRows - 1;
  var bottomRightEdgeExposed = colIndex === numOfColumns && rowIndex === numOfRows - 1;
  return {
    borderBottomLeftRadius: !isImageSmallerThanMinContainerSize && bottomLeftEdgeExposed && !messageText && (groupStyle !== 'left_bottom' && groupStyle !== 'left_single' || hasThreadReplies && !threadList) ? 14 : 0,
    borderBottomRightRadius: !isImageSmallerThanMinContainerSize && bottomRightEdgeExposed && !messageText && (groupStyle !== 'right_bottom' && groupStyle !== 'right_single' || hasThreadReplies && !threadList) ? 14 : 0,
    borderTopLeftRadius: !isImageSmallerThanMinContainerSize && topLeftEdgeExposed ? 14 : 0,
    borderTopRightRadius: !isImageSmallerThanMinContainerSize && topRightEdgeExposed ? 14 : 0
  };
}
//# sourceMappingURL=getGalleryImageBorderRadius.js.map