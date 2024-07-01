Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTrimmedAttachmentTitle = void 0;
var getTrimmedAttachmentTitle = function getTrimmedAttachmentTitle(title) {
  if (!title) return '';
  var lastIndexOfDot = title.lastIndexOf('.');
  return title.length < 12 ? title : title.slice(0, 12) + '...' + title.slice(lastIndexOfDot);
};
exports.getTrimmedAttachmentTitle = getTrimmedAttachmentTitle;
//# sourceMappingURL=getTrimmedAttachmentTitle.js.map