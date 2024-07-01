function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { cancelAnimation, measure, runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedRef, useDerivedValue, useSharedValue, withDecay } from "react-native-reanimated";
import { Easing } from "./constants";
import { CTX } from "./store";
import { dealWithAnimation } from "./utils/dealWithAnimation";

const IScrollViewGesture = props => {
  const {
    props: {
      vertical,
      pagingEnabled,
      snapEnabled,
      panGestureHandlerProps,
      loop: infinite,
      scrollAnimationDuration,
      withAnimation,
      enabled,
      dataLength,
      overscrollEnabled,
      maxScrollDistancePerSwipe
    }
  } = React.useContext(CTX);
  const {
    size,
    translation,
    testID,
    style = {},
    onScrollBegin,
    onScrollEnd,
    onTouchBegin,
    onTouchEnd
  } = props;
  const maxPage = dataLength;
  const isHorizontal = useDerivedValue(() => !vertical, [vertical]);
  const touching = useSharedValue(false);
  const scrollEndTranslation = useSharedValue(0);
  const scrollEndVelocity = useSharedValue(0);
  const containerRef = useAnimatedRef(); // Get the limit of the scroll.

  const getLimit = React.useCallback(() => {
    "worklet";

    if (!infinite && !overscrollEnabled) {
      const {
        width: containerWidth = 0
      } = measure(containerRef); // If the item's total width is less than the container's width, then there is no need to scroll.

      if (dataLength * size < containerWidth) return 0; // Disable the "overscroll" effect

      return dataLength * size - containerWidth;
    }

    return dataLength * size;
  }, [infinite, size, dataLength, overscrollEnabled]);
  const withSpring = React.useCallback((toValue, onFinished) => {
    "worklet";

    const defaultWithAnimation = {
      type: "timing",
      config: {
        duration: scrollAnimationDuration + 100,
        easing: Easing.easeOutQuart
      }
    };
    return dealWithAnimation(withAnimation !== null && withAnimation !== void 0 ? withAnimation : defaultWithAnimation)(toValue, isFinished => {
      "worklet";

      if (isFinished) onFinished && runOnJS(onFinished)();
    });
  }, [scrollAnimationDuration, withAnimation]);
  const endWithSpring = React.useCallback(onFinished => {
    "worklet";

    const origin = translation.value;
    const velocity = scrollEndVelocity.value; // Default to scroll in the direction of the slide (with deceleration)

    let finalTranslation = withDecay({
      velocity,
      deceleration: 0.999
    }); // If the distance of the swipe exceeds the max scroll distance, keep the view at the current position

    if (typeof maxScrollDistancePerSwipe === "number" && Math.abs(scrollEndTranslation.value) > maxScrollDistancePerSwipe) {
      finalTranslation = origin;
    } else {
      /**
       * The page size is the same as the item size.
       * If direction is vertical, the page size is the height of the item.
       * If direction is horizontal, the page size is the width of the item.
      *
      * `page size` equals to `size` variable.
      * */
      if (pagingEnabled) {
        // distance with direction
        const offset = -(scrollEndTranslation.value >= 0 ? 1 : -1); // 1 or -1

        const computed = offset < 0 ? Math.ceil : Math.floor;
        const page = computed(-translation.value / size);

        if (infinite) {
          const finalPage = page + offset;
          finalTranslation = withSpring(withProcessTranslation(-finalPage * size), onFinished);
        } else {
          const finalPage = Math.min(maxPage - 1, Math.max(0, page + offset));
          finalTranslation = withSpring(withProcessTranslation(-finalPage * size), onFinished);
        }
      }

      if (!pagingEnabled && snapEnabled) {
        // scroll to the nearest item
        const nextPage = Math.round((origin + velocity * 0.4) / size) * size;
        finalTranslation = withSpring(withProcessTranslation(nextPage), onFinished);
      }
    }

    translation.value = finalTranslation;

    function withProcessTranslation(translation) {
      if (!infinite && !overscrollEnabled) {
        const limit = getLimit();
        const sign = Math.sign(translation);
        return sign * Math.max(0, Math.min(limit, Math.abs(translation)));
      }

      return translation;
    }
  }, [withSpring, size, maxPage, infinite, snapEnabled, translation, pagingEnabled, scrollEndVelocity.value, maxScrollDistancePerSwipe, scrollEndTranslation.value]);
  const onFinish = React.useCallback(isFinished => {
    "worklet";

    if (isFinished) {
      touching.value = false;
      onScrollEnd && runOnJS(onScrollEnd)();
    }
  }, [onScrollEnd, touching]);
  const activeDecay = React.useCallback(() => {
    "worklet";

    touching.value = true;
    translation.value = withDecay({
      velocity: scrollEndVelocity.value
    }, isFinished => onFinish(isFinished));
  }, [onFinish, scrollEndVelocity.value, touching, translation]);
  const resetBoundary = React.useCallback(() => {
    "worklet";

    if (touching.value) return;

    if (translation.value > 0) {
      if (scrollEndTranslation.value < 0) {
        activeDecay();
        return;
      }

      if (!infinite) {
        translation.value = withSpring(0);
        return;
      }
    }

    if (translation.value < -((maxPage - 1) * size)) {
      if (scrollEndTranslation.value > 0) {
        activeDecay();
        return;
      }

      if (!infinite) translation.value = withSpring(-((maxPage - 1) * size));
    }
  }, [touching.value, translation, maxPage, size, scrollEndTranslation.value, infinite, activeDecay, withSpring]);
  useAnimatedReaction(() => translation.value, () => {
    if (!pagingEnabled) resetBoundary();
  }, [pagingEnabled, resetBoundary]);

  function withProcessTranslation(translation) {
    "worklet";

    if (!infinite && !overscrollEnabled) {
      const limit = getLimit();
      const sign = Math.sign(translation);
      return sign * Math.max(0, Math.min(limit, Math.abs(translation)));
    }

    return translation;
  }

  const panGestureEventHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      touching.value = true;
      ctx.validStart = true;
      onScrollBegin && runOnJS(onScrollBegin)();
      ctx.max = (maxPage - 1) * size;
      if (!infinite && !overscrollEnabled) ctx.max = getLimit();
      ctx.panOffset = translation.value;
    },
    onActive: (e, ctx) => {
      if (ctx.validStart) {
        ctx.validStart = false;
        cancelAnimation(translation);
      }

      touching.value = true;
      let {
        translationX,
        translationY
      } = e;
      const totalTranslation = isHorizontal.value ? translationX : translationY;

      if (typeof maxScrollDistancePerSwipe === "number" && Math.abs(totalTranslation) > maxScrollDistancePerSwipe) {
        const overSwipe = Math.abs(totalTranslation) - maxScrollDistancePerSwipe;
        const dampedTranslation = maxScrollDistancePerSwipe + overSwipe * 0.5;
        translationX = isHorizontal.value ? dampedTranslation * Math.sign(translationX) : translationX;
        translationY = !isHorizontal.value ? dampedTranslation * Math.sign(translationY) : translationY;
      }

      const panTranslation = isHorizontal.value ? translationX : translationY;

      if (!infinite) {
        if (translation.value > 0 || translation.value < -ctx.max) {
          const boundary = translation.value > 0 ? 0 : -ctx.max;
          const fixed = boundary - ctx.panOffset;
          const dynamic = panTranslation - fixed;
          translation.value = boundary + dynamic * 0.5;
          return;
        }
      }

      const translationValue = ctx.panOffset + panTranslation;
      translation.value = translationValue;
    },
    onEnd: (e, ctx) => {
      const {
        velocityX,
        velocityY,
        translationX,
        translationY
      } = e;
      scrollEndVelocity.value = isHorizontal.value ? velocityX : velocityY;
      scrollEndTranslation.value = isHorizontal.value ? translationX : translationY;
      const totalTranslation = isHorizontal.value ? translationX : translationY;

      if (typeof maxScrollDistancePerSwipe === "number" && Math.abs(totalTranslation) > maxScrollDistancePerSwipe) {
        const nextPage = Math.round((ctx.panOffset + maxScrollDistancePerSwipe * Math.sign(totalTranslation)) / size) * size;
        translation.value = withSpring(withProcessTranslation(nextPage), onScrollEnd);
      } else {
        endWithSpring(onScrollEnd);
      }

      if (!infinite) touching.value = false;
    }
  }, [pagingEnabled, isHorizontal.value, infinite, maxPage, size, snapEnabled, onScrollBegin, onScrollEnd]);
  return /*#__PURE__*/React.createElement(PanGestureHandler, _extends({}, panGestureHandlerProps, {
    enabled: enabled,
    onGestureEvent: panGestureEventHandler
  }), /*#__PURE__*/React.createElement(Animated.View, {
    ref: containerRef,
    testID: testID,
    style: style,
    onTouchStart: onTouchBegin,
    onTouchEnd: onTouchEnd
  }, props.children));
};

export const ScrollViewGesture = IScrollViewGesture;
//# sourceMappingURL=ScrollViewGesture.js.map