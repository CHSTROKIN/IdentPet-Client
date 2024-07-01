import React from "react";
import { useSharedValue, useAnimatedReaction } from "react-native-reanimated";
import { computeNewIndexWhenDataChanges } from "./computeNewIndexWhenDataChanges";
import { handlerOffsetDirection } from "../utils/handlerOffsetDirection";
export function useCommonVariables(props) {
  const {
    vertical,
    height,
    width,
    dataLength,
    defaultIndex,
    defaultScrollOffsetValue,
    loop
  } = props;
  const size = vertical ? height : width;
  const validLength = dataLength - 1;
  const defaultHandlerOffsetValue = -Math.abs(defaultIndex * size);

  const _handlerOffset = useSharedValue(defaultHandlerOffsetValue);

  const handlerOffset = defaultScrollOffsetValue !== null && defaultScrollOffsetValue !== void 0 ? defaultScrollOffsetValue : _handlerOffset;
  const prevDataLength = useSharedValue(dataLength);
  React.useEffect(() => {
    handlerOffset.value = defaultHandlerOffsetValue;
  }, [vertical, handlerOffset, defaultHandlerOffsetValue]);
  useAnimatedReaction(() => {
    const previousLength = prevDataLength.value;
    const currentLength = dataLength;
    const isLengthChanged = previousLength !== currentLength;
    const shouldComputed = isLengthChanged && loop;
    if (shouldComputed) prevDataLength.value = dataLength;
    return {
      shouldComputed,
      previousLength,
      currentLength
    };
  }, _ref => {
    let {
      shouldComputed,
      previousLength,
      currentLength
    } = _ref;

    if (shouldComputed) {
      // direction -> 1 | -1
      const direction = handlerOffsetDirection(handlerOffset);
      handlerOffset.value = computeNewIndexWhenDataChanges({
        direction,
        previousLength,
        currentLength,
        size,
        handlerOffset: handlerOffset.value
      });
    }
  }, [dataLength, loop]);
  return {
    size,
    validLength,
    handlerOffset
  };
}
//# sourceMappingURL=useCommonVariables.js.map