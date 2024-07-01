var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionButton = exports.OverlayReactionList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _native = require("../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayReactionList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var AnimatedCircle = _reactNativeReanimated["default"].createAnimatedComponent ? _reactNativeReanimated["default"].createAnimatedComponent(_reactNativeSvg.Circle) : _reactNativeSvg.Circle;
var styles = _reactNative.StyleSheet.create({
  notLastReaction: {
    marginRight: 16
  },
  reactionList: {
    alignItems: 'center',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute'
  },
  selectedIcon: {
    position: 'absolute'
  }
});
var reactionData = [{
  Icon: _icons.LoveReaction,
  type: 'love'
}, {
  Icon: _icons.ThumbsUpReaction,
  type: 'like'
}, {
  Icon: _icons.ThumbsDownReaction,
  type: 'sad'
}, {
  Icon: _icons.LOLReaction,
  type: 'haha'
}, {
  Icon: _icons.WutReaction,
  type: 'wow'
}];
var ReactionButton = function ReactionButton(props) {
  var handleReaction = props.handleReaction,
    Icon = props.Icon,
    index = props.index,
    numberOfReactions = props.numberOfReactions,
    ownReactionTypes = props.ownReactionTypes,
    setOverlay = props.setOverlay,
    showScreen = props.showScreen,
    type = props.type;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    _useTheme$theme$overl = _useTheme$theme.overlay.reactionsList,
    reaction = _useTheme$theme$overl.reaction,
    reactionSize = _useTheme$theme$overl.reactionSize;
  var selected = ownReactionTypes.includes(type);
  var animationScale = (0, _reactNativeReanimated.useSharedValue)(0);
  var hasShown = (0, _reactNativeReanimated.useSharedValue)(0);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var selectedOpacity = (0, _reactNativeReanimated.useSharedValue)(selected ? 1 : 0);
  var onTap = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onEnd: function onEnd() {
      (0, _reactNativeReanimated.runOnJS)(_native.triggerHaptic)('impactLight');
      selectedOpacity.value = (0, _reactNativeReanimated.withTiming)(selected ? 0 : 1, {
        duration: 250
      }, function () {
        if (handleReaction) {
          (0, _reactNativeReanimated.runOnJS)(handleReaction)(type);
        }
        (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
      });
    },
    onFinish: function onFinish() {
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1, {
        duration: 100
      });
    },
    onStart: function onStart() {
      (0, _reactNativeReanimated.cancelAnimation)(scale);
      scale.value = (0, _reactNativeReanimated.withTiming)(1.5, {
        duration: 100
      });
    }
  }, [handleReaction, selected, setOverlay, type]);
  (0, _reactNativeReanimated.useAnimatedReaction)(function () {
    if (showScreen.value > 0.8 && hasShown.value === 0) {
      return 1;
    }
    return 0;
  }, function (result) {
    if (hasShown.value === 0 && result !== 0) {
      hasShown.value = 1;
      animationScale.value = (0, _reactNativeReanimated.withSequence)((0, _reactNativeReanimated.withDelay)(60 * (numberOfReactions - (index + 1)), (0, _reactNativeReanimated.withTiming)(0.1, {
        duration: 50
      })), (0, _reactNativeReanimated.withTiming)(1.5, {
        duration: 250
      }), (0, _reactNativeReanimated.withTiming)(1, {
        duration: 250
      }));
    }
  }, [index, numberOfReactions]);
  var iconStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        scale: animationScale.value
      }, {
        scale: scale.value
      }]
    };
  }, []);
  var selectedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      opacity: selectedOpacity.value
    };
  });
  return (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TapGestureHandler, {
    hitSlop: {
      bottom: Number(reaction.paddingVertical || 0) || Number(reaction.paddingBottom || 0) || styles.reactionList.paddingVertical,
      left: (Number(reaction.paddingHorizontal || 0) || Number(reaction.paddingLeft || 0) || styles.notLastReaction.marginRight) / 2,
      right: (Number(reaction.paddingHorizontal || 0) || Number(reaction.paddingRight || 0) || styles.notLastReaction.marginRight) / 2,
      top: Number(reaction.paddingVertical || 0) || Number(reaction.paddingTop || 0) || styles.reactionList.paddingVertical
    },
    maxDurationMs: 3000,
    onHandlerStateChange: onTap,
    children: (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
      style: [index !== numberOfReactions - 1 ? styles.notLastReaction : {}, reaction, iconStyle],
      children: [(0, _jsxRuntime.jsx)(Icon, {
        height: reactionSize,
        pathFill: grey,
        width: reactionSize
      }), (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        style: [styles.selectedIcon, selectedStyle],
        children: (0, _jsxRuntime.jsx)(Icon, {
          height: reactionSize,
          pathFill: accent_blue,
          width: reactionSize
        })
      })]
    })
  });
};
exports.ReactionButton = ReactionButton;
var OverlayReactionListWithContext = function OverlayReactionListWithContext(props) {
  var alignment = props.alignment,
    fill = props.fill,
    handleReaction = props.handleReaction,
    messageLayout = props.messageLayout,
    ownReactionTypes = props.ownReactionTypes,
    setOverlay = props.setOverlay,
    setReactionListHeight = props.setReactionListHeight,
    showScreen = props.showScreen,
    _props$supportedReact = props.supportedReactions,
    supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    white_snow = _useTheme2$theme.colors.white_snow,
    _useTheme2$theme$over = _useTheme2$theme.overlay,
    screenPadding = _useTheme2$theme$over.padding,
    _useTheme2$theme$over2 = _useTheme2$theme$over.reactionsList,
    radius = _useTheme2$theme$over2.radius,
    reactionList = _useTheme2$theme$over2.reactionList,
    reactionListBorderRadius = _useTheme2$theme$over2.reactionListBorderRadius;
  var reactionListHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var reactionBubbleWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  var reactionListLayout = (0, _reactNativeReanimated.useSharedValue)({
    height: 0,
    width: 0
  });
  var _useWindowDimensions = (0, _reactNative.useWindowDimensions)(),
    width = _useWindowDimensions.width;
  var animatedStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    var borderRadius = reactionListBorderRadius || styles.reactionList.borderRadius;
    var insideLeftBound = messageLayout.value.x - reactionListLayout.value.width + borderRadius > screenPadding;
    var insideRightBound = messageLayout.value.x + borderRadius < width - screenPadding;
    var left = !insideLeftBound ? screenPadding : !insideRightBound ? width - screenPadding - reactionListLayout.value.width : messageLayout.value.x - reactionListLayout.value.width + borderRadius;
    var top = messageLayout.value.y - reactionListLayout.value.height - radius * 2;
    return {
      left: left,
      top: top
    };
  });
  var animatedBigCircleProps = (0, _reactNativeReanimated.useAnimatedProps)(function () {
    return {
      cx: messageLayout.value.x - radius * 3,
      cy: messageLayout.value.y - radius * 3,
      r: radius * 2
    };
  });
  var animateSmallCircleProps = (0, _reactNativeReanimated.useAnimatedProps)(function () {
    return {
      cx: messageLayout.value.x - radius,
      cy: messageLayout.value.y,
      r: radius
    };
  });
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-reactionListHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -reactionBubbleWidth.value / 2 : reactionBubbleWidth.value / 2, 0])
      }, {
        scale: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 0.8, 1], [0, 0, 1])
      }]
    };
  }, [alignment]);
  var numberOfReactions = supportedReactions.length;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: _reactNative.StyleSheet.absoluteFill,
    testID: "overlay-reaction-list",
    children: (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
      onLayout: function onLayout(_ref) {
        var layout = _ref.nativeEvent.layout;
        reactionBubbleWidth.value = layout.width;
      },
      style: showScreenStyle,
      children: [(0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], {
        children: [(0, _jsxRuntime.jsx)(AnimatedCircle, {
          animatedProps: animatedBigCircleProps,
          fill: fill || white_snow
        }), (0, _jsxRuntime.jsx)(AnimatedCircle, {
          animatedProps: animateSmallCircleProps,
          fill: fill || white_snow
        })]
      }), (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        onLayout: function onLayout(_ref2) {
          var _ref2$nativeEvent$lay = _ref2.nativeEvent.layout,
            height = _ref2$nativeEvent$lay.height,
            layoutWidth = _ref2$nativeEvent$lay.width;
          reactionListLayout.value = {
            height: height,
            width: layoutWidth
          };
          reactionListHeight.value = height;
          setReactionListHeight(height);
        },
        style: [styles.reactionList, {
          backgroundColor: white_snow
        }, animatedStyle, reactionList],
        children: supportedReactions == null ? void 0 : supportedReactions.map(function (_ref3, index) {
          var Icon = _ref3.Icon,
            type = _ref3.type;
          return (0, _jsxRuntime.jsx)(ReactionButton, {
            handleReaction: handleReaction,
            Icon: Icon,
            index: index,
            numberOfReactions: numberOfReactions,
            ownReactionTypes: ownReactionTypes,
            setOverlay: setOverlay,
            showScreen: showScreen,
            type: type
          }, "".concat(type, "_").concat(index));
        })
      })]
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
    prevOwnReactionTypes = prevProps.ownReactionTypes;
  var nextAlignment = nextProps.alignment,
    nextOwnReactionTypes = nextProps.ownReactionTypes;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var ownReactionTypesEqual = prevOwnReactionTypes.length === nextOwnReactionTypes.length;
  if (!ownReactionTypesEqual) return false;
  return true;
};
var MemoizedOverlayReactionList = _react["default"].memo(OverlayReactionListWithContext, areEqual);
var OverlayReactionList = function OverlayReactionList(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
    data = _useMessageOverlayCon.data;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    supportedReactions = _useMessagesContext.supportedReactions;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    setOverlay = _useOverlayContext.setOverlay;
  return (0, _jsxRuntime.jsx)(MemoizedOverlayReactionList, Object.assign({}, data || {}, {
    setOverlay: setOverlay,
    supportedReactions: supportedReactions
  }, props));
};
exports.OverlayReactionList = OverlayReactionList;
OverlayReactionList.displayName = 'OverlayReactionList{overlay{reactionList}}';
//# sourceMappingURL=OverlayReactionList.js.map