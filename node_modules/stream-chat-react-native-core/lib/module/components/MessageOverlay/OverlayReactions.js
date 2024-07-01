var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayReactions = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/OverlayReactions.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  avatarContainer: {
    padding: 8
  },
  avatarInnerContainer: {
    alignSelf: 'center'
  },
  avatarName: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 6,
    textAlign: 'center'
  },
  avatarNameContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1
  },
  container: {
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 8,
    width: '100%'
  },
  flatListContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  flatListContentContainer: {
    alignItems: 'center',
    paddingBottom: 12
  },
  reactionBubble: {
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    position: 'absolute'
  },
  reactionBubbleBackground: {
    borderRadius: 24,
    height: 24,
    position: 'absolute',
    width: 24
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 16
  },
  unseenItemContainer: {
    opacity: 0,
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
var ReactionIcon = function ReactionIcon(_ref) {
  var _supportedReactions$f;
  var pathFill = _ref.pathFill,
    size = _ref.size,
    supportedReactions = _ref.supportedReactions,
    type = _ref.type;
  var Icon = ((_supportedReactions$f = supportedReactions.find(function (reaction) {
    return reaction.type === type;
  })) == null ? void 0 : _supportedReactions$f.Icon) || _icons.Unknown;
  return (0, _jsxRuntime.jsx)(Icon, {
    height: size,
    pathFill: pathFill,
    width: size
  });
};
var OverlayReactions = function OverlayReactions(props) {
  var overlayAlignment = props.alignment,
    OverlayReactionsAvatar = props.OverlayReactionsAvatar,
    reactions = props.reactions,
    showScreen = props.showScreen,
    _props$supportedReact = props.supportedReactions,
    supportedReactions = _props$supportedReact === void 0 ? reactionData : _props$supportedReact,
    title = props.title;
  var layoutHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var layoutWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  var _React$useState = _react["default"].useState(0),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    itemHeight = _React$useState2[0],
    setItemHeight = _React$useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    white = _useTheme$theme$color.white,
    _useTheme$theme$overl = _useTheme$theme.overlay,
    overlayPadding = _useTheme$theme$overl.padding,
    _useTheme$theme$overl2 = _useTheme$theme$overl.reactions,
    avatarContainer = _useTheme$theme$overl2.avatarContainer,
    avatarName = _useTheme$theme$overl2.avatarName,
    avatarSize = _useTheme$theme$overl2.avatarSize,
    container = _useTheme$theme$overl2.container,
    flatListContainer = _useTheme$theme$overl2.flatListContainer,
    radius = _useTheme$theme$overl2.radius,
    reactionBubble = _useTheme$theme$overl2.reactionBubble,
    reactionBubbleBackground = _useTheme$theme$overl2.reactionBubbleBackground,
    reactionBubbleBorderRadius = _useTheme$theme$overl2.reactionBubbleBorderRadius,
    titleStyle = _useTheme$theme$overl2.title;
  var width = (0, _reactNative.useWindowDimensions)().width;
  var supportedReactionTypes = supportedReactions.map(function (supportedReaction) {
    return supportedReaction.type;
  });
  var filteredReactions = reactions.filter(function (reaction) {
    return supportedReactionTypes.includes(reaction.type);
  });
  var numColumns = Math.floor((width - overlayPadding * 2 - ((Number(flatListContainer.paddingHorizontal || 0) || styles.flatListContainer.paddingHorizontal) + (Number(avatarContainer.padding || 0) || styles.avatarContainer.padding)) * 2) / (avatarSize + (Number(avatarContainer.padding || 0) || styles.avatarContainer.padding) * 2));
  var renderItem = function renderItem(_ref2) {
    var item = _ref2.item;
    var _item$alignment = item.alignment,
      alignment = _item$alignment === void 0 ? 'left' : _item$alignment,
      name = item.name,
      type = item.type;
    var x = avatarSize / 2 - avatarSize / (radius * 4) * (alignment === 'left' ? 1 : -1);
    var y = avatarSize - radius;
    var left = alignment === 'left' ? x - (Number(reactionBubbleBackground.width || 0) || styles.reactionBubbleBackground.width) + radius : x - radius;
    var top = y - radius - (Number(reactionBubbleBackground.height || 0) || styles.reactionBubbleBackground.height);
    return (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.avatarContainer, avatarContainer],
      children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.avatarInnerContainer,
        children: [(0, _jsxRuntime.jsx)(OverlayReactionsAvatar, {
          reaction: item,
          size: avatarSize
        }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [_reactNative.StyleSheet.absoluteFill],
          children: [(0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], {
            children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
              cx: x - (radius * 2 - radius / 4) * (alignment === 'left' ? 1 : -1),
              cy: y - radius * 2 - radius / 4,
              fill: alignment === 'left' ? grey_gainsboro : white,
              r: radius * 2,
              stroke: alignment === 'left' ? white : grey_gainsboro,
              strokeWidth: radius / 2
            }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
              cx: x,
              cy: y,
              fill: alignment === 'left' ? grey_gainsboro : white,
              r: radius,
              stroke: alignment === 'left' ? white : grey_gainsboro,
              strokeWidth: radius / 2
            })]
          }), (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.reactionBubbleBackground, {
              backgroundColor: alignment === 'left' ? grey_gainsboro : white,
              borderColor: alignment === 'left' ? white : grey_gainsboro,
              borderWidth: radius / 2,
              left: left,
              top: top
            }, reactionBubbleBackground]
          }), (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [_reactNative.StyleSheet.absoluteFill],
            children: (0, _jsxRuntime.jsx)(_reactNativeSvg["default"], {
              children: (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
                cx: x - (radius * 2 - radius / 4) * (alignment === 'left' ? 1 : -1),
                cy: y - radius * 2 - radius / 4,
                fill: alignment === 'left' ? grey_gainsboro : white,
                r: radius * 2 - radius / 2
              })
            })
          }), (0, _jsxRuntime.jsx)(_reactNative.View, {
            style: [styles.reactionBubble, {
              backgroundColor: alignment === 'left' ? grey_gainsboro : white,
              height: (reactionBubbleBorderRadius || styles.reactionBubble.borderRadius) - radius / 2,
              left: left,
              top: top,
              width: (reactionBubbleBorderRadius || styles.reactionBubble.borderRadius) - radius / 2
            }, reactionBubble],
            children: (0, _jsxRuntime.jsx)(ReactionIcon, {
              pathFill: accent_blue,
              size: (reactionBubbleBorderRadius || styles.reactionBubble.borderRadius) / 2,
              supportedReactions: supportedReactions,
              type: type
            })
          })]
        })]
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: styles.avatarNameContainer,
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          numberOfLines: 2,
          style: [styles.avatarName, {
            color: black
          }, avatarName],
          children: name
        })
      })]
    });
  };
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [-layoutHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [overlayAlignment === 'left' ? -layoutWidth.value / 2 : layoutWidth.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [overlayAlignment]);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
      onLayout: function onLayout(_ref3) {
        var layout = _ref3.nativeEvent.layout;
        layoutWidth.value = layout.width;
        layoutHeight.value = layout.height;
      },
      style: [styles.container, {
        backgroundColor: white,
        opacity: itemHeight ? 1 : 0
      }, container, showScreenStyle],
      children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.title, {
          color: black
        }, titleStyle],
        children: title
      }), (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.FlatList, {
        contentContainerStyle: styles.flatListContentContainer,
        data: filteredReactions,
        keyExtractor: function keyExtractor(_ref4, index) {
          var name = _ref4.name;
          return "".concat(name, "_").concat(index);
        },
        numColumns: numColumns,
        renderItem: renderItem,
        scrollEnabled: filteredReactions.length / numColumns > 1,
        style: [styles.flatListContainer, flatListContainer, {
          maxHeight: itemHeight + (filteredReactions.length / numColumns > 1 ? itemHeight / 4 : 8)
        }]
      }, numColumns), (0, _jsxRuntime.jsx)(_reactNative.View, {
        onLayout: function onLayout(_ref5) {
          var layout = _ref5.nativeEvent.layout;
          setItemHeight(layout.height);
        },
        style: [styles.unseenItemContainer, styles.flatListContentContainer],
        children: renderItem({
          item: filteredReactions[0]
        })
      })]
    })
  });
};
exports.OverlayReactions = OverlayReactions;
OverlayReactions.displayName = 'OverlayReactions{overlay{reactions}}';
//# sourceMappingURL=OverlayReactions.js.map