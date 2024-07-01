var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioRecordingPreview = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _ThemeContext = require("../../../../contexts/themeContext/ThemeContext");
var _icons = require("../../../../icons");
var _WaveProgressBar = require("../../../ProgressControl/WaveProgressBar");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/home/runner/work/stream-chat-react-native/stream-chat-react-native/package/src/components/MessageInput/components/AudioRecorder/AudioRecordingPreview.tsx";
var AudioRecordingPreview = function AudioRecordingPreview(props) {
  var onVoicePlayerPlayPause = props.onVoicePlayerPlayPause,
    paused = props.paused,
    position = props.position,
    progress = props.progress,
    waveformData = props.waveformData;
  var _useTheme = (0, _ThemeContext.useTheme)(),
    _useTheme$theme = _useTheme.theme,
    _useTheme$theme$color = _useTheme$theme.colors,
    accent_blue = _useTheme$theme$color.accent_blue,
    grey_dark = _useTheme$theme$color.grey_dark,
    _useTheme$theme$messa = _useTheme$theme.messageInput.audioRecordingPreview,
    container = _useTheme$theme$messa.container,
    currentTime = _useTheme$theme$messa.currentTime,
    infoContainer = _useTheme$theme$messa.infoContainer,
    pauseIcon = _useTheme$theme$messa.pauseIcon,
    playIcon = _useTheme$theme$messa.playIcon,
    progressBar = _useTheme$theme$messa.progressBar;
  return (0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: [styles.container, container],
    children: [(0, _jsxRuntime.jsxs)(_reactNative.View, {
      style: [styles.infoContainer, infoContainer],
      children: [(0, _jsxRuntime.jsx)(_reactNative.Pressable, {
        onPress: onVoicePlayerPlayPause,
        children: paused ? (0, _jsxRuntime.jsx)(_icons.Play, Object.assign({
          fill: accent_blue,
          height: 32,
          width: 32
        }, playIcon)) : (0, _jsxRuntime.jsx)(_icons.Pause, Object.assign({
          fill: accent_blue,
          height: 32,
          width: 32
        }, pauseIcon))
      }), (0, _jsxRuntime.jsx)(_reactNative.Text, {
        style: [styles.currentTime, {
          color: grey_dark
        }, currentTime],
        children: _dayjs["default"].duration(position).format('mm:ss')
      })]
    }), (0, _jsxRuntime.jsx)(_reactNative.View, {
      style: [styles.progressBar, progressBar],
      children: (0, _jsxRuntime.jsx)(_WaveProgressBar.WaveProgressBar, {
        progress: progress,
        waveformData: waveformData
      })
    })]
  });
};
exports.AudioRecordingPreview = AudioRecordingPreview;
var styles = _reactNative.StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingTop: 4
  },
  currentTime: {
    fontSize: 16,
    marginLeft: 4
  },
  infoContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  progressBar: {
    flex: 3
  }
});
AudioRecordingPreview.displayName = 'AudioRecordingPreview{messageInput}';
//# sourceMappingURL=AudioRecordingPreview.js.map