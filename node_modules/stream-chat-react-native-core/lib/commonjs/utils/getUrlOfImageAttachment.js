Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlOfImageAttachment = getUrlOfImageAttachment;
function getUrlOfImageAttachment(image) {
  return image.image_url || image.asset_url;
}
//# sourceMappingURL=getUrlOfImageAttachment.js.map