Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useImageGalleryGestures = exports.clamp = exports.IsSwiping = exports.HasPinched = void 0;
var _reactNative = require("react-native");
var _reactNativeReanimated = require("react-native-reanimated");
var _OverlayContext = require("../../../contexts/overlayContext/OverlayContext");
var _native = require("../../../native");
var HasPinched = function (HasPinched) {
  HasPinched[HasPinched["FALSE"] = 0] = "FALSE";
  HasPinched[HasPinched["TRUE"] = 1] = "TRUE";
  return HasPinched;
}({});
exports.HasPinched = HasPinched;
var IsSwiping = function (IsSwiping) {
  IsSwiping[IsSwiping["UNDETERMINED"] = 0] = "UNDETERMINED";
  IsSwiping[IsSwiping["TRUE"] = 1] = "TRUE";
  IsSwiping[IsSwiping["FALSE"] = 2] = "FALSE";
  return IsSwiping;
}({});
exports.IsSwiping = IsSwiping;
var MARGIN = 32;
var useImageGalleryGestures = function useImageGalleryGestures(_ref) {
  var currentImageHeight = _ref.currentImageHeight,
    halfScreenHeight = _ref.halfScreenHeight,
    halfScreenWidth = _ref.halfScreenWidth,
    headerFooterVisible = _ref.headerFooterVisible,
    offsetScale = _ref.offsetScale,
    overlayOpacity = _ref.overlayOpacity,
    photoLength = _ref.photoLength,
    scale = _ref.scale,
    screenHeight = _ref.screenHeight,
    screenWidth = _ref.screenWidth,
    selectedIndex = _ref.selectedIndex,
    setSelectedIndex = _ref.setSelectedIndex,
    translateX = _ref.translateX,
    translateY = _ref.translateY,
    translationX = _ref.translationX;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    setOverlay = _useOverlayContext.setOverlay;
  var isAndroid = _reactNative.Platform.OS === 'android';
  var hasHitBottomScale = (0, _reactNativeReanimated.useSharedValue)(1);
  var hasHitTopScale = (0, _reactNativeReanimated.useSharedValue)(0);
  var originX = (0, _reactNativeReanimated.useSharedValue)(0);
  var originY = (0, _reactNativeReanimated.useSharedValue)(0);
  var oldFocalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var oldFocalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var index = (0, _reactNativeReanimated.useSharedValue)(0);
  if (index.value !== selectedIndex) {
    index.value = selectedIndex;
  }
  var offsetX = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalOffsetX = (0, _reactNativeReanimated.useSharedValue)(0);
  var focalOffsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var adjustedFocalX = (0, _reactNativeReanimated.useSharedValue)(0);
  var adjustedFocalY = (0, _reactNativeReanimated.useSharedValue)(0);
  var tapX = (0, _reactNativeReanimated.useSharedValue)(0);
  var tapY = (0, _reactNativeReanimated.useSharedValue)(0);
  var numberOfPinchFingers = (0, _reactNativeReanimated.useSharedValue)(0);
  var isSwiping = (0, _reactNativeReanimated.useSharedValue)(0);
  var isPinch = (0, _reactNativeReanimated.useSharedValue)(false);
  var hasPinched = (0, _reactNativeReanimated.useSharedValue)(0);
  var resetTouchValues = function resetTouchValues() {
    'worklet';

    focalX.value = 0;
    focalY.value = 0;
    oldFocalX.value = 0;
    oldFocalY.value = 0;
    originX.value = 0;
    originY.value = 0;
    focalOffsetX.value = 0;
    focalOffsetY.value = 0;
    numberOfPinchFingers.value = 0;
    isPinch.value = false;
    isSwiping.value = IsSwiping.UNDETERMINED;
  };
  var resetMovementValues = function resetMovementValues() {
    'worklet';

    translateX.value = 0;
    translateY.value = 0;
    scale.value = 1;
    offsetScale.value = 1;
  };
  var onPan = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (evt.numberOfPointers === 1 && !isPinch.value) {
        if (isAndroid && hasPinched.value === HasPinched.TRUE) {
          hasPinched.value = HasPinched.FALSE;
          isSwiping.value = IsSwiping.FALSE;
          offsetX.value = translateX.value + evt.translationX;
          offsetY.value = translateY.value - evt.translationY;
        }
        if (isSwiping.value === IsSwiping.UNDETERMINED) {
          var maxXYRatio = isAndroid ? 1 : 0.25;
          if (Math.abs(evt.translationX / evt.translationY) > maxXYRatio && (Math.abs(-halfScreenWidth * (scale.value - 1) - offsetX.value) < 3 || Math.abs(halfScreenWidth * (scale.value - 1) - offsetX.value) < 3)) {
            isSwiping.value = IsSwiping.TRUE;
          }
          if (Math.abs(evt.translationY) > 25) {
            isSwiping.value = IsSwiping.FALSE;
          }
        }
        var localEvtScale = scale.value / offsetScale.value;
        translateX.value = scale.value !== offsetScale.value ? offsetX.value * localEvtScale - evt.translationX : offsetX.value - evt.translationX;
        translateY.value = isSwiping.value !== IsSwiping.TRUE ? scale.value !== offsetScale.value ? offsetY.value * localEvtScale + evt.translationY : offsetY.value + evt.translationY : translateY.value;
        scale.value = currentImageHeight * offsetScale.value < screenHeight && translateY.value > 0 ? offsetScale.value * (1 - 1 / 3 * (translateY.value / screenHeight)) : currentImageHeight * offsetScale.value > screenHeight && translateY.value > currentImageHeight / 2 * offsetScale.value - halfScreenHeight ? offsetScale.value * (1 - 1 / 3 * ((translateY.value - (currentImageHeight / 2 * offsetScale.value - halfScreenHeight)) / screenHeight)) : scale.value;
        overlayOpacity.value = localEvtScale;
      }
    },
    onFinish: function onFinish(evt) {
      if (!isPinch.value && evt.numberOfPointers < 2) {
        var finalXPosition = evt.translationX - evt.velocityX * 0.3;
        var finalYPosition = evt.translationY + evt.velocityY * 0.1;
        if (index.value < photoLength - 1 && Math.abs(halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value < 0 && finalXPosition < -halfScreenWidth && isSwiping.value === IsSwiping.TRUE) {
          (0, _reactNativeReanimated.cancelAnimation)(translationX);
          translationX.value = (0, _reactNativeReanimated.withTiming)(-(screenWidth + MARGIN) * (index.value + 1), {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            resetMovementValues();
            index.value = index.value + 1;
            (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(index.value);
          });
        } else if (index.value > 0 && Math.abs(-halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value > 0 && finalXPosition > halfScreenWidth && isSwiping.value === IsSwiping.TRUE) {
          (0, _reactNativeReanimated.cancelAnimation)(translationX);
          translationX.value = (0, _reactNativeReanimated.withTiming)(-(screenWidth + MARGIN) * (index.value - 1), {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            resetMovementValues();
            index.value = index.value - 1;
            (0, _reactNativeReanimated.runOnJS)(setSelectedIndex)(index.value);
          });
        }
        translateX.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(0) : translateX.value > halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(halfScreenWidth * (scale.value - 1), {
          duration: 200
        }) : translateX.value < -halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(-halfScreenWidth * (scale.value - 1), {
          duration: 200
        }) : (0, _reactNativeReanimated.withDecay)({
          clamp: [-halfScreenWidth * (scale.value - 1), halfScreenWidth * (scale.value - 1)],
          deceleration: 0.99,
          velocity: -evt.velocityX
        });
        translateY.value = currentImageHeight * scale.value < screenHeight ? (0, _reactNativeReanimated.withTiming)(0) : translateY.value > currentImageHeight / 2 * scale.value - halfScreenHeight ? (0, _reactNativeReanimated.withTiming)(currentImageHeight / 2 * scale.value - halfScreenHeight) : translateY.value < -currentImageHeight / 2 * scale.value + halfScreenHeight ? (0, _reactNativeReanimated.withTiming)(-currentImageHeight / 2 * scale.value + halfScreenHeight) : (0, _reactNativeReanimated.withDecay)({
          clamp: [-currentImageHeight / 2 * scale.value + halfScreenHeight, currentImageHeight / 2 * scale.value - halfScreenHeight],
          deceleration: 0.99,
          velocity: evt.velocityY
        });
        resetTouchValues();
        scale.value = scale.value !== offsetScale.value ? (0, _reactNativeReanimated.withTiming)(offsetScale.value) : offsetScale.value;
        if (finalYPosition > halfScreenHeight && offsetY.value + 8 >= currentImageHeight / 2 * scale.value - halfScreenHeight && isSwiping.value !== IsSwiping.TRUE && translateY.value !== 0 && !(Math.abs(halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value < 0 && finalXPosition < -halfScreenWidth) && !(Math.abs(-halfScreenWidth * (scale.value - 1) + offsetX.value) < 3 && translateX.value > 0 && finalXPosition > halfScreenWidth)) {
          (0, _reactNativeReanimated.cancelAnimation)(translateX);
          (0, _reactNativeReanimated.cancelAnimation)(translateY);
          (0, _reactNativeReanimated.cancelAnimation)(scale);
          overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          }, function () {
            (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
          });
          scale.value = (0, _reactNativeReanimated.withTiming)(0.6, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateY.value = evt.velocityY > 1000 ? (0, _reactNativeReanimated.withDecay)({
            velocity: evt.velocityY
          }) : (0, _reactNativeReanimated.withTiming)(halfScreenHeight + currentImageHeight / 2 * scale.value, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateX.value = (0, _reactNativeReanimated.withDecay)({
            velocity: -evt.velocityX
          });
        }
      }
    },
    onStart: function onStart() {
      if (!isPinch.value) {
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
      }
      hasPinched.value = HasPinched.FALSE;
    }
  }, [currentImageHeight, photoLength]);
  var onPinch = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (!isPinch.value && isAndroid) {
        hasPinched.value = HasPinched.TRUE;
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        isSwiping.value = IsSwiping.UNDETERMINED;
        numberOfPinchFingers.value = evt.numberOfPointers;
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
        adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
        adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);
        originX.value = adjustedFocalX.value;
        originY.value = adjustedFocalY.value;
        offsetScale.value = scale.value;
      }
      isPinch.value = true;
      scale.value = clamp(offsetScale.value * evt.scale, 1, 8);
      var localEvtScale = scale.value / offsetScale.value;
      if (scale.value !== 8 && scale.value !== 1) {
        hasHitTopScale.value = 0;
        hasHitBottomScale.value = 0;
      } else if (scale.value === 8 && hasHitTopScale.value === 0) {
        hasHitTopScale.value = 1;
        (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      } else if (scale.value === 1 && hasHitBottomScale.value === 0) {
        hasHitBottomScale.value = 1;
        (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      }
      adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
      adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);
      if (numberOfPinchFingers.value !== evt.numberOfPointers) {
        numberOfPinchFingers.value = evt.numberOfPointers;
        if (evt.numberOfPointers === 1) {
          focalOffsetX.value = oldFocalX.value - adjustedFocalX.value;
          focalOffsetY.value = oldFocalY.value - adjustedFocalY.value;
        } else if (numberOfPinchFingers.value > 1) {
          originX.value = originX.value - (oldFocalX.value / localEvtScale - adjustedFocalX.value / localEvtScale);
          originY.value = originY.value - (oldFocalY.value / localEvtScale - adjustedFocalY.value / localEvtScale);
        }
      }
      if (numberOfPinchFingers.value === 1) {
        oldFocalX.value = adjustedFocalX.value + focalOffsetX.value;
        oldFocalY.value = adjustedFocalY.value + focalOffsetY.value;
        translateX.value = offsetX.value - oldFocalX.value + localEvtScale * originX.value;
        translateY.value = offsetY.value + oldFocalY.value - localEvtScale * originY.value;
      } else if (numberOfPinchFingers.value > 1) {
        oldFocalX.value = adjustedFocalX.value;
        oldFocalY.value = adjustedFocalY.value;
        translateX.value = offsetX.value - adjustedFocalX.value + localEvtScale * originX.value;
        translateY.value = offsetY.value + adjustedFocalY.value - localEvtScale * originY.value;
      }
    },
    onFinish: function onFinish() {
      if (isPinch.value) {
        translateX.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(0) : translateX.value > halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(halfScreenWidth * (scale.value - 1)) : translateX.value < -halfScreenWidth * (scale.value - 1) ? (0, _reactNativeReanimated.withTiming)(-halfScreenWidth * (scale.value - 1)) : translateX.value;
        translateY.value = currentImageHeight * scale.value < screenHeight ? (0, _reactNativeReanimated.withTiming)(0) : translateY.value > currentImageHeight / 2 * scale.value - screenHeight / 2 ? (0, _reactNativeReanimated.withTiming)(currentImageHeight / 2 * scale.value - screenHeight / 2) : translateY.value < -currentImageHeight / 2 * scale.value + screenHeight / 2 ? (0, _reactNativeReanimated.withTiming)(-currentImageHeight / 2 * scale.value + screenHeight / 2) : translateY.value;
        offsetScale.value = scale.value < 1 ? 1 : scale.value;
        scale.value = scale.value < 1 ? (0, _reactNativeReanimated.withTiming)(1) : scale.value;
        resetTouchValues();
      }
    },
    onStart: function onStart(evt) {
      if (!isAndroid) {
        (0, _reactNativeReanimated.cancelAnimation)(translateX);
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        (0, _reactNativeReanimated.cancelAnimation)(scale);
        isPinch.value = true;
        isSwiping.value = IsSwiping.UNDETERMINED;
        numberOfPinchFingers.value = evt.numberOfPointers;
        offsetX.value = translateX.value;
        offsetY.value = translateY.value;
        adjustedFocalX.value = evt.focalX - (halfScreenWidth - offsetX.value);
        adjustedFocalY.value = evt.focalY - (halfScreenHeight + offsetY.value);
        originX.value = adjustedFocalX.value;
        originY.value = adjustedFocalY.value;
        offsetScale.value = scale.value;
      }
      hasPinched.value = HasPinched.FALSE;
    }
  }, [currentImageHeight]);
  var onSingleTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive() {
      (0, _reactNativeReanimated.cancelAnimation)(headerFooterVisible);
      headerFooterVisible.value = headerFooterVisible.value > 0 ? (0, _reactNativeReanimated.withTiming)(0) : (0, _reactNativeReanimated.withTiming)(1);
    }
  });
  var onDoubleTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      if (Math.abs(tapX.value - evt.absoluteX) < 64 && Math.abs(tapY.value - evt.absoluteY) < 64) {
        if (offsetScale.value === 1 && offsetX.value === 0 && offsetY.value === 0) {
          offsetScale.value = 2;
          scale.value = (0, _reactNativeReanimated.withTiming)(2, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateX.value = (0, _reactNativeReanimated.withTiming)(evt.absoluteX - halfScreenWidth, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          if (currentImageHeight * 2 > screenHeight) {
            var translateYTopBottom = evt.absoluteY > halfScreenHeight ? -(currentImageHeight * 2 - screenHeight) / 2 : (currentImageHeight * 2 - screenHeight) / 2;
            translateY.value = (0, _reactNativeReanimated.withTiming)(translateYTopBottom, {
              duration: 200,
              easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
            });
          }
        } else {
          offsetScale.value = 1;
          scale.value = (0, _reactNativeReanimated.withTiming)(1, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          offsetX.value = 0;
          offsetY.value = 0;
          translateX.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          translateY.value = (0, _reactNativeReanimated.withTiming)(0, {
            duration: 200,
            easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
          });
          if (headerFooterVisible.value !== 0) {
            (0, _reactNativeReanimated.cancelAnimation)(headerFooterVisible);
            headerFooterVisible.value = (0, _reactNativeReanimated.withTiming)(0);
          }
        }
      }
    },
    onStart: function onStart(evt) {
      tapX.value = evt.absoluteX;
      tapY.value = evt.absoluteY;
    }
  });
  return {
    onDoubleTap: onDoubleTap,
    onPan: onPan,
    onPinch: onPinch,
    onSingleTap: onSingleTap
  };
};
exports.useImageGalleryGestures = useImageGalleryGestures;
var clamp = function clamp(value, lowerBound, upperBound) {
  'worklet';

  return Math.min(Math.max(lowerBound, value), upperBound);
};
exports.clamp = clamp;
//# sourceMappingURL=useImageGalleryGestures.js.map