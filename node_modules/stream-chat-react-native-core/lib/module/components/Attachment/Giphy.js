var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Giphy = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _ImageGalleryContext = require("../../contexts/imageGalleryContext/ImageGalleryContext");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _OverlayContext = require("../../contexts/overlayContext/OverlayContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useLoadingImage2 = require("../../hooks/useLoadingImage");
var _icons = require("../../icons");
var _Lightning = require("../../icons/Lightning");
var _utils = require("../../utils/utils");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Giphy.tsx";
var styles = _reactNative.StyleSheet.create({
  actionsRow: {
    flexDirection: 'row'
  },
  buttonContainer: {
    alignItems: 'center',
    borderTopWidth: 1,
    flex: 1,
    justifyContent: 'center'
  },
  cancel: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 16
  },
  centerChild: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    width: 270
  },
  giphy: {
    alignSelf: 'center',
    borderRadius: 2,
    height: 170,
    maxWidth: 270,
    width: 270
  },
  giphyContainer: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  giphyHeaderText: {
    fontSize: 16,
    fontWeight: '600'
  },
  giphyHeaderTitle: {
    fontSize: 14,
    marginLeft: 8
  },
  giphyMask: {
    bottom: 8,
    left: 8,
    position: 'absolute'
  },
  giphyMaskText: {
    fontSize: 13,
    fontWeight: '600'
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    width: '60%'
  },
  imageErrorIndicatorStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  imageLoadingIndicatorStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    position: 'absolute'
  },
  selectionContainer: {
    borderBottomRightRadius: 0,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
    width: 272
  },
  selectionImageContainer: {
    alignSelf: 'center',
    margin: 1
  },
  send: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 16
  },
  shuffle: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 16
  },
  shuffleButton: {
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    width: 32
  }
});
var GiphyWithContext = function GiphyWithContext(props) {
  var additionalTouchableProps = props.additionalTouchableProps,
    attachment = props.attachment,
    giphyVersion = props.giphyVersion,
    handleAction = props.handleAction,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    ImageLoadingFailedIndicator = props.ImageLoadingFailedIndicator,
    ImageLoadingIndicator = props.ImageLoadingIndicator,
    isMyMessage = props.isMyMessage,
    message = props.message,
    _onLongPress = props.onLongPress,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    setMessages = props.setMessages,
    setOverlay = props.setOverlay,
    setSelectedMessage = props.setSelectedMessage;
  var actions = attachment.actions,
    giphyData = attachment.giphy,
    image_url = attachment.image_url,
    thumb_url = attachment.thumb_url,
    title = attachment.title,
    type = attachment.type;
  var _useLoadingImage = (0, _useLoadingImage2.useLoadingImage)(),
    isLoadingImage = _useLoadingImage.isLoadingImage,
    isLoadingImageError = _useLoadingImage.isLoadingImageError,
    setLoadingImage = _useLoadingImage.setLoadingImage,
    setLoadingImageError = _useLoadingImage.setLoadingImageError;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    grey_dark = _useTheme$theme$color.grey_dark,
    grey_gainsboro = _useTheme$theme$color.grey_gainsboro,
    label_bg_transparent = _useTheme$theme$color.label_bg_transparent,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.giphy,
    buttonContainer = _useTheme$theme$messa.buttonContainer,
    cancel = _useTheme$theme$messa.cancel,
    container = _useTheme$theme$messa.container,
    giphy = _useTheme$theme$messa.giphy,
    giphyContainer = _useTheme$theme$messa.giphyContainer,
    giphyHeaderText = _useTheme$theme$messa.giphyHeaderText,
    giphyHeaderTitle = _useTheme$theme$messa.giphyHeaderTitle,
    giphyMask = _useTheme$theme$messa.giphyMask,
    giphyMaskText = _useTheme$theme$messa.giphyMaskText,
    header = _useTheme$theme$messa.header,
    selectionContainer = _useTheme$theme$messa.selectionContainer,
    send = _useTheme$theme$messa.send,
    shuffle = _useTheme$theme$messa.shuffle;
  var uri = image_url || thumb_url;
  var giphyDimensions = {};
  var defaultOnPress = function defaultOnPress() {
    setMessages([message]);
    setSelectedMessage({
      messageId: message.id,
      url: uri
    });
    setOverlay('gallery');
  };
  if (type === 'giphy' && giphyData) {
    var giphyVersionInfo = giphyData[giphyVersion];
    uri = giphyVersionInfo.url;
    giphyDimensions.height = parseFloat(giphyVersionInfo.height);
    giphyDimensions.width = parseFloat(giphyVersionInfo.width);
  }
  if (!uri) return null;
  return actions ? (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.selectionContainer, {
      backgroundColor: white,
      borderColor: "".concat(black, "0D")
    }, selectionContainer],
    testID: "giphy-action-attachment",
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.header, header],
      children: [(0, _jsxRuntime.jsx)(_icons.GiphyIcon, {}), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.giphyHeaderText, giphyHeaderText],
        children: "Giphy"
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.giphyHeaderTitle, giphyHeaderTitle, {
          color: grey_dark
        }],
        children: "/giphy ".concat(title)
      })]
    }), (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: styles.selectionImageContainer,
      children: (0, _jsxRuntime.jsx)(ImageComponent, {
        onError: function onError(error) {
          console.warn(error);
          setLoadingImage(false);
          setLoadingImageError(true);
        },
        onLoadEnd: function onLoadEnd() {
          return setLoadingImage(false);
        },
        onLoadStart: function onLoadStart() {
          return setLoadingImage(true);
        },
        resizeMode: "contain",
        source: {
          uri: (0, _utils.makeImageCompatibleUrl)(uri)
        },
        style: [styles.giphy, giphyDimensions, giphy]
      })
    }), (0, _jsxRuntime.jsx)(_reactNative.View, {
      children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: styles.actionsRow,
        children: [(0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            if (actions != null && actions[2].name && actions != null && actions[2].value && handleAction) {
              handleAction(actions[2].name, actions[2].value);
            }
          },
          style: [styles.buttonContainer, {
            borderColor: grey_gainsboro,
            borderRightWidth: 1
          }, buttonContainer],
          testID: "".concat(actions == null ? void 0 : actions[2].value, "-action-button"),
          children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.cancel, {
              color: grey
            }, cancel],
            children: actions == null ? void 0 : actions[2].text
          })
        }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            if (actions != null && actions[1].name && actions != null && actions[1].value && handleAction) {
              handleAction(actions[1].name, actions[1].value);
            }
          },
          style: [styles.buttonContainer, {
            borderColor: grey_gainsboro,
            borderRightWidth: 1
          }, buttonContainer],
          testID: "".concat(actions == null ? void 0 : actions[1].value, "-action-button"),
          children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.shuffle, {
              color: grey
            }, shuffle],
            children: actions == null ? void 0 : actions[1].text
          })
        }), (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
          onPress: function onPress() {
            if (actions != null && actions[0].name && actions != null && actions[0].value && handleAction) {
              handleAction(actions[0].name, actions[0].value);
            }
          },
          style: [styles.buttonContainer, {
            borderColor: grey_gainsboro
          }, buttonContainer],
          testID: "".concat(actions == null ? void 0 : actions[0].value, "-action-button"),
          children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.send, {
              color: accent_blue
            }, send],
            children: actions == null ? void 0 : actions[0].text
          })
        })]
      })
    })]
  }) : (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, Object.assign({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          emitter: 'giphy',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          defaultHandler: defaultOnPress,
          emitter: 'giphy',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          emitter: 'giphy',
          event: event
        });
      }
    },
    testID: "giphy-attachment"
  }, additionalTouchableProps, {
    children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, styles.centerChild, {
        backgroundColor: isMyMessage ? grey_gainsboro : white
      }, container],
      children: [(0, _jsxRuntime.jsx)(ImageComponent, {
        accessibilityLabel: "Giphy Attachment Image",
        onError: function onError(error) {
          console.warn(error);
          setLoadingImage(false);
          setLoadingImageError(true);
        },
        onLoadEnd: function onLoadEnd() {
          return setLoadingImage(false);
        },
        onLoadStart: function onLoadStart() {
          return setLoadingImage(true);
        },
        resizeMode: "contain",
        source: {
          uri: (0, _utils.makeImageCompatibleUrl)(uri)
        },
        style: [styles.giphy, giphyDimensions, giphy],
        testID: "giphy-attachment-image"
      }), isLoadingImageError && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          position: 'absolute'
        },
        children: (0, _jsxRuntime.jsx)(ImageLoadingFailedIndicator, {
          style: styles.imageErrorIndicatorStyle
        })
      }), isLoadingImage && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: {
          position: 'absolute'
        },
        children: (0, _jsxRuntime.jsx)(ImageLoadingIndicator, {
          style: styles.imageLoadingIndicatorStyle
        })
      }), (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.giphyMask, giphyMask],
        children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
          style: [styles.giphyContainer, {
            backgroundColor: label_bg_transparent
          }, giphyContainer],
          children: [(0, _jsxRuntime.jsx)(_Lightning.Lightning, {
            height: 16,
            pathFill: white,
            width: 16
          }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.giphyMaskText, {
              color: white
            }, giphyMaskText],
            children: type == null ? void 0 : type.toUpperCase()
          })]
        })
      })]
    })
  }));
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevProps$attachment = prevProps.attachment,
    prevActions = _prevProps$attachment.actions,
    prevImageUrl = _prevProps$attachment.image_url,
    prevThumbUrl = _prevProps$attachment.thumb_url,
    prevGiphyVersion = prevProps.giphyVersion,
    prevIsMyMessage = prevProps.isMyMessage,
    prevMessage = prevProps.message;
  var _nextProps$attachment = nextProps.attachment,
    nextActions = _nextProps$attachment.actions,
    nextImageUrl = _nextProps$attachment.image_url,
    nextThumbUrl = _nextProps$attachment.thumb_url,
    nextGiphyVersion = nextProps.giphyVersion,
    nextIsMyMessage = nextProps.isMyMessage,
    nextMessage = nextProps.message;
  var imageUrlEqual = prevImageUrl === nextImageUrl;
  if (!imageUrlEqual) return false;
  var thumbUrlEqual = prevThumbUrl === nextThumbUrl;
  if (!thumbUrlEqual) return false;
  var actionsEqual = Array.isArray(prevActions) === Array.isArray(nextActions) && (Array.isArray(prevActions) && Array.isArray(nextActions) && prevActions.length === nextActions.length || prevActions === nextActions);
  if (!actionsEqual) return false;
  var giphyVersionEqual = prevGiphyVersion === nextGiphyVersion;
  if (!giphyVersionEqual) return false;
  var isMyMessageEqual = prevIsMyMessage === nextIsMyMessage;
  if (!isMyMessageEqual) return false;
  var messageEqual = (prevMessage == null ? void 0 : prevMessage.id) === (nextMessage == null ? void 0 : nextMessage.id) && "".concat(prevMessage == null ? void 0 : prevMessage.updated_at) === "".concat(nextMessage == null ? void 0 : nextMessage.updated_at);
  if (!messageEqual) return false;
  return true;
};
var MemoizedGiphy = _react["default"].memo(GiphyWithContext, areEqual);
var Giphy = function Giphy(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    handleAction = _useMessageContext.handleAction,
    isMyMessage = _useMessageContext.isMyMessage,
    message = _useMessageContext.message,
    onLongPress = _useMessageContext.onLongPress,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    preventPress = _useMessageContext.preventPress;
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
    giphyVersion = _useMessagesContext.giphyVersion;
  var _useImageGalleryConte = (0, _ImageGalleryContext.useImageGalleryContext)(),
    setMessages = _useImageGalleryConte.setMessages,
    setSelectedMessage = _useImageGalleryConte.setSelectedMessage;
  var _useOverlayContext = (0, _OverlayContext.useOverlayContext)(),
    setOverlay = _useOverlayContext.setOverlay;
  var _useMessagesContext2 = (0, _MessagesContext.useMessagesContext)(),
    ContextImageLoadingFailedIndicator = _useMessagesContext2.ImageLoadingFailedIndicator,
    ContextImageLoadingIndicator = _useMessagesContext2.ImageLoadingIndicator;
  var ImageLoadingFailedIndicator = ContextImageLoadingFailedIndicator || props.ImageLoadingFailedIndicator;
  var ImageLoadingIndicator = ContextImageLoadingIndicator || props.ImageLoadingIndicator;
  return (0, _jsxRuntime.jsx)(MemoizedGiphy, Object.assign({
    additionalTouchableProps: additionalTouchableProps,
    giphyVersion: giphyVersion,
    handleAction: handleAction,
    ImageComponent: ImageComponent,
    ImageLoadingFailedIndicator: ImageLoadingFailedIndicator,
    ImageLoadingIndicator: ImageLoadingIndicator,
    isMyMessage: isMyMessage,
    message: message,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress,
    setMessages: setMessages,
    setOverlay: setOverlay,
    setSelectedMessage: setSelectedMessage
  }, props));
};
exports.Giphy = Giphy;
Giphy.displayName = 'Giphy{messageSimple{giphy}}';
//# sourceMappingURL=Giphy.js.map