var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecorder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _ChannelContext = require("../../../../contexts/channelContext/ChannelContext");
var _MessageInputContext = require("../../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../../icons");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecorder.tsx";
var StopRecording = function StopRecording(_ref) {
  var stopVoiceRecordingHandler = _ref.stopVoiceRecordingHandler;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    accent_red = _useTheme$theme.colors.accent_red,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecorder,
    circleStopIcon = _useTheme$theme$messa.circleStopIcon,
    pausedContainer = _useTheme$theme$messa.pausedContainer;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    onPress: stopVoiceRecordingHandler,
    style: [styles.pausedContainer, pausedContainer],
    children: (0, _jsxRuntime.jsx)(_icons.CircleStop, Object.assign({
      fill: accent_red,
      size: 32
    }, circleStopIcon))
  });
};
var UploadRecording = function UploadRecording(_ref2) {
  var asyncMessagesMultiSendEnabled = _ref2.asyncMessagesMultiSendEnabled,
    uploadVoiceRecordingHandler = _ref2.uploadVoiceRecordingHandler;
  var _useTheme2 = (0, _ThemeContext.useTheme)(),
    _useTheme2$theme = _useTheme2.theme,
    accent_blue = _useTheme2$theme.colors.accent_blue,
    _useTheme2$theme$mess = _useTheme2$theme.messageInput.audioRecorder,
    checkContainer = _useTheme2$theme$mess.checkContainer,
    sendCheckIcon = _useTheme2$theme$mess.sendCheckIcon;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    onPress: (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return uploadVoiceRecordingHandler(asyncMessagesMultiSendEnabled);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })),
    style: [styles.checkContainer, checkContainer],
    children: (0, _jsxRuntime.jsx)(_icons.SendCheck, Object.assign({
      fill: accent_blue,
      size: 32
    }, sendCheckIcon))
  });
};
var DeleteRecording = function DeleteRecording(_ref4) {
  var deleteVoiceRecordingHandler = _ref4.deleteVoiceRecordingHandler,
    disabled = _ref4.disabled;
  var _useTheme3 = (0, _ThemeContext.useTheme)(),
    _useTheme3$theme = _useTheme3.theme,
    accent_blue = _useTheme3$theme.colors.accent_blue,
    _useTheme3$theme$mess = _useTheme3$theme.messageInput.audioRecorder,
    deleteContainer = _useTheme3$theme$mess.deleteContainer,
    deleteIcon = _useTheme3$theme$mess.deleteIcon;
  return (0, _jsxRuntime.jsx)(_reactNative.Pressable, {
    disabled: disabled,
    onPress: deleteVoiceRecordingHandler,
    style: [styles.deleteContainer, deleteContainer],
    testID: "delete-button",
    children: (0, _jsxRuntime.jsx)(_icons.Delete, Object.assign({
      fill: accent_blue,
      size: 32
    }, deleteIcon))
  });
};
var AudioRecorderWithContext = function AudioRecorderWithContext(props) {
  var asyncMessagesMultiSendEnabled = props.asyncMessagesMultiSendEnabled,
    deleteVoiceRecording = props.deleteVoiceRecording,
    disabled = props.disabled,
    micLocked = props.micLocked,
    recordingDuration = props.recordingDuration,
    recordingStopped = props.recordingStopped,
    slideToCancelStyle = props.slideToCancelStyle,
    stopVoiceRecording = props.stopVoiceRecording,
    uploadVoiceRecording = props.uploadVoiceRecording;
  var _useTheme4 = (0, _ThemeContext.useTheme)(),
    _useTheme4$theme = _useTheme4.theme,
    _useTheme4$theme$colo = _useTheme4$theme.colors,
    accent_red = _useTheme4$theme$colo.accent_red,
    grey_dark = _useTheme4$theme$colo.grey_dark,
    _useTheme4$theme$mess = _useTheme4$theme.messageInput.audioRecorder,
    arrowLeftIcon = _useTheme4$theme$mess.arrowLeftIcon,
    micContainer = _useTheme4$theme$mess.micContainer,
    micIcon = _useTheme4$theme$mess.micIcon,
    slideToCancelContainer = _useTheme4$theme$mess.slideToCancelContainer;
  if (micLocked) {
    if (recordingStopped) {
      return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(DeleteRecording, {
          deleteVoiceRecordingHandler: deleteVoiceRecording,
          disabled: disabled
        }), (0, _jsxRuntime.jsx)(UploadRecording, {
          asyncMessagesMultiSendEnabled: asyncMessagesMultiSendEnabled,
          uploadVoiceRecordingHandler: uploadVoiceRecording
        })]
      });
    } else {
      return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [(0, _jsxRuntime.jsx)(_reactNative.View, {
          style: [styles.micContainer, micContainer],
          children: (0, _jsxRuntime.jsx)(_icons.Mic, Object.assign({
            fill: recordingDuration !== 0 ? accent_red : grey_dark,
            size: 32
          }, micIcon))
        }), (0, _jsxRuntime.jsx)(StopRecording, {
          stopVoiceRecordingHandler: stopVoiceRecording
        }), (0, _jsxRuntime.jsx)(UploadRecording, {
          asyncMessagesMultiSendEnabled: asyncMessagesMultiSendEnabled,
          uploadVoiceRecordingHandler: uploadVoiceRecording
        })]
      });
    }
  } else {
    return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
        style: [styles.micContainer, micContainer],
        children: [(0, _jsxRuntime.jsx)(_icons.Mic, Object.assign({
          fill: recordingDuration !== 0 ? accent_red : grey_dark,
          size: 32
        }, micIcon)), (0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.durationLabel, {
            color: grey_dark
          }],
          children: recordingDuration ? _dayjs["default"].duration(recordingDuration).format('mm:ss') : null
        })]
      }), (0, _jsxRuntime.jsxs)(_reactNativeReanimated["default"].View, {
        style: [styles.slideToCancelContainer, slideToCancelStyle, slideToCancelContainer],
        children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
          style: [styles.slideToCancel, {
            color: grey_dark
          }],
          children: "Slide to Cancel"
        }), (0, _jsxRuntime.jsx)(_icons.ArrowLeft, Object.assign({
          fill: grey_dark,
          size: 24
        }, arrowLeftIcon))]
      })]
    });
  }
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevAsyncMessagesMultiSendEnabled = prevProps.asyncMessagesMultiSendEnabled,
    prevDisabled = prevProps.disabled,
    prevMicLocked = prevProps.micLocked,
    prevRecording = prevProps.recording,
    prevRecordingDuration = prevProps.recordingDuration,
    prevRecordingStopped = prevProps.recordingStopped;
  var nextAsyncMessagesMultiSendEnabled = nextProps.asyncMessagesMultiSendEnabled,
    nextDisabled = nextProps.disabled,
    nextMicLocked = nextProps.micLocked,
    nextRecording = nextProps.recording,
    nextRecordingDuration = nextProps.recordingDuration,
    nextRecordingStopped = nextProps.recordingStopped;
  var asyncMessagesMultiSendEnabledEqual = prevAsyncMessagesMultiSendEnabled === nextAsyncMessagesMultiSendEnabled;
  if (!asyncMessagesMultiSendEnabledEqual) return false;
  var disabledEqual = prevDisabled === nextDisabled;
  if (!disabledEqual) return false;
  var micLockedEqual = prevMicLocked === nextMicLocked;
  if (!micLockedEqual) return false;
  var recordingEqual = prevRecording === nextRecording;
  if (!recordingEqual) return false;
  var recordingDurationEqual = prevRecordingDuration === nextRecordingDuration;
  if (!recordingDurationEqual) return false;
  var recordingStoppedEqual = prevRecordingStopped === nextRecordingStopped;
  if (!recordingStoppedEqual) return false;
  return true;
};
var MemoizedAudioRecorder = _react["default"].memo(AudioRecorderWithContext, areEqual);
var AudioRecorder = function AudioRecorder(props) {
  var _useChannelContext = (0, _ChannelContext.useChannelContext)(),
    _useChannelContext$di = _useChannelContext.disabled,
    disabled = _useChannelContext$di === void 0 ? false : _useChannelContext$di;
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    asyncMessagesMultiSendEnabled = _useMessageInputConte.asyncMessagesMultiSendEnabled;
  return (0, _jsxRuntime.jsx)(MemoizedAudioRecorder, Object.assign({
    asyncMessagesMultiSendEnabled: asyncMessagesMultiSendEnabled,
    disabled: disabled
  }, props));
};
exports.AudioRecorder = AudioRecorder;
var styles = _reactNative.StyleSheet.create({
  checkContainer: {},
  deleteContainer: {},
  durationLabel: {
    fontSize: 14
  },
  micContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  pausedContainer: {},
  slideToCancel: {
    fontSize: 18
  },
  slideToCancelContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
AudioRecorder.displayName = 'AudioRecorder{messageInput}';
//# sourceMappingURL=AudioRecorder.js.map