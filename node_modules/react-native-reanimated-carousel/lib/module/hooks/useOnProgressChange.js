import { runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { computedOffsetXValueWithAutoFillData } from "../utils/computedWithAutoFillData";
export function useOnProgressChange(opts) {
  const {
    autoFillData,
    loop,
    offsetX,
    size,
    rawDataLength,
    onProgressChange
  } = opts;
  useAnimatedReaction(() => offsetX.value, _value => {
    let value = computedOffsetXValueWithAutoFillData({
      value: _value,
      rawDataLength,
      size,
      autoFillData,
      loop
    });

    if (!loop) {
      value = Math.max(-((rawDataLength - 1) * size), Math.min(value, 0));
    }

    let absoluteProgress = Math.abs(value / size);
    if (value > 0) absoluteProgress = rawDataLength - absoluteProgress;
    if (onProgressChange) runOnJS(onProgressChange)(value, absoluteProgress);
  }, [loop, autoFillData, rawDataLength, onProgressChange]);
}
//# sourceMappingURL=useOnProgressChange.js.map