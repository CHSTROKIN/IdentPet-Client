var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileAttachmentGroup = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Attachment = require("./Attachment");
var _MessageContext = require("../../contexts/messageContext/MessageContext");
var _MessagesContext = require("../../contexts/messagesContext/MessagesContext");
var _ThemeContext = require("../../contexts/themeContext/ThemeContext");
var _native = require("../../native");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/Attachment/FileAttachmentGroup.tsx";
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var FileAttachmentGroupWithContext = function FileAttachmentGroupWithContext(props) {
  var Attachment = props.Attachment,
    AudioAttachment = props.AudioAttachment,
    files = props.files,
    messageId = props.messageId,
    _props$styles = props.styles,
    stylesProp = _props$styles === void 0 ? {} : _props$styles;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    filesToDisplay = _useState2[0],
    setFilesToDisplay = _useState2[1];
  (0, _react.useEffect)(function () {
    setFilesToDisplay(files.map(function (file) {
      return Object.assign({}, file, {
        duration: file.duration || 0,
        paused: true,
        progress: 0
      });
    }));
  }, [files]);
  var onLoad = function onLoad(index, duration) {
    setFilesToDisplay(function (prevFilesToDisplay) {
      return prevFilesToDisplay.map(function (fileToDisplay, id) {
        return Object.assign({}, fileToDisplay, {
          duration: id.toString() === index ? duration : fileToDisplay.duration
        });
      });
    });
  };
  var onProgress = function onProgress(index, currentTime, hasEnd) {
    setFilesToDisplay(function (prevFilesToDisplay) {
      return prevFilesToDisplay.map(function (filesToDisplay, id) {
        return Object.assign({}, filesToDisplay, {
          progress: id.toString() === index ? hasEnd ? 1 : currentTime ? currentTime / filesToDisplay.duration : 0 : filesToDisplay.progress
        });
      });
    });
  };
  var onPlayPause = function onPlayPause(index, pausedStatus) {
    if (pausedStatus === false) {
      setFilesToDisplay(function (prevFileUploads) {
        return prevFileUploads.map(function (fileUpload, id) {
          return Object.assign({}, fileUpload, {
            paused: id.toString() !== index
          });
        });
      });
    } else {
      setFilesToDisplay(function (prevFileUploads) {
        return prevFileUploads.map(function (fileUpload) {
          return Object.assign({}, fileUpload, {
            paused: true
          });
        });
      });
    }
  };
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme$messa = _useTheme.theme.messageSimple.fileAttachmentGroup,
    attachmentContainer = _useTheme$theme$messa.attachmentContainer,
    container = _useTheme$theme$messa.container;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container, stylesProp.container],
    children: filesToDisplay.map(function (file, index) {
      return (0, _jsxRuntime.jsx)(_reactNative.View, {
        style: [{
          paddingBottom: index !== files.length - 1 ? 4 : 0
        }, stylesProp.attachmentContainer, attachmentContainer],
        children: (file.type === 'audio' || file.type === 'voiceRecording') && (0, _native.isAudioPackageAvailable)() ? (0, _jsxRuntime.jsx)(AudioAttachment, {
          item: {
            duration: file.duration,
            file: {
              name: file.title,
              uri: file.asset_url,
              waveform_data: file.waveform_data
            },
            id: index.toString(),
            paused: file.paused,
            progress: file.progress
          },
          onLoad: onLoad,
          onPlayPause: onPlayPause,
          onProgress: onProgress,
          showSpeedSettings: true,
          testID: "audio-attachment-preview"
        }) : (0, _jsxRuntime.jsx)(Attachment, {
          attachment: file
        })
      }, "".concat(messageId, "-").concat(index));
    })
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevFiles = prevProps.files;
  var nextFiles = nextProps.files;
  return prevFiles.length === nextFiles.length;
};
var MemoizedFileAttachmentGroup = _react["default"].memo(FileAttachmentGroupWithContext, areEqual);
var FileAttachmentGroup = function FileAttachmentGroup(props) {
  var propFiles = props.files,
    messageId = props.messageId;
  var _useMessageContext = (0, _MessageContext.useMessageContext)(),
    contextFiles = _useMessageContext.files;
  var _useMessagesContext = (0, _MessagesContext.useMessagesContext)(),
    _useMessagesContext$A = _useMessagesContext.Attachment,
    Attachment = _useMessagesContext$A === void 0 ? _Attachment.Attachment : _useMessagesContext$A,
    AudioAttachment = _useMessagesContext.AudioAttachment;
  var files = propFiles || contextFiles;
  if (!files.length) return null;
  return (0, _jsxRuntime.jsx)(MemoizedFileAttachmentGroup, {
    Attachment: Attachment,
    AudioAttachment: AudioAttachment,
    files: files,
    messageId: messageId
  });
};
exports.FileAttachmentGroup = FileAttachmentGroup;
var styles = _reactNative.StyleSheet.create({
  container: {
    padding: 4
  }
});
FileAttachmentGroup.displayName = 'FileAttachmentGroup{messageSimple{fileAttachmentGroup}}';
//# sourceMappingURL=FileAttachmentGroup.js.map