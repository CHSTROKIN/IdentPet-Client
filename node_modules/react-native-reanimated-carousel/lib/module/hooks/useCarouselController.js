import React, { useRef } from "react";
import { runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import { Easing } from "../constants";
import { computedRealIndexWithAutoFillData, convertToSharedIndex } from "../utils/computedWithAutoFillData";
import { dealWithAnimation } from "../utils/dealWithAnimation";
import { handlerOffsetDirection } from "../utils/handlerOffsetDirection";
import { round } from "../utils/log";
export function useCarouselController(options) {
  const {
    size,
    loop,
    dataLength,
    handlerOffset,
    withAnimation,
    defaultIndex = 0,
    duration,
    autoFillData
  } = options;
  const dataInfo = React.useMemo(() => ({
    length: dataLength,
    disable: !dataLength,
    originalLength: dataLength
  }), [dataLength]);
  const index = useSharedValue(defaultIndex); // The Index displayed to the user

  const sharedIndex = useRef(defaultIndex);
  const sharedPreIndex = useRef(defaultIndex);
  const currentFixedPage = React.useCallback(() => {
    if (loop) return -Math.round(handlerOffset.value / size);
    const fixed = handlerOffset.value / size % dataInfo.length;
    return Math.round(handlerOffset.value <= 0 ? Math.abs(fixed) : Math.abs(fixed > 0 ? dataInfo.length - fixed : 0));
  }, [handlerOffset, dataInfo, size, loop]);

  function setSharedIndex(newSharedIndex) {
    sharedIndex.current = newSharedIndex;
  }

  useAnimatedReaction(() => {
    const handlerOffsetValue = handlerOffset.value;
    const toInt = round(handlerOffsetValue / size) % dataInfo.length;
    const isPositive = handlerOffsetValue <= 0;
    const i = isPositive ? Math.abs(toInt) : Math.abs(toInt > 0 ? dataInfo.length - toInt : 0);
    const newSharedIndexValue = convertToSharedIndex({
      loop,
      rawDataLength: dataInfo.originalLength,
      autoFillData: autoFillData,
      index: i
    });
    return {
      i,
      newSharedIndexValue
    };
  }, _ref => {
    let {
      i,
      newSharedIndexValue
    } = _ref;
    index.value = i;
    runOnJS(setSharedIndex)(newSharedIndexValue);
  }, [sharedPreIndex, sharedIndex, size, dataInfo, index, loop, autoFillData, handlerOffset]);
  const getCurrentIndex = React.useCallback(() => {
    const realIndex = computedRealIndexWithAutoFillData({
      index: index.value,
      dataLength: dataInfo.originalLength,
      loop,
      autoFillData: autoFillData
    });
    return realIndex;
  }, [index, autoFillData, dataInfo, loop]);
  const canSliding = React.useCallback(() => {
    return !dataInfo.disable;
  }, [dataInfo]);
  const onScrollEnd = React.useCallback(() => {
    var _options$onScrollEnd;

    (_options$onScrollEnd = options.onScrollEnd) === null || _options$onScrollEnd === void 0 ? void 0 : _options$onScrollEnd.call(options);
  }, [options]);
  const onScrollBegin = React.useCallback(() => {
    var _options$onScrollBegi;

    (_options$onScrollBegi = options.onScrollBegin) === null || _options$onScrollBegi === void 0 ? void 0 : _options$onScrollBegi.call(options);
  }, [options]);
  const scrollWithTiming = React.useCallback((toValue, onFinished) => {
    "worklet";

    const callback = isFinished => {
      "worklet";

      if (isFinished) {
        runOnJS(onScrollEnd)();
        onFinished && runOnJS(onFinished)();
      }
    };

    const defaultWithAnimation = {
      type: "timing",
      config: {
        duration,
        easing: Easing.easeOutQuart
      }
    };
    return dealWithAnimation(withAnimation !== null && withAnimation !== void 0 ? withAnimation : defaultWithAnimation)(toValue, callback);
  }, [duration, withAnimation, onScrollEnd]);
  const next = React.useCallback(function () {
    "worklet";

    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      count = 1,
      animated = true,
      onFinished
    } = opts;
    if (!canSliding() || !loop && index.value >= dataInfo.length - 1) return;
    onScrollBegin === null || onScrollBegin === void 0 ? void 0 : onScrollBegin();
    const nextPage = currentFixedPage() + count;
    index.value = nextPage;

    if (animated) {
      handlerOffset.value = scrollWithTiming(-nextPage * size, onFinished);
    } else {
      handlerOffset.value = -nextPage * size;
      onFinished === null || onFinished === void 0 ? void 0 : onFinished();
    }
  }, [canSliding, loop, index, dataInfo, onScrollBegin, handlerOffset, size, scrollWithTiming, currentFixedPage]);
  const prev = React.useCallback(function () {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      count = 1,
      animated = true,
      onFinished
    } = opts;
    if (!canSliding() || !loop && index.value <= 0) return;
    onScrollBegin === null || onScrollBegin === void 0 ? void 0 : onScrollBegin();
    const prevPage = currentFixedPage() - count;
    index.value = prevPage;

    if (animated) {
      handlerOffset.value = scrollWithTiming(-prevPage * size, onFinished);
    } else {
      handlerOffset.value = -prevPage * size;
      onFinished === null || onFinished === void 0 ? void 0 : onFinished();
    }
  }, [canSliding, loop, index, onScrollBegin, handlerOffset, size, scrollWithTiming, currentFixedPage]);
  const to = React.useCallback(opts => {
    const {
      i,
      animated = false,
      onFinished
    } = opts;
    if (i === index.value) return;
    if (!canSliding()) return;
    onScrollBegin === null || onScrollBegin === void 0 ? void 0 : onScrollBegin(); // direction -> 1 | -1

    const direction = handlerOffsetDirection(handlerOffset); // target offset

    const offset = i * size * direction; // page width size * page count

    const totalSize = dataInfo.length * size;
    let isCloseToNextLoop = false;

    if (loop) {
      isCloseToNextLoop = Math.abs(handlerOffset.value % totalSize) / totalSize >= 0.5;
    }

    const finalOffset = (Math.floor(Math.abs(handlerOffset.value / totalSize)) + (isCloseToNextLoop ? 1 : 0)) * totalSize * direction + offset;

    if (animated) {
      index.value = i;
      handlerOffset.value = scrollWithTiming(finalOffset, onFinished);
    } else {
      handlerOffset.value = finalOffset;
      index.value = i;
      onFinished === null || onFinished === void 0 ? void 0 : onFinished();
    }
  }, [index, canSliding, onScrollBegin, handlerOffset, size, dataInfo.length, loop, scrollWithTiming]);
  const scrollTo = React.useCallback(function () {
    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      index: i,
      count,
      animated = false,
      onFinished
    } = opts;

    if (typeof i === "number" && i > -1) {
      to({
        i,
        animated,
        onFinished
      });
      return;
    }

    if (!count) return;
    const n = Math.round(count);
    if (n < 0) prev({
      count: Math.abs(n),
      animated,
      onFinished
    });else next({
      count: n,
      animated,
      onFinished
    });
  }, [prev, next, to]);
  return {
    next,
    prev,
    scrollTo,
    getCurrentIndex,
    getSharedIndex: () => sharedIndex.current
  };
}
//# sourceMappingURL=useCarouselController.js.map