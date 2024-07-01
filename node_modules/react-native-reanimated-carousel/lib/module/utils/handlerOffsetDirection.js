export function handlerOffsetDirection(handlerOffset) {
  "worklet";

  const isPositiveZero = Object.is(handlerOffset.value, +0);
  const isNegativeZero = Object.is(handlerOffset.value, -0);
  const direction = isPositiveZero ? 1 : isNegativeZero ? -1 : Math.sign(handlerOffset.value);
  return direction;
}
//# sourceMappingURL=handlerOffsetDirection.js.map