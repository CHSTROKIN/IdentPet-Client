var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecordingInProgress = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _MessageInputContext = require("../../../../contexts/messageInputContext/MessageInputContext");
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingInProgress.tsx";
var AudioRecordingInProgressWithContext = function AudioRecordingInProgressWithContext(props) {
  var AudioRecordingWaveform = props.AudioRecordingWaveform,
    _props$maxDataPointsD = props.maxDataPointsDrawn,
    maxDataPointsDrawn = _props$maxDataPointsD === void 0 ? 80 : _props$maxDataPointsD,
    recordingDuration = props.recordingDuration,
    waveformData = props.waveformData;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    grey_dark = _useTheme$theme.colors.grey_dark,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecordingInProgress,
    container = _useTheme$theme$messa.container,
    durationText = _useTheme$theme$messa.durationText;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container],
    children: [(0, _jsxRuntime.jsx)(_reactNative.Text, {
      style: [styles.durationText, {
        color: grey_dark
      }, durationText],
      children: recordingDuration ? _dayjs["default"].duration(recordingDuration).format('mm:ss') : null
    }), (0, _jsxRuntime.jsx)(AudioRecordingWaveform, {
      maxDataPointsDrawn: maxDataPointsDrawn,
      waveformData: waveformData
    })]
  });
};
var areEqual = function areEqual(prevProps, nextProps) {
  var prevRecordingDuration = prevProps.recordingDuration;
  var nextRecordingDuration = nextProps.recordingDuration;
  var recordingDurationEqual = prevRecordingDuration === nextRecordingDuration;
  if (!recordingDurationEqual) return false;
  return true;
};
var MemoizedAudioRecordingInProgress = _react["default"].memo(AudioRecordingInProgressWithContext, areEqual);
var AudioRecordingInProgress = function AudioRecordingInProgress(props) {
  var _useMessageInputConte = (0, _MessageInputContext.useMessageInputContext)(),
    AudioRecordingWaveform = _useMessageInputConte.AudioRecordingWaveform;
  return (0, _jsxRuntime.jsx)(MemoizedAudioRecordingInProgress, Object.assign({
    AudioRecordingWaveform: AudioRecordingWaveform
  }, props));
};
exports.AudioRecordingInProgress = AudioRecordingInProgress;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 4
  },
  durationText: {
    fontSize: 16
  }
});
AudioRecordingInProgress.displayName = 'AudioRecordingInProgress{messageInput}';
//# sourceMappingURL=AudioRecordingInProgress.js.map