var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionList = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));
var _MessageContext = require("../../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../../contexts/themeContext/ThemeContext");
var _Unknown = require("../../../icons/Unknown");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Message/MessageSimple/ReactionList.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    left: 0,
    position: 'absolute',
    top: 0
  },
  reactionBubble: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute'
  },
  reactionBubbleBackground: {
    position: 'absolute'
  }
});
var Icon = function Icon(_ref) {
  var _supportedReactions$f;
  var pathFill = _ref.pathFill,
    size = _ref.size,
    style = _ref.style,
    supportedReactions = _ref.supportedReactions,
    type = _ref.type;
  var ReactionIcon = ((_supportedReactions$f = supportedReactions.find(function (reaction) {
    return reaction.type === type;
  })) == null ? void 0 : _supportedReactions$f.Icon) || _Unknown.Unknown;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    children: (0, _jsxRuntime.jsx)(ReactionIcon, {
      height: size,
      pathFill: pathFill,
      style: style,
      width: size
    })
  });
};
var ReactionListWithContext = function ReactionListWithContext(props) {
  var alignment = props.alignment,
    propFill = props.fill,
    message = props.message,
    messageContentWidth = props.messageContentWidth,
    _onLongPress = props.onLongPress,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    propRadius = props.radius,
    reactions = props.reactions,
    propReactionSize = props.reactionSize,
    showMessageOverlay = props.showMessageOverlay,
    propStroke = props.stroke,
    propStrokeSize = props.strokeSize,
    supportedReactions = props.supportedReactions,
    targetedMessage = props.targetedMessage;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey = _useTheme$theme$color.grey,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    grey_whisper = _useTheme$theme$color.grey_whisper,
    targetedMessageBackground = _useTheme$theme$color.targetedMessageBackground,
    white = _useTheme$theme$color.white,
    white_snow = _useTheme$theme$color.white_snow,
    _useTheme$theme$messa = _useTheme$theme.messageSimple,
    _useTheme$theme$messa2 = _useTheme$theme$messa.avatarWrapper,
    leftAlign = _useTheme$theme$messa2.leftAlign,
    spacer = _useTheme$theme$messa2.spacer,
    _useTheme$theme$messa3 = _useTheme$theme$messa.reactionList,
    container = _useTheme$theme$messa3.container,
    iconFillColor = _useTheme$theme$messa3.iconFillColor,
    middleIcon = _useTheme$theme$messa3.middleIcon,
    themeRadius = _useTheme$theme$messa3.radius,
    reactionBubble = _useTheme$theme$messa3.reactionBubble,
    reactionBubbleBackground = _useTheme$theme$messa3.reactionBubbleBackground,
    themeReactionSize = _useTheme$theme$messa3.reactionSize,
    themeStrokeSize = _useTheme$theme$messa3.strokeSize,
    screenPadding = _useTheme$theme.screenPadding;
  var width = (0, _reactNative.useWindowDimensions)().width;
  var supportedReactionTypes = supportedReactions.map(function (supportedReaction) {
    return supportedReaction.type;
  });
  var hasSupportedReactions = reactions.some(function (reaction) {
    return supportedReactionTypes.includes(reaction.type);
  });
  if (!hasSupportedReactions || messageContentWidth === 0) {
    return null;
  }
  var alignmentLeft = alignment === 'left';
  var fill = propFill || (alignmentLeft ? grey_gainsboro : grey_whisper);
  var radius = propRadius || themeRadius;
  var reactionSize = propReactionSize || themeReactionSize;
  var highlighted = message.pinned || targetedMessage === message.id;
  var stroke = propStroke || (highlighted ? targetedMessageBackground : white_snow);
  var strokeSize = propStrokeSize || themeStrokeSize;
  var x1 = alignmentLeft ? messageContentWidth + (Number(leftAlign.marginRight) || 0) + (Number(spacer.width) || 0) - radius * 0.5 : width - screenPadding * 2 - messageContentWidth;
  var x2 = x1 + radius * 2 * (alignmentLeft ? 1 : -1);
  var y1 = reactionSize + radius * 2;
  var y2 = reactionSize - radius;
  var insideLeftBound = x2 - reactionSize * reactions.length / 2 > screenPadding;
  var insideRightBound = x2 + strokeSize + reactionSize * reactions.length / 2 < width - screenPadding * 2;
  var left = reactions.length === 1 ? x1 + (alignmentLeft ? -radius : radius - reactionSize) : !insideLeftBound ? screenPadding : !insideRightBound ? width - screenPadding * 2 - reactionSize * reactions.length - strokeSize : x2 - reactionSize * reactions.length / 2 - strokeSize;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    pointerEvents: "box-none",
    style: [styles.container, {
      height: reactionSize + radius * 5,
      width: width
    }, container],
    testID: "reaction-list",
    children: reactions.length ? (0, _jsxRuntime.jsxs)(_reactNative.View, {
      pointerEvents: "box-none",
      style: [_reactNative.StyleSheet.absoluteFill],
      children: [(0, _jsxRuntime.jsxs)(_reactNativeSvg["default"], {
        pointerEvents: "none",
        children: [(0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x1,
          cy: y1,
          fill: stroke,
          r: radius + strokeSize * 3
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x2,
          cy: y2,
          fill: stroke,
          r: radius * 2 + strokeSize * 3
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x1,
          cy: y1,
          fill: fill,
          r: radius + strokeSize
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x2,
          cy: y2,
          fill: fill,
          r: radius * 2 + strokeSize
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x1,
          cy: y1,
          fill: alignmentLeft ? fill : white,
          r: radius
        }), (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
          cx: x2,
          cy: y2,
          fill: alignmentLeft ? fill : white,
          r: radius * 2
        })]
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.reactionBubbleBackground, {
          backgroundColor: alignmentLeft ? fill : white,
          borderColor: fill,
          borderRadius: reactionSize,
          borderWidth: strokeSize,
          height: reactionSize,
          left: left,
          width: reactionSize * reactions.length
        }, reactionBubbleBackground]
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        pointerEvents: "none",
        style: [_reactNative.StyleSheet.absoluteFill],
        children: (0, _jsxRuntime.jsx)(_reactNativeSvg["default"], {
          children: (0, _jsxRuntime.jsx)(_reactNativeSvg.Circle, {
            cx: x2,
            cy: y2,
            fill: alignmentLeft ? fill : white,
            r: radius * 2
          })
        })
      }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
        disabled: preventPress,
        onLongPress: function onLongPress(event) {
          if (_onLongPress) {
            _onLongPress({
              emitter: 'reactionList',
              event: event
            });
          }
        },
        onPress: function onPress(event) {
          if (_onPress) {
            _onPress({
              defaultHandler: function defaultHandler() {
                return showMessageOverlay(true);
              },
              emitter: 'reactionList',
              event: event
            });
          }
        },
        onPressIn: function onPressIn(event) {
          if (_onPressIn) {
            _onPressIn({
              defaultHandler: function defaultHandler() {
                return showMessageOverlay(true);
              },
              emitter: 'reactionList',
              event: event
            });
          }
        },
        style: [styles.reactionBubble, {
          backgroundColor: alignmentLeft ? fill : white,
          borderRadius: reactionSize - strokeSize * 2,
          height: reactionSize - strokeSize * 2,
          left: left + strokeSize,
          top: strokeSize,
          width: reactionSize * reactions.length - strokeSize * 2
        }, reactionBubble],
        children: reactions.map(function (reaction) {
          return (0, _jsxRuntime.jsx)(Icon, {
            pathFill: reaction.own ? iconFillColor || accent_blue : grey,
            size: reactionSize / 2,
            style: middleIcon,
            supportedReactions: supportedReactions,
            type: reaction.type
          }, reaction.type);
        })
      })]
    }) : null
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMessage = prevProps.message,
    prevMessageContentWidth = prevProps.messageContentWidth,
    prevTargetedMessage = prevProps.targetedMessage;
  var nextMessage = nextProps.message,
    nextMessageContentWidth = nextProps.messageContentWidth,
    nextTargetedMessage = nextProps.targetedMessage;
  var messageContentWidthEqual = prevMessageContentWidth === nextMessageContentWidth;
  if (!messageContentWidthEqual) return false;
  var messagePinnedEqual = prevMessage.pinned === nextMessage.pinned;
  if (!messagePinnedEqual) return false;
  var targetedMessageEqual = prevTargetedMessage === nextTargetedMessage;
  if (!targetedMessageEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage.latest_reactions) && Array.isArray(nextMessage.latest_reactions) ? prevMessage.latest_reactions.length === nextMessage.latest_reactions.length && prevMessage.latest_reactions.every(function (_ref2, index) {
    var _nextMessage$latest_r;
    var type = _ref2.type;
    return type === ((_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  }) : prevMessage.latest_reactions === nextMessage.latest_reactions;
  if (!latestReactionsEqual) return false;
  return true;
};
var MemoizedReactionList = _react["default"].memo(ReactionListWithContext, areEqual);
var ReactionList = function ReactionList(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    alignment = _useMessageContext.alignment,
    message = _useMessageContext.message,
    onLongPress = _useMessageContext.onLongPress,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    preventPress = _useMessageContext.preventPress,
    reactions = _useMessageContext.reactions,
    showMessageOverlay = _useMessageContext.showMessageOverlay;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    supportedReactions = _useMessagesContext.supportedReactions,
    targetedMessage = _useMessagesContext.targetedMessage;
  return (0, _jsxRuntime.jsx)(MemoizedReactionList, Object.assign({
    alignment: alignment,
    message: message,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    reactions: reactions,
    showMessageOverlay: showMessageOverlay,
    supportedReactions: supportedReactions,
    targetedMessage: targetedMessage
  }, props));
};
exports.ReactionList = ReactionList;
//# sourceMappingURL=ReactionList.js.map