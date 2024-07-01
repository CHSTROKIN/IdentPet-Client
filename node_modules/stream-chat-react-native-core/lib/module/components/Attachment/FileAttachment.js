var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileSizeDisplayText = exports.FileAttachment = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _openUrlSafely = require("./utils/openUrlSafely");
var _AttachmentActions = require("../../components/Attachment/AttachmentActions");
var _FileIcon = require("../../components/Attachment/FileIcon");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _useViewport2 = require("../../hooks/useViewport");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/FileAttachment.tsx";
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 8
  },
  details: {
    paddingLeft: 16
  },
  size: {
    fontSize: 12
  },
  title: {
    fontSize: 14,
    fontWeight: '700'
  }
});
var FileAttachmentWithContext = function FileAttachmentWithContext(props) {
  var _attachment$actions;
  var additionalTouchableProps = props.additionalTouchableProps,
    attachment = props.attachment,
    AttachmentActions = props.AttachmentActions,
    attachmentSize = props.attachmentSize,
    FileAttachmentIcon = props.FileAttachmentIcon,
    _onLongPress = props.onLongPress,
    _onPress = props.onPress,
    _onPressIn = props.onPressIn,
    preventPress = props.preventPress,
    _props$styles = props.styles,
    stylesProp = _props$styles === void 0 ? {} : _props$styles;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    black = _useTheme$theme$color.black,
    grey = _useTheme$theme$color.grey,
    white = _useTheme$theme$color.white,
    _useTheme$theme$messa = _useTheme$theme.messageSimple.file,
    container = _useTheme$theme$messa.container,
    details = _useTheme$theme$messa.details,
    fileSize = _useTheme$theme$messa.fileSize,
    title = _useTheme$theme$messa.title;
  var _useViewport = (0, _useViewport2.useViewport)(),
    vw = _useViewport.vw;
  var defaultOnPress = function defaultOnPress() {
    return (0, _openUrlSafely.openUrlSafely)(attachment.asset_url);
  };
  return (0, _jsxRuntime.jsxs)(_reactNative.TouchableOpacity, Object.assign({
    disabled: preventPress,
    onLongPress: function onLongPress(event) {
      if (_onLongPress) {
        _onLongPress({
          additionalInfo: {
            attachment: attachment
          },
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    onPress: function onPress(event) {
      if (_onPress) {
        _onPress({
          additionalInfo: {
            attachment: attachment
          },
          defaultHandler: defaultOnPress,
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    onPressIn: function onPressIn(event) {
      if (_onPressIn) {
        _onPressIn({
          additionalInfo: {
            attachment: attachment
          },
          defaultHandler: defaultOnPress,
          emitter: 'fileAttachment',
          event: event
        });
      }
    },
    testID: "file-attachment"
  }, additionalTouchableProps, {
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.container, {
        backgroundColor: white
      }, container, stylesProp.container],
      children: [(0, _jsxRuntime.jsx)(FileAttachmentIcon, {
        mimeType: attachment.mime_type,
        size: attachmentSize
      }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.details, {
          maxWidth: vw(60)
        }, details, stylesProp.details],
        children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
          numberOfLines: 2,
          style: [styles.title, {
            color: black
          }, title, stylesProp.title],
          children: attachment.title
        }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.size, {
            color: grey
          }, fileSize, stylesProp.size],
          children: getFileSizeDisplayText(attachment.file_size)
        })]
      })]
    }), (_attachment$actions = attachment.actions) != null && _attachment$actions.length ? (0, _jsxRuntime.jsx)(AttachmentActions, Object.assign({}, attachment)) : null]
  }));
};
var FileAttachment = function FileAttachment(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    onLongPress = _useMessageContext.onLongPress,
    onPress = _useMessageContext.onPress,
    onPressIn = _useMessageContext.onPressIn,
    preventPress = _useMessageContext.preventPress;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    additionalTouchableProps = _useMessagesContext.additionalTouchableProps,
    _useMessagesContext$A = _useMessagesContext.AttachmentActions,
    AttachmentActions = _useMessagesContext$A === void 0 ? _AttachmentActions.AttachmentActions : _useMessagesContext$A,
    _useMessagesContext$F = _useMessagesContext.FileAttachmentIcon,
    FileAttachmentIcon = _useMessagesContext$F === void 0 ? _FileIcon.FileIcon : _useMessagesContext$F;
  return (0, _jsxRuntime.jsx)(FileAttachmentWithContext, Object.assign({
    additionalTouchableProps: additionalTouchableProps,
    AttachmentActions: AttachmentActions,
    FileAttachmentIcon: FileAttachmentIcon,
    onLongPress: onLongPress,
    onPress: onPress,
    onPressIn: onPressIn,
    preventPress: preventPress
  }, props));
};
exports.FileAttachment = FileAttachment;
var getFileSizeDisplayText = function getFileSizeDisplayText(size) {
  if (!size) return;
  if (typeof size === 'string') {
    size = parseFloat(size);
  }
  if (size < 1000 * 1000) {
    return "".concat(Math.floor(Math.floor(size / 10) / 100), " KB");
  }
  return "".concat(Math.floor(Math.floor(size / 10000) / 100), " MB");
};
exports.getFileSizeDisplayText = getFileSizeDisplayText;
FileAttachment.displayName = 'FileAttachment{messageSimple{file}}';
//# sourceMappingURL=FileAttachment.js.map