/**
 * In worklet
 * e.g. runOnJS(lop)(...);
 */
export function log() {
  // eslint-disable-next-line no-console
  console.log(...arguments);
}
export function round(number) {
  "worklet";

  return Math.round(number);
}
//# sourceMappingURL=log.js.map