/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { runOnJS, useDerivedValue } from "react-native-reanimated";
import { useAutoPlay } from "./hooks/useAutoPlay";
import { useCarouselController } from "./hooks/useCarouselController";
import { useCommonVariables } from "./hooks/useCommonVariables";
import { useInitProps } from "./hooks/useInitProps";
import { useLayoutConfig } from "./hooks/useLayoutConfig";
import { useOnProgressChange } from "./hooks/useOnProgressChange";
import { usePropsErrorBoundary } from "./hooks/usePropsErrorBoundary";
import { useVisibleRanges } from "./hooks/useVisibleRanges";
import { BaseLayout } from "./layouts/BaseLayout";
import { ScrollViewGesture } from "./ScrollViewGesture";
import { CTX } from "./store";
import { computedRealIndexWithAutoFillData } from "./utils/computedWithAutoFillData";
const Carousel = /*#__PURE__*/React.forwardRef((_props, ref) => {
  const props = useInitProps(_props);
  const {
    testID,
    loop,
    autoFillData,
    // Fill data with autoFillData
    data,
    // Length of fill data
    dataLength,
    // Raw data that has not been processed
    rawData,
    // Length of raw data
    rawDataLength,
    mode,
    style,
    width,
    height,
    vertical,
    autoPlay,
    windowSize,
    autoPlayReverse,
    autoPlayInterval,
    scrollAnimationDuration,
    withAnimation,
    renderItem,
    onScrollEnd,
    onSnapToItem,
    onScrollBegin,
    onProgressChange,
    customAnimation,
    defaultIndex
  } = props;
  const commonVariables = useCommonVariables(props);
  const {
    size,
    handlerOffset
  } = commonVariables;
  const offsetX = useDerivedValue(() => {
    const totalSize = size * dataLength;
    const x = handlerOffset.value % totalSize;
    if (!loop) return handlerOffset.value;
    return isNaN(x) ? 0 : x;
  }, [loop, size, dataLength]);
  usePropsErrorBoundary({ ...props,
    dataLength
  });
  useOnProgressChange({
    autoFillData,
    loop,
    size,
    offsetX,
    rawDataLength,
    onProgressChange
  });
  const carouselController = useCarouselController({
    loop,
    size,
    dataLength,
    autoFillData,
    handlerOffset,
    withAnimation,
    defaultIndex,
    onScrollEnd: () => runOnJS(_onScrollEnd)(),
    onScrollBegin: () => !!onScrollBegin && runOnJS(onScrollBegin)(),
    duration: scrollAnimationDuration
  });
  const {
    next,
    prev,
    scrollTo,
    getSharedIndex,
    getCurrentIndex
  } = carouselController;
  const {
    start: startAutoPlay,
    pause: pauseAutoPlay
  } = useAutoPlay({
    autoPlay,
    autoPlayInterval,
    autoPlayReverse,
    carouselController
  });

  const _onScrollEnd = React.useCallback(() => {
    const _sharedIndex = Math.round(getSharedIndex());

    const realIndex = computedRealIndexWithAutoFillData({
      index: _sharedIndex,
      dataLength: rawDataLength,
      loop,
      autoFillData
    });
    if (onSnapToItem) onSnapToItem(realIndex);
    if (onScrollEnd) onScrollEnd(realIndex);
  }, [loop, autoFillData, rawDataLength, getSharedIndex, onSnapToItem, onScrollEnd]);

  const scrollViewGestureOnScrollBegin = React.useCallback(() => {
    pauseAutoPlay();
    onScrollBegin === null || onScrollBegin === void 0 ? void 0 : onScrollBegin();
  }, [onScrollBegin, pauseAutoPlay]);
  const scrollViewGestureOnScrollEnd = React.useCallback(() => {
    startAutoPlay();

    _onScrollEnd();
  }, [_onScrollEnd, startAutoPlay]);
  const scrollViewGestureOnTouchBegin = React.useCallback(pauseAutoPlay, [pauseAutoPlay]);
  const scrollViewGestureOnTouchEnd = React.useCallback(startAutoPlay, [startAutoPlay]);
  React.useImperativeHandle(ref, () => ({
    next,
    prev,
    getCurrentIndex,
    scrollTo
  }), [getCurrentIndex, next, prev, scrollTo]);
  const visibleRanges = useVisibleRanges({
    total: dataLength,
    viewSize: size,
    translation: handlerOffset,
    windowSize
  });
  const layoutConfig = useLayoutConfig({ ...props,
    size
  });
  const renderLayout = React.useCallback((item, i) => {
    const realIndex = computedRealIndexWithAutoFillData({
      index: i,
      dataLength: rawDataLength,
      loop,
      autoFillData
    });
    return /*#__PURE__*/React.createElement(BaseLayout, {
      key: i,
      index: i,
      handlerOffset: offsetX,
      visibleRanges: visibleRanges,
      animationStyle: customAnimation || layoutConfig
    }, _ref => {
      let {
        animationValue
      } = _ref;
      return renderItem({
        item,
        index: realIndex,
        animationValue
      });
    });
  }, [loop, rawData, offsetX, visibleRanges, autoFillData, renderItem, layoutConfig, customAnimation]);
  return /*#__PURE__*/React.createElement(GestureHandlerRootView, null, /*#__PURE__*/React.createElement(CTX.Provider, {
    value: {
      props,
      common: commonVariables
    }
  }, /*#__PURE__*/React.createElement(ScrollViewGesture, {
    key: mode,
    size: size,
    translation: handlerOffset,
    style: [styles.container, {
      width: width || "100%",
      height: height || "100%"
    }, style, vertical ? styles.itemsVertical : styles.itemsHorizontal],
    testID: testID,
    onScrollBegin: scrollViewGestureOnScrollBegin,
    onScrollEnd: scrollViewGestureOnScrollEnd,
    onTouchBegin: scrollViewGestureOnTouchBegin,
    onTouchEnd: scrollViewGestureOnTouchEnd
  }, data.map(renderLayout))));
});
export default Carousel;
const styles = StyleSheet.create({
  container: {
    overflow: "hidden"
  },
  itemsHorizontal: {
    flexDirection: "row"
  },
  itemsVertical: {
    flexDirection: "column"
  }
});
//# sourceMappingURL=Carousel.js.map