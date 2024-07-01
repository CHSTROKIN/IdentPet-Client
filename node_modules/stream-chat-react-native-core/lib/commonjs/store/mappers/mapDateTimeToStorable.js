Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDateTimeToStorable = void 0;
var mapDateTimeToStorable = function mapDateTimeToStorable(datetime) {
  if (!datetime) return '';
  return new Date(datetime).toISOString();
};
exports.mapDateTimeToStorable = mapDateTimeToStorable;
//# sourceMappingURL=mapDateTimeToStorable.js.map