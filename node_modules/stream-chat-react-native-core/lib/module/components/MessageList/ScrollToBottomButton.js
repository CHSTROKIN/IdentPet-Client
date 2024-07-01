var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToBottomButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _icons = require("../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageList/ScrollToBottomButton.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
    elevation: 5,
    height: 40,
    justifyContent: 'center',
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 40
  },
  touchable: {
    bottom: 20,
    position: 'absolute',
    right: 20
  },
  unreadCountNotificationContainer: {
    alignItems: 'center',
    borderRadius: 10,
    elevation: 6,
    height: 20,
    justifyContent: 'center',
    minWidth: 20,
    paddingHorizontal: 4,
    position: 'absolute',
    top: 0
  },
  unreadCountNotificationText: {
    fontSize: 11,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  wrapper: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'flex-end'
  }
});
var ScrollToBottomButton = function ScrollToBottomButton(props) {
  var onPress = props.onPress,
    _props$showNotificati = props.showNotification,
    showNotification = _props$showNotificati === void 0 ? true : _props$showNotificati,
    unreadCount = props.unreadCount;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    black = _useTheme$theme$color.black,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageList.scrollToBottomButton,
    chevronColor = _useTheme$theme$messa.chevronColor,
    container = _useTheme$theme$messa.container,
    touchable = _useTheme$theme$messa.touchable,
    unreadCountNotificationContainer = _useTheme$theme$messa.unreadCountNotificationContainer,
    unreadCountNotificationText = _useTheme$theme$messa.unreadCountNotificationText,
    wrapper = _useTheme$theme$messa.wrapper;
  if (!showNotification) return null;
  return (0, _jsxRuntime.jsx)(_reactNative.TouchableOpacity, {
    onPress: onPress,
    style: [styles.touchable, touchable],
    testID: "message-notification",
    children: (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.wrapper, wrapper],
      children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.container, {
          backgroundColor: white,
          shadowColor: black
        }, container],
        children: (0, _jsxRuntime.jsx)(_icons.Down, {
          pathFill: chevronColor ? chevronColor : black
        })
      }), !!unreadCount && (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.unreadCountNotificationContainer, {
          backgroundColor: accent_blue
        }, unreadCountNotificationContainer],
        children: (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.unreadCountNotificationText, {
            color: white
          }, unreadCountNotificationText],
          testID: "unread-count",
          children: unreadCount
        })
      })]
    })
  });
};
exports.ScrollToBottomButton = ScrollToBottomButton;
ScrollToBottomButton.displayName = 'ScrollToBottomButton{messageList{scrollToBottomButton}}';
//# sourceMappingURL=ScrollToBottomButton.js.map