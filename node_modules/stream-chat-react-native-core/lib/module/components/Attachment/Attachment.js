var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attachment = void 0;
var _react = _interopRequireDefault(require("react"));
var _AttachmentActions = require("../../components/Attachment/AttachmentActions");
var _Card = require("../../components/Attachment/Card");
var _FileAttachment = require("../../components/Attachment/FileAttachment");
var _Gallery = require("../../components/Attachment/Gallery");
var _Giphy = require("../../components/Attachment/Giphy");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _native = require("../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/Attachment.tsx";
var AttachmentWithContext = function AttachmentWithContext(props) {
  var _attachment$actions;
  var attachment = props.attachment,
    AttachmentActions = props.AttachmentActions,
    Card = props.Card,
    FileAttachment = props.FileAttachment,
    Gallery = props.Gallery,
    Giphy = props.Giphy,
    giphyVersion = props.giphyVersion,
    UrlPreview = props.UrlPreview;
  var hasAttachmentActions = !!((_attachment$actions = attachment.actions) != null && _attachment$actions.length);
  if (attachment.type === 'giphy' || attachment.type === 'imgur') {
    return (0, _jsxRuntime.jsx)(Giphy, {
      attachment: attachment,
      giphyVersion: giphyVersion
    });
  }
  if (attachment.og_scrape_url || attachment.title_link) {
    return (0, _jsxRuntime.jsx)(UrlPreview, Object.assign({}, attachment));
  }
  if (attachment.type === 'image') {
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(Gallery, {
        images: [attachment]
      }), hasAttachmentActions && (0, _jsxRuntime.jsx)(AttachmentActions, Object.assign({}, attachment), "key-actions-".concat(attachment.id))]
    });
  }
  if (attachment.type === 'video' && !attachment.og_scrape_url) {
    return (0, _native.isVideoPackageAvailable)() ? (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(Gallery, {
        videos: [attachment]
      }), hasAttachmentActions && (0, _jsxRuntime.jsx)(AttachmentActions, Object.assign({}, attachment), "key-actions-".concat(attachment.id))]
    }) : (0, _jsxRuntime.jsx)(FileAttachment, {
      attachment: attachment
    });
  }
  if (attachment.type === 'file' || attachment.type === 'audio' || attachment.type === 'voiceRecording') {
    return (0, _jsxRuntime.jsx)(FileAttachment, {
      attachment: attachment
    });
  }
  if (hasAttachmentActions) {
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsx)(Card, Object.assign({}, attachment)), (0, _jsxRuntime.jsx)(AttachmentActions, Object.assign({}, attachment), "key-actions-".concat(attachment.id))]
    });
  } else {
    return (0, _jsxRuntime.jsx)(Card, Object.assign({}, attachment));
  }
};
var areEqual = function areEqual(prevProps, nextProps) {
  var _prevAttachment$actio, _nextAttachment$actio;
  var prevAttachment = prevProps.attachment,
    isAttachmentEqual = prevProps.isAttachmentEqual,
    prevMyMessageTheme = prevProps.myMessageTheme;
  var nextAttachment = nextProps.attachment,
    nextMyMessageTheme = nextProps.myMessageTheme;
  var attachmentEqual = ((_prevAttachment$actio = prevAttachment.actions) == null ? void 0 : _prevAttachment$actio.length) === ((_nextAttachment$actio = nextAttachment.actions) == null ? void 0 : _nextAttachment$actio.length) && prevAttachment.image_url === nextAttachment.image_url && prevAttachment.thumb_url === nextAttachment.thumb_url && prevAttachment.type === nextAttachment.type;
  if (!attachmentEqual) return false;
  if (isAttachmentEqual) {
    return isAttachmentEqual(prevAttachment, nextAttachment);
  }
  var messageThemeEqual = JSON.stringify(prevMyMessageTheme) === JSON.stringify(nextMyMessageTheme);
  if (!messageThemeEqual) return false;
  return true;
};
var MemoizedAttachment = _react["default"].memo(AttachmentWithContext, areEqual);
var Attachment = function Attachment(props) {
  var attachment = props.attachment,
    PropAttachmentActions = props.AttachmentActions,
    PropCard = props.Card,
    PropFileAttachment = props.FileAttachment,
    PropGallery = props.Gallery,
    PropGiphy = props.Giphy,
    PropGiphyVersion = props.giphyVersion,
    PropMyMessageTheme = props.myMessageTheme,
    PropUrlPreview = props.UrlPreview;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    ContextAttachmentActions = _useMessagesContext.AttachmentActions,
    ContextCard = _useMessagesContext.Card,
    ContextFileAttachment = _useMessagesContext.FileAttachment,
    ContextGallery = _useMessagesContext.Gallery,
    ContextGiphy = _useMessagesContext.Giphy,
    ContextGiphyVersion = _useMessagesContext.giphyVersion,
    isAttachmentEqual = _useMessagesContext.isAttachmentEqual,
    ContextMyMessageTheme = _useMessagesContext.myMessageTheme,
    ContextUrlPreview = _useMessagesContext.UrlPreview;
  if (!attachment) {
    return null;
  }
  var AttachmentActions = PropAttachmentActions || ContextAttachmentActions || _AttachmentActions.AttachmentActions;
  var Card = PropCard || ContextCard || _Card.Card;
  var FileAttachment = PropFileAttachment || ContextFileAttachment || _FileAttachment.FileAttachment;
  var Gallery = PropGallery || ContextGallery || _Gallery.Gallery;
  var Giphy = PropGiphy || ContextGiphy || _Giphy.Giphy;
  var UrlPreview = PropUrlPreview || ContextUrlPreview || _Card.Card;
  var giphyVersion = PropGiphyVersion || ContextGiphyVersion;
  var myMessageTheme = PropMyMessageTheme || ContextMyMessageTheme;
  return (0, _jsxRuntime.jsx)(MemoizedAttachment, {
    attachment: attachment,
    AttachmentActions: AttachmentActions,
    Card: Card,
    FileAttachment: FileAttachment,
    Gallery: Gallery,
    Giphy: Giphy,
    giphyVersion: giphyVersion,
    isAttachmentEqual: isAttachmentEqual,
    myMessageTheme: myMessageTheme,
    UrlPreview: UrlPreview
  });
};
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map