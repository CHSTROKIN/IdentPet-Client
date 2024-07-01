Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondsUntil = exports.ONE_SECOND_IN_MS = void 0;
var ONE_SECOND_IN_MS = 1000;
exports.ONE_SECOND_IN_MS = ONE_SECOND_IN_MS;
var secondsUntil = function secondsUntil(date) {
  return Math.trunc((date.getTime() - Date.now()) / ONE_SECOND_IN_MS);
};
exports.secondsUntil = secondsUntil;
//# sourceMappingURL=date.js.map