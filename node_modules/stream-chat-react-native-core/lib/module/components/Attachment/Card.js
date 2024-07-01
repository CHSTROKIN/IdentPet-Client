var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _openUrlSafely = require("./utils/openUrlSafely");
var _ChatContext = require("../../contexts/chatContext/ChatContext");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _Play = require("../../icons/Play");
var _utils = require("../../utils/utils");
var _ImageBackground = require("../ImageBackground");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["description", "title"];
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Card.tsx";
var styles = _reactNative.StyleSheet.create({
  authorName: {
    fontSize: 14.5,
    fontWeight: '600'
  },
  authorNameContainer: {
    borderTopRightRadius: 15,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  authorNameFooter: {
    fontSize: 14.5,
    fontWeight: '600',
    padding: 8
  },
  authorNameMask: {
    bottom: 0,
    left: 2,
    position: 'absolute'
  },
  cardCover: {
    alignItems: 'center',
    borderRadius: 8,
    height: 140,
    justifyContent: 'center',
    marginHorizontal: 2
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  container: {
    overflow: 'hidden',
    width: 256
  },
  description: {
    fontSize: 12,
    marginHorizontal: 8
  },
  playButtonStyle: {
    alignItems: 'center',
    borderRadius: 50,
    elevation: 2,
    height: 36,
    justifyContent: 'center',
    width: 36
  },
  title: {
    fontSize: 12,
    marginHorizontal: 8
  }
});
var CardWithContext = function CardWithContext(props) {
  var additionalTouchableProps = props.additionalTouchableProps,
    author_name = props.author_name,
    CardCover = props.CardCover,
    CardFooter = props.CardFooter,
    CardHeader = props.CardHeader,
    image_url = props.image_url,
    _props$ImageComponent = props.ImageComponent,
    ImageComponent = _props$ImageComponent === void 0 ? _reactNative.Image : _props$ImageComponent,
    og_scrape_url = props.og_scrape_url,
    _onLongPress = props.onLongPress,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    _props$styles = props.styles,
    stylesProp = _props$styles === void 0 ? {} : _props$styles,
    text = props.text,
    thumb_url = props.thumb_url,
    title = props.title,
    type = props.type;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    blue_alice = _useTheme$theme$color.blue_alice,
    transparent = _useTheme$theme$color.transparent,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.card,
    authorName = _useTheme$theme$messa.authorName,
    authorNameContainer = _useTheme$theme$messa.authorNameContainer,
    authorNameFooter = _useTheme$theme$messa.authorNameFooter,
    authorNameFooterContainer = _useTheme$theme$messa.authorNameFooterContainer,
    authorNameMask = _useTheme$theme$messa.authorNameMask,
    container = _useTheme$theme$messa.container,
    cover = _useTheme$theme$messa.cover,
    _useTheme$theme$messa2 = _useTheme$theme$messa.footer,
    description = _useTheme$theme$messa2.description,
    titleStyle = _useTheme$theme$messa2.title,
    footerStyle = (0, _objectWithoutProperties2["default"])(_useTheme$theme$messa2, _excluded),
    noURI = _useTheme$theme$messa.noURI,
    roundedView = _useTheme$theme$messa.playButtonStyle.roundedView,
    _useTheme$theme$messa3 = _useTheme$theme$messa.playIcon,
    height = _useTheme$theme$messa3.height,
    width = _useTheme$theme$messa3.width;
  var uri = image_url || thumb_url;
  var defaultOnPress = function defaultOnPress() {
    return (0, _openUrlSafely.openUrlSafely)(og_scrape_url || uri);
  };
  var isVideoCard = type === 'video' && og_scrape_url;
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, Object.assign({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          additionalInfo: {
            url: og_scrape_url
          },
          emitter: 'card',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          additionalInfo: {
            url: og_scrape_url
          },
          defaultHandler: defaultOnPress,
          emitter: 'card',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          additionalInfo: {
            url: og_scrape_url
          },
          defaultHandler: defaultOnPress,
          emitter: 'card',
          event: event
        });
      }
    },
    style: [styles.container, container, stylesProp.container],
    testID: "card-attachment"
  }, additionalTouchableProps, {
    children: [CardHeader && (0, _jsxRuntime.jsx)(CardHeader, Object.assign({}, props)), CardCover && (0, _jsxRuntime.jsx)(CardCover, Object.assign({}, props)), uri && !CardCover && (0, _jsxRuntime.jsxs)(_reactNative.View, {
      children: [(0, _jsxRuntime.jsx)(_ImageBackground.ImageBackground, {
        ImageComponent: ImageComponent,
        imageStyle: styles.cardCover,
        resizeMode: "cover",
        source: {
          uri: (0, _utils.makeImageCompatibleUrl)(uri)
        },
        style: [styles.cardCover, cover, stylesProp.cardCover],
        children: isVideoCard ? (0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.playButtonStyle, roundedView, {
            backgroundColor: white
          }],
          children: (0, _jsxRuntime.jsx)(_Play.Play, {
            height: height,
            pathFill: black,
            width: width
          })
        }) : null
      }), author_name && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.authorNameMask, authorNameMask, stylesProp.authorNameMask],
        children: (0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.authorNameContainer, {
            backgroundColor: blue_alice
          }, authorNameContainer, stylesProp.authorNameContainer],
          children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
            style: [styles.authorName, {
              color: accent_blue
            }, authorName, stylesProp.authorName],
            children: author_name
          })
        })
      })]
    }), CardFooter ? (0, _jsxRuntime.jsx)(CardFooter, Object.assign({}, props)) : (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.cardFooter, footerStyle, stylesProp.cardFooter],
      children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [{
          backgroundColor: transparent
        }, !uri ? Object.assign({
          borderLeftColor: accent_blue
        }, noURI) : {}, authorNameFooterContainer, stylesProp.authorNameFooterContainer],
        children: [!uri && author_name && (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.authorNameFooter, {
            color: accent_blue
          }, authorNameFooter, stylesProp.authorNameFooter],
          children: author_name
        }), title && (0, _jsxRuntime.jsx)(_reactNative.Text, {
          numberOfLines: 1,
          style: [styles.title, {
            color: black
          }, titleStyle, stylesProp.title],
          children: title
        }), text && (0, _jsxRuntime.jsx)(_reactNative.Text, {
          numberOfLines: 3,
          style: [styles.description, {
            color: black
          }, description, stylesProp.description],
          children: text
        })]
      })
    })]
  }));
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevMyMessageTheme = prevProps.myMessageTheme;
  var nextMyMessageTheme = nextProps.myMessageTheme;
  var messageThemeEqual = JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedCard = _react["default"].memo(CardWithContext, areEqual);
var Card = function Card(props) {
  var _useChatContext = (0, _ChatContext.useChatContext)(),
    ImageComponent = _useChatContext.ImageComponent;
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    message = _useMessageContext.message,
    onLongPress = _useMessageContext.onLongPress,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    preventPress = _useMessageContext.preventPress;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
    CardCover = _useMessagesContext.CardCover,
    CardFooter = _useMessagesContext.CardFooter,
    CardHeader = _useMessagesContext.CardHeader,
    myMessageTheme = _useMessagesContext.myMessageTheme;
  return (0, _jsxRuntime.jsx)(MemoizedCard, Object.assign({
    additionalTouchableProps: additionalTouchableProps,
    CardCover: CardCover,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    channelId: message.cid,
    ImageComponent: ImageComponent,
    messageId: message.id,
    myMessageTheme: myMessageTheme,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress
  }, props), "".concat(message == null ? void 0 : message.id).concat(message == null ? void 0 : message.updated_at));
};
exports.Card = Card;
Card.displayName = 'Card{messageSimple{card}}';
//# sourceMappingURL=Card.js.map