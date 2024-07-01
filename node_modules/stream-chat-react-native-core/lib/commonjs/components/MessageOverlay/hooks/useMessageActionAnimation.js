Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMessageActionAnimation = void 0;
var _reactNativeReanimated = require("react-native-reanimated");
var useMessageActionAnimation = function useMessageActionAnimation(_ref) {
  var action = _ref.action,
    _ref$activeOpacity = _ref.activeOpacity,
    activeOpacity = _ref$activeOpacity === void 0 ? 0.2 : _ref$activeOpacity;
  var opacity = (0, _reactNativeReanimated.useSharedValue)(1);
  var onTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onEnd: function onEnd() {
      (0, _reactNativeReanimated.runOnJS)(action)();
    },
    onFinish: function onFinish() {
      opacity.value = 1;
    },
    onStart: function onStart() {
      opacity.value = activeOpacity;
    }
  }, [action]);
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: opacity.value
    };
  });
  return {
    animatedStyle: animatedStyle,
    onTap: onTap,
    opacity: opacity
  };
};
exports.useMessageActionAnimation = useMessageActionAnimation;
//# sourceMappingURL=useMessageActionAnimation.js.map