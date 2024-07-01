var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reply = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessageInputContext = require("../../contexts/messageInputContext/MessageInputContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _TranslationContext = require("../../contexts/translationContext/TranslationContext");
var _getResizedImageUrl = require("../../utils/getResizedImageUrl");
var _getTrimmedAttachmentTitle = require("../../utils/getTrimmedAttachmentTitle");
var _utils = require("../../utils/utils");
var _FileIcon = require("../Attachment/FileIcon");
var _VideoThumbnail = require("../Attachment/VideoThumbnail");
var _MessageAvatar = require("../Message/MessageSimple/MessageAvatar");
var _MessageTextContainer = require("../Message/MessageSimple/MessageTextContainer");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Reply/Reply.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  fileAttachmentContainer: {
    paddingLeft: 8,
    paddingVertical: 8
  },
  imageAttachment: {
    borderRadius: 8,
    height: 32,
    marginLeft: 8,
    marginVertical: 8,
    width: 32
  },
  messageContainer: {
    alignItems: 'flex-start',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1
  },
  secondaryText: {
    paddingHorizontal: 8
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  textContainer: {
    maxWidth: undefined,
    paddingHorizontal: 8
  },
  videoThumbnailContainerStyle: {
    borderRadius: 8,
    height: 50,
    marginLeft: 8,
    marginVertical: 8,
    width: 50
  },
  videoThumbnailImageStyle: {
    borderRadius: 10
  }
});
var getMessageType = function getMessageType(lastAttachment) {
  var messageType;
  var isLastAttachmentFile = lastAttachment.type === 'file';
  var isLastAttachmentAudio = lastAttachment.type === 'audio';
  var isLastAttachmentVoiceRecording = lastAttachment.type === 'voiceRecording';
  var isLastAttachmentVideo = lastAttachment.type === 'video';
  var isLastAttachmentGiphy = (lastAttachment == null ? void 0 : lastAttachment.type) === 'giphy' || (lastAttachment == null ? void 0 : lastAttachment.type) === 'imgur';
  var isLastAttachmentImageOrGiphy = (lastAttachment == null ? void 0 : lastAttachment.type) === 'image' && !(lastAttachment != null && lastAttachment.title_link) && !(lastAttachment != null && lastAttachment.og_scrape_url);
  var isLastAttachmentImage = (lastAttachment == null ? void 0 : lastAttachment.image_url) || (lastAttachment == null ? void 0 : lastAttachment.thumb_url);
  if (isLastAttachmentFile) {
    messageType = 'file';
  } else if (isLastAttachmentVideo) {
    messageType = 'video';
  } else if (isLastAttachmentAudio) {
    messageType = 'audio';
  } else if (isLastAttachmentVoiceRecording) {
    messageType = 'voiceRecording';
  } else if (isLastAttachmentImageOrGiphy) {
    if (isLastAttachmentImage) messageType = 'image';else messageType = undefined;
  } else if (isLastAttachmentGiphy) messageType = 'giphy';else messageType = 'other';
  return messageType;
};
var ReplyWithContext = function ReplyWithContext(props) {
  var _quotedMessage$attach, _stylesProp$imageAtta, _stylesProp$imageAtta2, _stylesProp$imageAtta3, _stylesProp$imageAtta4, _stylesProp$fileAttac;
  var _props$attachmentSize = props.attachmentSize,
    attachmentSize = _props$attachmentSize === void 0 ? 40 : _props$attachmentSize,
    FileAttachmentIcon = props.FileAttachmentIcon,
    MessageAvatar = props.MessageAvatar,
    quotedMessage = props.quotedMessage,
    _props$styles = props.styles,
    stylesProp = _props$styles === void 0 ? {} : _props$styles,
    t = props.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    blue_alice = _useTheme$theme$color.blue_alice,
    border = _useTheme$theme$color.border,
    grey = _useTheme$theme$color.grey,
    transparent = _useTheme$theme$color.transparent,
    white = _useTheme$theme$color.white,
    deletedText = _useTheme$theme.messageSimple.content.deletedText,
    _useTheme$theme$reply = _useTheme$theme.reply,
    container = _useTheme$theme$reply.container,
    fileAttachmentContainer = _useTheme$theme$reply.fileAttachmentContainer,
    imageAttachment = _useTheme$theme$reply.imageAttachment,
    markdownStyles = _useTheme$theme$reply.markdownStyles,
    messageContainer = _useTheme$theme$reply.messageContainer,
    secondaryText = _useTheme$theme$reply.secondaryText,
    textContainer = _useTheme$theme$reply.textContainer,
    _useTheme$theme$reply2 = _useTheme$theme$reply.videoThumbnail,
    videoThumbnailContainerStyle = _useTheme$theme$reply2.container,
    videoThumbnailImageStyle = _useTheme$theme$reply2.image;
  var messageText = typeof quotedMessage === 'boolean' ? '' : quotedMessage.text || '';
  var emojiOnlyText = (0, _react.useMemo)(function () {
    if (!messageText) return false;
    return (0, _utils.hasOnlyEmojis)(messageText);
  }, [messageText]);
  if (typeof quotedMessage === 'boolean') return null;
  var lastAttachment = (_quotedMessage$attach = quotedMessage.attachments) == null ? void 0 : _quotedMessage$attach.slice(-1)[0];
  var messageType = lastAttachment && getMessageType(lastAttachment);
  var trimmedLastAttachmentTitle = (0, _getTrimmedAttachmentTitle.getTrimmedAttachmentTitle)(lastAttachment == null ? void 0 : lastAttachment.title);
  var hasImage = !error && lastAttachment && messageType !== 'file' && messageType !== 'video' && messageType !== 'audio' && messageType !== 'voiceRecording' && (lastAttachment.image_url || lastAttachment.thumb_url || lastAttachment.og_scrape_url);
  var onlyEmojis = !lastAttachment && emojiOnlyText;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container, stylesProp.container],
    children: [(0, _jsxRuntime.jsx)(MessageAvatar, {
      alignment: 'left',
      lastGroupMessage: true,
      message: quotedMessage,
      size: 24
    }), (0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.messageContainer, {
        backgroundColor: messageType === 'other' ? blue_alice : messageType === 'giphy' ? transparent : white,
        borderColor: border,
        borderWidth: messageType === 'other' ? 0 : 1
      }, messageContainer, stylesProp.messageContainer],
      children: [!error && lastAttachment ? messageType === 'file' || messageType === 'voiceRecording' || messageType === 'audio' ? (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [styles.fileAttachmentContainer, fileAttachmentContainer, stylesProp.fileAttachmentContainer],
        children: (0, _jsxRuntime.jsx)(FileAttachmentIcon, {
          mimeType: lastAttachment.mime_type,
          size: attachmentSize
        })
      }) : hasImage ? (0, _jsxRuntime.jsx)(_reactNative.Image, {
        onError: function onError() {
          return setError(true);
        },
        source: {
          uri: (0, _getResizedImageUrl.getResizedImageUrl)({
            height: ((_stylesProp$imageAtta = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta.height) || (imageAttachment == null ? void 0 : imageAttachment.height) || styles.imageAttachment.height,
            url: lastAttachment.image_url || lastAttachment.thumb_url || lastAttachment.og_scrape_url,
            width: ((_stylesProp$imageAtta2 = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta2.width) || (imageAttachment == null ? void 0 : imageAttachment.width) || styles.imageAttachment.width
          })
        },
        style: [styles.imageAttachment, imageAttachment, stylesProp.imageAttachment]
      }) : null : null, messageType === 'video' && !lastAttachment.og_scrape_url ? (0, _jsxRuntime.jsx)(_VideoThumbnail.VideoThumbnail, {
        imageStyle: [styles.videoThumbnailImageStyle, videoThumbnailImageStyle],
        style: [styles.videoThumbnailContainerStyle, videoThumbnailContainerStyle],
        thumb_url: lastAttachment.thumb_url
      }) : null, (0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: {
          flexDirection: 'column'
        },
        children: [(0, _jsxRuntime.jsx)(_MessageTextContainer.MessageTextContainer, {
          markdownStyles: quotedMessage.type === 'deleted' ? (0, _merge["default"])({
            em: {
              color: grey
            }
          }, deletedText) : Object.assign({
            text: styles.text
          }, markdownStyles),
          message: Object.assign({}, quotedMessage, {
            text: quotedMessage.type === 'deleted' ? "_".concat(t('Message deleted'), "_") : quotedMessage.text ? quotedMessage.text.length > 170 ? "".concat(quotedMessage.text.slice(0, 170), "...") : quotedMessage.text : messageType === 'image' ? t('Photo') : messageType === 'video' ? t('Video') : messageType === 'file' || messageType === 'audio' || messageType === 'voiceRecording' ? trimmedLastAttachmentTitle || '' : ''
          }),
          onlyEmojis: onlyEmojis,
          styles: {
            textContainer: [{
              marginRight: hasImage || messageType === 'video' ? Number(((_stylesProp$imageAtta3 = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta3.height) || imageAttachment.height || styles.imageAttachment.height) + Number(((_stylesProp$imageAtta4 = stylesProp.imageAttachment) == null ? void 0 : _stylesProp$imageAtta4.marginLeft) || imageAttachment.marginLeft || styles.imageAttachment.marginLeft) : messageType === 'file' || messageType === 'audio' || messageType === 'voiceRecording' ? attachmentSize + Number(((_stylesProp$fileAttac = stylesProp.fileAttachmentContainer) == null ? void 0 : _stylesProp$fileAttac.paddingLeft) || fileAttachmentContainer.paddingLeft || styles.fileAttachmentContainer.paddingLeft) : undefined
            }, styles.textContainer, textContainer, stylesProp.textContainer]
          }
        }), messageType === 'audio' || messageType === 'voiceRecording' ? (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.secondaryText, {
            color: grey
          }, secondaryText],
          children: lastAttachment.duration ? _dayjs["default"].duration(lastAttachment.duration, 'second').format('mm:ss') : ''
        }) : null]
      })]
    })]
  });
};
var useMessageInputContextIfAvailable = function useMessageInputContextIfAvailable() {
  var contextValue = (0, _react.useContext)(_MessageInputContext.MessageInputContext);
  return contextValue;
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevQuotedMessage = prevProps.quotedMessage;
  var nextQuotedMessage = nextProps.quotedMessage;
  var quotedMessageEqual = !!prevQuotedMessage && !!nextQuotedMessage && typeof prevQuotedMessage !== 'boolean' && typeof nextQuotedMessage !== 'boolean' ? prevQuotedMessage.id === nextQuotedMessage.id && prevQuotedMessage.deleted_at === nextQuotedMessage.deleted_at && prevQuotedMessage.type === nextQuotedMessage.type : !!prevQuotedMessage === !!nextQuotedMessage;
  if (!quotedMessageEqual) return false;
  return true;
};
var MemoizedReply = _react["default"].memo(ReplyWithContext, areEqual);
var Reply = function Reply(props) {
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    message = _useMessageContext.message;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    _useMessagesContext$F = _useMessagesContext.FileAttachmentIcon,
    FileAttachmentIcon = _useMessagesContext$F === void 0 ? _FileIcon.FileIcon : _useMessagesContext$F,
    _useMessagesContext$M = _useMessagesContext.MessageAvatar,
    MessageAvatar = _useMessagesContext$M === void 0 ? _MessageAvatar.MessageAvatar : _useMessagesContext$M;
  var _useMessageInputConte = useMessageInputContextIfAvailable(),
    editing = _useMessageInputConte.editing,
    quotedMessage = _useMessageInputConte.quotedMessage;
  var quotedEditingMessage = typeof editing !== 'boolean' ? (editing == null ? void 0 : editing.quoted_message) || false : false;
  var _useTranslationContex = (0, _TranslationContext.useTranslationContext)(),
    t = _useTranslationContex.t;
  return (0, _jsxRuntime.jsx)(MemoizedReply, Object.assign({
    FileAttachmentIcon: FileAttachmentIcon,
    MessageAvatar: MessageAvatar,
    quotedMessage: message ? message.quoted_message : quotedMessage || quotedEditingMessage,
    t: t
  }, props));
};
exports.Reply = Reply;
Reply.displayName = 'Reply{reply}';
//# sourceMappingURL=Reply.js.map