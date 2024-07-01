var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageOverlay = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeGestureHandler = require("react-native-gesture-handler");
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
var _MessageActionList = require("./MessageActionList");
var _OverlayReactionList = require("./OverlayReactionList");
var _OverlayReactionsAvatar = require("./OverlayReactionsAvatar");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessageOverlayContext = require("../../contexts/messageOverlayContext/MessageOverlayContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _MessageTextContainer = require("../Message/MessageSimple/MessageTextContainer");
var _OverlayReactions = require("../MessageOverlay/OverlayReactions");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageOverlay/MessageOverlay.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-start'
  },
  center: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  containerInner: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    overflow: 'hidden'
  },
  flex: {
    flex: 1
  },
  overlayPadding: {
    padding: 8
  },
  replyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8
  },
  row: {
    flexDirection: 'row'
  },
  scrollView: {
    overflow: _reactNative.Platform.OS === 'ios' ? 'visible' : 'scroll'
  }
});
var DefaultMessageTextNumberOfLines = 5;
var MessageOverlayWithContext = function MessageOverlayWithContext(props) {
  var _message$user;
  var alignment = props.alignment,
    chatContext = props.chatContext,
    clientId = props.clientId,
    error = props.error,
    files = props.files,
    groupStyles = props.groupStyles,
    handleReaction = props.handleReaction,
    images = props.images,
    isMyMessage = props.isMyMessage,
    isThreadMessage = props.isThreadMessage,
    message = props.message,
    _props$MessageActionL = props.MessageActionList,
    MessageActionList = _props$MessageActionL === void 0 ? _MessageActionList.MessageActionList : _props$MessageActionL,
    MessageActionListItem = props.MessageActionListItem,
    messageActions = props.messageActions,
    messageContext = props.messageContext,
    messageReactions = props.messageReactions,
    messageReactionTitle = props.messageReactionTitle,
    messagesContext = props.messagesContext,
    _props$messageTextNum = props.messageTextNumberOfLines,
    messageTextNumberOfLines = _props$messageTextNum === void 0 ? DefaultMessageTextNumberOfLines : _props$messageTextNum,
    onlyEmojis = props.onlyEmojis,
    otherAttachments = props.otherAttachments,
    overlay = props.overlay,
    overlayOpacity = props.overlayOpacity,
    _props$OverlayReactio = props.OverlayReactionList,
    OverlayReactionList = _props$OverlayReactio === void 0 ? _OverlayReactionList.OverlayReactionList : _props$OverlayReactio,
    _props$OverlayReactio2 = props.OverlayReactions,
    OverlayReactions = _props$OverlayReactio2 === void 0 ? _OverlayReactions.OverlayReactions : _props$OverlayReactio2,
    _props$OverlayReactio3 = props.OverlayReactionsAvatar,
    OverlayReactionsAvatar = _props$OverlayReactio3 === void 0 ? _OverlayReactionsAvatar.OverlayReactionsAvatar : _props$OverlayReactio3,
    ownCapabilities = props.ownCapabilities,
    setOverlay = props.setOverlay,
    threadList = props.threadList,
    videos = props.videos;
  var messageActionProps = {
    error: error,
    isMyMessage: isMyMessage,
    isThreadMessage: isThreadMessage,
    message: message,
    messageReactions: messageReactions
  };
  var _useTheme = (0, _ThemeContext.useTheme)(),
    theme = _useTheme.theme;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vh = _useViewport.vh,
    vw = _useViewport.vw;
  var screenHeight = vh(100);
  var halfScreenHeight = vh(50);
  var myMessageTheme = messagesContext == null ? void 0 : messagesContext.myMessageTheme;
  var wrapMessageInTheme = clientId === (message == null ? void 0 : (_message$user = message.user) == null ? void 0 : _message$user.id) && !!myMessageTheme;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    reactionListHeight = _useState2[0],
    setReactionListHeight = _useState2[1];
  var myMessageThemeString = (0, _react.useMemo)(function () {
    return JSON.stringify(myMessageTheme);
  }, [myMessageTheme]);
  var modifiedTheme = (0, _react.useMemo)(function () {
    return (0, _ThemeContext.mergeThemes)({
      style: myMessageTheme,
      theme: theme
    });
  }, [myMessageThemeString, theme]);
  var _ref = wrapMessageInTheme ? modifiedTheme : theme,
    _ref$colors = _ref.colors,
    blue_alice = _ref$colors.blue_alice,
    grey_gainsboro = _ref$colors.grey_gainsboro,
    grey_whisper = _ref$colors.grey_whisper,
    transparent = _ref$colors.transparent,
    white_smoke = _ref$colors.white_smoke,
    _ref$messageSimple$co = _ref.messageSimple.content,
    _ref$messageSimple$co2 = _ref$messageSimple$co.container,
    borderRadiusL = _ref$messageSimple$co2.borderRadiusL,
    borderRadiusS = _ref$messageSimple$co2.borderRadiusS,
    containerInner = _ref$messageSimple$co.containerInner,
    replyContainer = _ref$messageSimple$co.replyContainer,
    _ref$overlay = _ref.overlay,
    containerStyle = _ref$overlay.container,
    overlayPadding = _ref$overlay.padding;
  var messageHeight = (0, _reactNativeReanimated.useSharedValue)(0);
  var messageLayout = (0, _reactNativeReanimated.useSharedValue)({
    x: 0,
    y: 0
  });
  var messageWidth = (0, _reactNativeReanimated.useSharedValue)(0);
  var offsetY = (0, _reactNativeReanimated.useSharedValue)(0);
  var translateY = (0, _reactNativeReanimated.useSharedValue)(0);
  var scale = (0, _reactNativeReanimated.useSharedValue)(1);
  var showScreen = (0, _reactNativeReanimated.useSharedValue)(0);
  var fadeScreen = function fadeScreen() {
    'worklet';

    offsetY.value = 0;
    translateY.value = 0;
    scale.value = 1;
    showScreen.value = (0, _reactNativeReanimated.withSpring)(1, {
      damping: 600,
      mass: 0.5,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
      stiffness: 200,
      velocity: 32
    });
  };
  (0, _react.useEffect)(function () {
    _reactNative.Keyboard.dismiss();
    fadeScreen();
  }, []);
  var onPan = (0, _reactNativeReanimated.useAnimatedGestureHandler)({
    onActive: function onActive(evt) {
      translateY.value = offsetY.value + evt.translationY;
      overlayOpacity.value = (0, _reactNativeReanimated.interpolate)(translateY.value, [0, halfScreenHeight], [1, 0.75], _reactNativeReanimated.Extrapolate.CLAMP);
      scale.value = (0, _reactNativeReanimated.interpolate)(translateY.value, [0, halfScreenHeight], [1, 0.85], _reactNativeReanimated.Extrapolate.CLAMP);
    },
    onFinish: function onFinish(evt) {
      var finalYPosition = evt.translationY + evt.velocityY * 0.1;
      if (finalYPosition > halfScreenHeight && translateY.value > 0) {
        (0, _reactNativeReanimated.cancelAnimation)(translateY);
        overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(0, {
          duration: 200,
          easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
        }, function () {
          (0, _reactNativeReanimated.runOnJS)(setOverlay)('none');
        });
        translateY.value = evt.velocityY > 1000 ? (0, _reactNativeReanimated.withDecay)({
          velocity: evt.velocityY
        }) : (0, _reactNativeReanimated.withTiming)(screenHeight, {
          duration: 200,
          easing: _reactNativeReanimated.Easing.out(_reactNativeReanimated.Easing.ease)
        });
      } else {
        translateY.value = (0, _reactNativeReanimated.withTiming)(0);
        scale.value = (0, _reactNativeReanimated.withTiming)(1);
        overlayOpacity.value = (0, _reactNativeReanimated.withTiming)(1);
      }
    },
    onStart: function onStart() {
      (0, _reactNativeReanimated.cancelAnimation)(translateY);
      offsetY.value = translateY.value;
    }
  });
  var panStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: translateY.value
      }, {
        scale: scale.value
      }]
    };
  });
  var showScreenStyle = (0, _reactNativeReanimated.useAnimatedStyle)(function () {
    return {
      transform: [{
        translateY: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [messageHeight.value / 2, 0])
      }, {
        translateX: (0, _reactNativeReanimated.interpolate)(showScreen.value, [0, 1], [alignment === 'left' ? -messageWidth.value / 2 : messageWidth.value / 2, 0])
      }, {
        scale: showScreen.value
      }]
    };
  }, [alignment]);
  var groupStyle = "".concat(alignment, "_").concat(((groupStyles == null ? void 0 : groupStyles[0]) || 'bottom').toLowerCase());
  var hasThreadReplies = !!(message != null && message.reply_count);
  var _ref2 = messagesContext || {},
    Attachment = _ref2.Attachment,
    FileAttachmentGroup = _ref2.FileAttachmentGroup,
    Gallery = _ref2.Gallery,
    MessageAvatar = _ref2.MessageAvatar,
    Reply = _ref2.Reply;
  var renderContent = function renderContent(messageTextNumberOfLines) {
    var _message$own_reaction, _messagesContext$mess;
    return (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.TapGestureHandler, {
      maxDist: 32,
      onHandlerStateChange: function onHandlerStateChange(_ref3) {
        var state = _ref3.nativeEvent.state;
        if (state === _reactNativeGestureHandler.State.END) {
          setOverlay('none');
        }
      },
      children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
        style: [styles.flex, panStyle],
        children: message && (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.center, styles.overlayPadding, {
            padding: overlayPadding
          }, alignment === 'left' ? styles.alignStart : styles.alignEnd],
          children: [handleReaction && ownCapabilities != null && ownCapabilities.sendReaction ? (0, _jsxRuntime.jsx)(OverlayReactionList, {
            messageLayout: messageLayout,
            ownReactionTypes: (message == null ? void 0 : (_message$own_reaction = message.own_reactions) == null ? void 0 : _message$own_reaction.map(function (reaction) {
              return reaction.type;
            })) || [],
            setReactionListHeight: setReactionListHeight,
            showScreen: showScreen
          }) : null, (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
            onLayout: function onLayout(_ref4) {
              var _ref4$nativeEvent$lay = _ref4.nativeEvent.layout,
                layoutHeight = _ref4$nativeEvent$lay.height,
                layoutWidth = _ref4$nativeEvent$lay.width,
                x = _ref4$nativeEvent$lay.x,
                y = _ref4$nativeEvent$lay.y;
              messageLayout.value = {
                x: alignment === 'left' ? x + layoutWidth : x,
                y: y
              };
              messageWidth.value = layoutWidth;
              messageHeight.value = layoutHeight;
            },
            style: [styles.alignEnd, styles.row, showScreenStyle],
            children: [alignment === 'left' && MessageAvatar && (0, _jsxRuntime.jsx)(MessageAvatar, {
              alignment: alignment,
              message: message,
              showAvatar: true
            }), (0, _jsxRuntime.jsx)(_reactNative.View, {
              pointerEvents: "none",
              style: [styles.containerInner, {
                backgroundColor: onlyEmojis && !message.quoted_message ? transparent : otherAttachments != null && otherAttachments.length ? otherAttachments[0].type === 'giphy' ? !message.quoted_message ? transparent : grey_gainsboro : blue_alice : alignment === 'left' ? white_smoke : grey_gainsboro,
                borderBottomLeftRadius: (groupStyle === 'left_bottom' || groupStyle === 'left_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
                borderBottomRightRadius: (groupStyle === 'right_bottom' || groupStyle === 'right_single') && (!hasThreadReplies || threadList) ? borderRadiusS : borderRadiusL,
                borderColor: grey_whisper
              }, onlyEmojis && !message.quoted_message || otherAttachments != null && otherAttachments.length ? {
                borderWidth: 0
              } : {}, containerInner],
              children: messagesContext == null ? void 0 : (_messagesContext$mess = messagesContext.messageContentOrder) == null ? void 0 : _messagesContext$mess.map(function (messageContentType, messageContentOrderIndex) {
                switch (messageContentType) {
                  case 'quoted_reply':
                    return message.quoted_message && Reply && (0, _jsxRuntime.jsx)(_reactNative.View, {
                      style: [styles.replyContainer, replyContainer],
                      children: (0, _jsxRuntime.jsx)(Reply, {
                        quotedMessage: message.quoted_message,
                        styles: {
                          messageContainer: {
                            maxWidth: vw(60)
                          }
                        }
                      })
                    }, "quoted_reply_".concat(messageContentOrderIndex));
                  case 'attachments':
                    return otherAttachments == null ? void 0 : otherAttachments.map(function (attachment, attachmentIndex) {
                      return Attachment && (0, _jsxRuntime.jsx)(Attachment, {
                        attachment: attachment
                      }, "".concat(message.id, "-").concat(attachmentIndex));
                    });
                  case 'files':
                    return FileAttachmentGroup && (0, _jsxRuntime.jsx)(FileAttachmentGroup, {
                      files: files,
                      messageId: message.id
                    }, "file_attachment_group_".concat(messageContentOrderIndex));
                  case 'gallery':
                    return Gallery && (0, _jsxRuntime.jsx)(Gallery, {
                      alignment: alignment,
                      groupStyles: groupStyles,
                      hasThreadReplies: !!(message != null && message.reply_count),
                      images: images,
                      message: message,
                      threadList: threadList,
                      videos: videos
                    }, "gallery_".concat(messageContentOrderIndex));
                  case 'text':
                  default:
                    return otherAttachments != null && otherAttachments.length && otherAttachments[0].actions ? null : (0, _jsxRuntime.jsx)(_MessageTextContainer.MessageTextContainer, {
                      message: message,
                      messageOverlay: true,
                      messageTextNumberOfLines: messageTextNumberOfLines,
                      onlyEmojis: onlyEmojis
                    }, "message_text_container_".concat(messageContentOrderIndex));
                }
              })
            })]
          }), messageActions && (0, _jsxRuntime.jsx)(MessageActionList, Object.assign({
            MessageActionListItem: MessageActionListItem,
            showScreen: showScreen
          }, messageActionProps, {
            message: message
          })), !!messageReactionTitle && message.latest_reactions && message.latest_reactions.length > 0 ? (0, _jsxRuntime.jsx)(OverlayReactions, {
            alignment: alignment,
            OverlayReactionsAvatar: OverlayReactionsAvatar,
            reactions: message.latest_reactions.map(function (reaction) {
              var _reaction$user, _reaction$user2, _reaction$user3, _reaction$user4;
              return {
                alignment: clientId && clientId === ((_reaction$user = reaction.user) == null ? void 0 : _reaction$user.id) ? 'right' : 'left',
                id: (reaction == null ? void 0 : (_reaction$user2 = reaction.user) == null ? void 0 : _reaction$user2.id) || '',
                image: reaction == null ? void 0 : (_reaction$user3 = reaction.user) == null ? void 0 : _reaction$user3.image,
                name: (reaction == null ? void 0 : (_reaction$user4 = reaction.user) == null ? void 0 : _reaction$user4.name) || reaction.user_id || '',
                type: reaction.type
              };
            }),
            showScreen: showScreen,
            supportedReactions: messagesContext == null ? void 0 : messagesContext.supportedReactions,
            title: messageReactionTitle
          }) : null]
        })
      })
    });
  };
  var isScrollEnabled = !!messageActions && overlay === 'message';
  return (0, _jsxRuntime.jsx)(_ChatContext.ChatProvider, {
    value: chatContext,
    children: (0, _jsxRuntime.jsx)(_MessagesContext.MessagesProvider, {
      value: messagesContext,
      children: (0, _jsxRuntime.jsx)(_MessageContext.MessageProvider, {
        value: messageContext,
        children: (0, _jsxRuntime.jsx)(_ThemeContext.ThemeProvider, {
          mergedStyle: wrapMessageInTheme ? modifiedTheme : theme,
          children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
            pointerEvents: 'auto',
            style: [_reactNative.StyleSheet.absoluteFillObject, containerStyle],
            children: (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.PanGestureHandler, {
              enabled: overlay === 'message',
              maxPointers: 1,
              minDist: 10,
              onGestureEvent: onPan,
              children: (0, _jsxRuntime.jsx)(_reactNativeReanimated["default"].View, {
                style: [_reactNative.StyleSheet.absoluteFillObject],
                children: (0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
                  style: styles.flex,
                  children: isScrollEnabled ? (0, _jsxRuntime.jsx)(_reactNativeGestureHandler.ScrollView, {
                    alwaysBounceVertical: false,
                    contentContainerStyle: [styles.center, {
                      paddingTop: reactionListHeight
                    }],
                    showsVerticalScrollIndicator: false,
                    style: [styles.flex, styles.scrollView],
                    children: renderContent()
                  }) : renderContent(messageTextNumberOfLines)
                })
              })
            })
          })
        })
      })
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAlignment = prevProps.alignment,
    prevMessage = prevProps.message,
    prevMessageReactionTitle = prevProps.messageReactionTitle,
    prevMessagesContext = prevProps.messagesContext;
  var nextAlignment = nextProps.alignment,
    nextMessage = nextProps.message,
    nextMessageReactionTitle = nextProps.messageReactionTitle,
    nextMessagesContext = nextProps.messagesContext;
  var alignmentEqual = prevAlignment === nextAlignment;
  if (!alignmentEqual) return false;
  var messageReactionTitleEqual = prevMessageReactionTitle === nextMessageReactionTitle;
  if (!messageReactionTitleEqual) return false;
  var prevMyMessageTheme = JSON.stringify(prevMessagesContext == null ? void 0 : prevMessagesContext.myMessageTheme);
  var nextMyMessageTheme = JSON.stringify(nextMessagesContext == null ? void 0 : nextMessagesContext.myMessageTheme);
  var myMessageThemeEqual = prevMyMessageTheme === nextMyMessageTheme;
  if (!myMessageThemeEqual) return false;
  var latestReactionsEqual = Array.isArray(prevMessage == null ? void 0 : prevMessage.latest_reactions) && Array.isArray(nextMessage == null ? void 0 : nextMessage.latest_reactions) ? (prevMessage == null ? void 0 : prevMessage.latest_reactions.length) === (nextMessage == null ? void 0 : nextMessage.latest_reactions.length) && (prevMessage == null ? void 0 : prevMessage.latest_reactions.every(function (_ref5, index) {
    var _nextMessage$latest_r;
    var type = _ref5.type;
    return type === (nextMessage == null ? void 0 : (_nextMessage$latest_r = nextMessage.latest_reactions) == null ? void 0 : _nextMessage$latest_r[index].type);
  })) : (prevMessage == null ? void 0 : prevMessage.latest_reactions) === (nextMessage == null ? void 0 : nextMessage.latest_reactions);
  if (!latestReactionsEqual) return false;
  return true;
};
var MemoizedMessageOverlay = _react["default"].memo(MessageOverlayWithContext, areEqual);
var MessageOverlay = function MessageOverlay(props) {
  var _useMessageOverlayCon = (0, _MessageOverlayContext.useMessageOverlayContext)(),
    data = _useMessageOverlayCon.data,
    MessageActionList = _useMessageOverlayCon.MessageActionList,
    MessageActionListItem = _useMessageOverlayCon.MessageActionListItem,
    OverlayReactionList = _useMessageOverlayCon.OverlayReactionList,
    OverlayReactions = _useMessageOverlayCon.OverlayReactions,
    OverlayReactionsAvatar = _useMessageOverlayCon.OverlayReactionsAvatar;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    overlay = _useOverlayContext.overlay,
    setOverlay = _useOverlayContext.setOverlay;
  var componentProps = {
    MessageActionList: props.MessageActionList || MessageActionList,
    MessageActionListItem: props.MessageActionListItem || MessageActionListItem,
    OverlayReactionList: props.OverlayReactionList || OverlayReactionList || (data == null ? void 0 : data.OverlayReactionList),
    OverlayReactions: props.OverlayReactions || OverlayReactions,
    OverlayReactionsAvatar: props.OverlayReactionsAvatar || OverlayReactionsAvatar
  };
  return (0, _jsxRuntime.jsx)(MemoizedMessageOverlay, Object.assign({
    overlay: overlay,
    setOverlay: setOverlay
  }, componentProps, data || {}, props));
};
exports.MessageOverlay = MessageOverlay;
//# sourceMappingURL=MessageOverlay.js.map