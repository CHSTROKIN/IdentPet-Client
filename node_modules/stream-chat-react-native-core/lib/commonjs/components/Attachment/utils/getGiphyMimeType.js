Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGiphyMimeType = getGiphyMimeType;
function getGiphyMimeType(giphyUrl) {
  if (giphyUrl.includes('.mp4')) {
    return 'video/mp4';
  } else if (giphyUrl.includes('.webp')) {
    return 'image/webp';
  }
  return 'image/gif';
}
//# sourceMappingURL=getGiphyMimeType.js.map